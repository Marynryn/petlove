import Button from 'components/Button/Button'
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'components/ModalWrap/ModalWrap';
import React, { useState } from 'react'


const LogOutBtn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = (type) => {

        setModalOpen(!modalOpen);
    };
    return (
        <div>
            <Button type="button" onClick={() => toggleModal()}>Log Out</Button>
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <ModalApproveAction />

            </Modal>
        </div>
    )
}
export default LogOutBtn;