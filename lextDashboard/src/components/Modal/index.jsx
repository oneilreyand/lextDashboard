import PropTypes from 'prop-types';
import {
  ModalOverlay,
  ModalContent,
  ModalContentContainer,
  ModalTitle,
  ModalSubtitle,
  ModalActions,
  CloseButton,
  CloseIcon,
} from './modalElements';
import Button from '../Button';
import {closeSvg} from '../../assets'
const Modal = (
  { 
    isOpen, onClose, children,
    size, title, subtitle, onSubmit,
    onCancel, isModalAction,
}
) => {


  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContentContainer>
      <ModalContent size={size}>
        <CloseButton onClick={onClose}>
          <CloseIcon src={closeSvg} alt={`close`} />
        </CloseButton>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        {children}
        {isModalAction &&
          <ModalActions>
              <Button variant="contained" size="large" onClick={onSubmit}>
                Submit
              </Button>
              <Button variant="outline" size="large" onClick={onCancel}>
                Cancel
              </Button>
          </ModalActions>
        }
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
  size: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  isModalAction: PropTypes.bool,
};

export default Modal;
