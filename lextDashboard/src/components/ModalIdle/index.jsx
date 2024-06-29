import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalOverlay,
  ModalContent,
  ModalContentContainer,
} from './modalElements';

const Modal = ({ isOpen, onClose, timeout = 120, children }) => {
  const [countdown, setCountdown] = useState(timeout);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setCountdown(timeout);
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isOpen, timeout, onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContentContainer>
      <ModalContent>
        {children}
        <div>Closing in {countdown} seconds...</div>
      </ModalContent>
      <ModalOverlay onClick={handleOverlayClick} isOpen={isOpen} />
    </ModalContentContainer>
  ) : null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Modal;
