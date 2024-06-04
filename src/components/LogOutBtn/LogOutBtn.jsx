import Btn from 'components/Button/Button';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'components/ModalWrap/ModalWrap';
import React, { useState } from 'react';

const LogOutBtn = ({ onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleLogOutClick = () => {
        setModalOpen(true);
        if (modalOpen === true) {
            onClose();

        }
    };

    return (
        <div>
            <Btn
                type="button"
                onClick={handleLogOutClick}
                bgColor="var(--accent-color)"
                textColor="var(--secondary-color)"
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

