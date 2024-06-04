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
            container={document.getElementById('modal-root')}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '320px',
                zIndex: 100
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'white',
                    borderRadius: '16px',

                    minWidth: '300px',
                    padding: '20px',
                    maxHeight: '95%',


                }}
            >
                <IconButton
                    onClick={handleCloseModal}
                    sx={{
                        p: 0,
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    <svg style={{ width: "24px", height: "24px" }}>
                        <use href={`${sprite}#icon-x`} width={24} height={24} />
                    </svg>
                </IconButton>
                {children}
            </Box>
        </Modal>, document.getElementById('modal-root')
    ) : null
};

export default ModalWrap;
