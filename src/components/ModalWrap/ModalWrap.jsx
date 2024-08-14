import React, { useCallback, useEffect } from 'react';
import sprite from "../../img/svg/symbol-defs.svg";
import ReactDOM from 'react-dom';
import { Box, IconButton, Backdrop, Modal } from '@mui/material';

const ModalWrap = ({ isOpen, onClose, children }) => {

    const handleCloseModal = useCallback(() => {
        onClose(false);
    }, [onClose]);

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
            open={isOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            container={() => document.getElementById('modal-root')} // Передаем функцию для определения контейнера
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    width: '80%',
                    maxWidth: "426px",
                    padding: '20px',
                    maxHeight: '95%',
                    outline: 'none',
                }}
            >
                <IconButton
                    onClick={handleCloseModal}
                    sx={{
                        p: 0,
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: "30px",
                        height: "30px",
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    <svg style={{ width: "24px", height: "24px" }} >
                        <use href={`${sprite}#icon-x`} width={24} height={24} />
                    </svg>
                </IconButton>
                {children}
            </Box>
        </Modal>, document.getElementById('modal-root')
    ) : null;
};

export default ModalWrap;
