import Btn from 'components/Button/Button';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'components/ModalWrap/ModalWrap';
import React, { useState } from 'react';

const LogOutBtn = ({ onClose, props }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleLogOutClick = () => {
        setModalOpen(true);
        if (modalOpen === true) {
            onClose();

        }
    };
    const bgColor = props ? "var(--secondary-color)" : "var(--accent-color)";
    const textColor = props ? "var(--background-color)" : "var(--secondary-color)";
    return (
        <div style={{ width: "100%" }}>
            <Btn
                type="button"
                onClick={handleLogOutClick}
                bgColor={bgColor}
                textColor={textColor}
            >
                LOG OUT
            </Btn>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalApproveAction onClose={() => setModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default LogOutBtn;

