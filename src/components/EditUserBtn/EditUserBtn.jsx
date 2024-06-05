

import Modal from 'components/ModalWrap/ModalWrap';
import React, { useState } from 'react';
import sprite from '../../img/svg/symbol-defs.svg'
import { Box, Button } from '@mui/material';
import ModalEditUser from 'components/ModalEditUser/ModalEditUser';
const EditUserBtn = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);

    };

    return (
        <Box sx={{ width: "38px", height: "38px", borderRadius: "100%", background: "#FFF4DF", display: 'flex', justifyContent: "center" }}>
            <Button
                type="button"
                onClick={handleClick}


            >
                <svg width={18} height={18}>
                    <use href={`${sprite}#icon-edit-2`} style={{ paddingLeft: "8px", fill: "var(--secondary-color)" }} ></use>
                </svg>
            </Button>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalEditUser onClose={() => setModalOpen(false)} />
            </Modal>
        </Box>
    );
};

export default EditUserBtn;