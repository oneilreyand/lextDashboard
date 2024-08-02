import PropTypes from 'prop-types';
import Button from '../Button/index.jsx';
import { closeSvg } from '../../assets/index.jsx';


import {
  ModalContentContainer,
  ModalActions,
  ModalContent,
  ModalOverlay,
  ModalSubtitle,
  ModalTitle,
  ContentWrapper,
  CloseIConWrapper,
} from './modalElements.jsx'
import ButtonIcon from '../ButtonIcon/index.jsx';
import Spiner from '../../components/Spiner/index.jsx'

const Modal = ({
  isOpen,
  onClose,
  size,
  title,
  subtitle,
  onSubmit,
  onCancel,
  isModalAction,
  children,
  isLoadingSubmit,
}) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContentContainer>
      <ModalContent size={size}>
        <CloseIConWrapper>
            <ButtonIcon
              icon={closeSvg}
              onClick={onClose}
            />
        </CloseIConWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        <ContentWrapper>{children}</ContentWrapper>
        {isModalAction && (
          <ModalActions>
            <Button 
              variant="contained"
              size="large"
              onClick={onSubmit}
              iconPosition='right'
              icon = {
                isLoadingSubmit && 
                  <Spiner 
                    size={15}
                    color={'secondary'}
                  />
                }
              >
              Submit
            </Button>
            <Button variant="outline" size="large" onClick={onCancel}>
              Cancel
            </Button>
          </ModalActions>
        )}
      </ModalContent>
      <ModalOverlay onClick={handleOverlayClick} />
    </ModalContentContainer>
  ) : null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  isModalAction: PropTypes.bool,
  children: PropTypes.node,
  isLoadingSubmit: PropTypes.bool,
};

export default Modal;
