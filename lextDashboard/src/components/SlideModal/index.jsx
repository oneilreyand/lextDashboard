import PropTypes from 'prop-types';
import { ModalContainer, ModalContent, Backdrop } from './slideModalElements';

const SlideModal = ({ isOpen, onClose, children, from = 'right' }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={onClose} />}
      <ModalContainer isOpen={isOpen} from={from}>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </>
  );
};

SlideModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    from: PropTypes.oneOf(['right', 'left']).isRequired,
  };

export default SlideModal;
