
import { AuthNav } from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import sprite from '../../img/svg/symbol-defs.svg'
import AppNav from 'components/AppNav/AppNav';
import { Backdrop, Box, Button, IconButton, Modal, } from '@mui/material';
import { useLocation } from 'react-router-dom/dist';


const MobileMenu = ({ isOpen, onClose, isLog }) => {

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
        >
            <Box sx={style}>
                <IconButton edge="start" aria-label="menu" sx={{ display: "flex", p: 0, mr: 0, ml: "auto" }} onClick={handleCloseModal}>
                    <svg width={32} height={32} style={{ stroke: `${iconColor}` }}>
                        <use href={`${sprite}#icon-x`}></use>
                    </svg>
                </IconButton>
                <AppNav />
                {isLog ? <UserMenu /> : <AuthNav />}
            </Box>
        </Modal>


        , document.getElementById('modal-root')
    ) : null
};

export default MobileMenu;
