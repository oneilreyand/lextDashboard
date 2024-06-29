import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import SignaturePad from '../../components/SignaturePad'
import { Container } from './settingElements'; // Asumsikan settingElements sudah diimpor dan mengandung Container

const Setting = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccssesSendTtd, setIsSuccssesSendTtd] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    console.log('Submit button clicked');
    setIsSuccssesSendTtd(true);
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    handleCloseModal();
    setIsSuccssesSendTtd(false);
  };

  return (
    <Container>
      <Button onClick={handleOpenModal}>Open Modal</Button>
        <Modal
          size="small"
          title={isSuccssesSendTtd ? "Thank you" : "Plese sign in the box below"}
          subtitle={isSuccssesSendTtd ? "You can now close this popup" : "Make sure the signature looks liken the one in your id"}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isOpen={isModalOpen}
          // isModalAction
        >
          <SignaturePad onCancel={handleCancel} onSubmit={handleSubmit}/>
        </Modal>
    </Container>
  );
};

export default Setting;
