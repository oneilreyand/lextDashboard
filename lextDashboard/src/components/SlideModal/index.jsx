import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalContainer,
  ModalContent,
  Backdrop,
  ModalIconButtonWrapper,
  LeftButtonWrapper,
  RightButtonWrapper,
  NormalComponent,
  MaximizeComponent,
} from './slideModalElements.jsx';

import {
  closeSvg,
  chevronLeftBlack,
  chevronRightBlack
} from '../../assets/index.jsx';
import ButtonIcon from '../ButtonIcon/index.jsx';

const SlideModal = ({ isOpen, onClose, normalComponent, maximizeComponent, from = 'right',
isMaximizeHandler }) => {
  const [maximize, setMaximize] = useState(false);
  
  const maxminimizeHandler = () => {
    setMaximize(!maximize);
  };
  useEffect(() => {
    if(!isOpen) {
      setMaximize(false);
    }
  }, [isOpen])
 
  
  return (
    <>
      {isOpen && <Backdrop onClick={onClose} />}
      <ModalContainer isOpen={isOpen} from={from} maximize={maximize}>
        <ModalIconButtonWrapper>
          <LeftButtonWrapper>
            {isMaximizeHandler &&
            <ButtonIcon 
              icon={maximize ? chevronRightBlack : chevronLeftBlack}
              onClick={maxminimizeHandler}
            />
            }
          </LeftButtonWrapper>
          <RightButtonWrapper>
            <ButtonIcon
              icon={closeSvg}
              onClick={onClose}
            />
          </RightButtonWrapper>
        </ModalIconButtonWrapper>
        <ModalContent>
          {maximize &&
            <MaximizeComponent>
              {maximizeComponent}
            </MaximizeComponent>
          }
          <NormalComponent>
            {normalComponent}
          </NormalComponent>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

SlideModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  normalComponent: PropTypes.node.isRequired,
  maximizeComponent: PropTypes.node.isRequired,
  from: PropTypes.oneOf(['right', 'left']).isRequired,
  isMaximizeHandler: PropTypes.bool.isRequired,
};

export default SlideModal;
