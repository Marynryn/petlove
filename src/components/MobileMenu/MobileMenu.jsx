import { AuthNav } from 'components/AuthNav/AuthNav';

import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import sprite from '../../img/svg/symbol-defs.svg'
import AppNav from 'components/AppNav/AppNav';
import { Backdrop, Box, IconButton, Modal } from '@mui/material';
import { useLocation } from 'react-router-dom/dist';
import { IsLoggedIn } from 'helpers/isLoggedIn';
import LogOutBtn from 'components/LogOutBtn/LogOutBtn';

const MobileMenu = ({ isOpen, onClose }) => {
    const { isLogIn } = IsLoggedIn();
    const location = useLocation();

    const iconColor = location.pathname === '/' ? '-var(--primary-color)' : 'var( --background-color)';
    const style = {
        position: 'absolute',
        top: 0,
        right: 0,
        height: "100%",
        width: 218,
        bgcolor: 'background.paper',
        p: "28px 20px 40px",
    };

    const handleCloseModal = useCallback(() => {
        onClose(false);
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);

    return isOpen ? ReactDOM.createPortal(
        <Modal
            open={Boolean(isOpen)}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                onClick: handleBackdropClick,
            }}
            sx={{ zIndex: 90 }}
            container={document.getElementById('modal-root')}
        >
            <Box sx={style}>
                <IconButton edge="start" aria-label="menu" sx={{ display: "flex", p: 0, mr: 0, ml: "auto" }} onClick={handleCloseModal}>
                    <svg width={32} height={32} style={{ color: `${iconColor}` }}>
                        <use href={`${sprite}#icon-x`}></use>
                    </svg>
                </IconButton>
                <Box sx={{ mt: "176px", mb: "280px" }}><AppNav /></Box>
                {isLogIn ? <LogOutBtn onClose={handleCloseModal} /> : <AuthNav />}
            </Box>
        </Modal>
        , document.getElementById('modal-root')
    ) : null;
};

export default MobileMenu;
