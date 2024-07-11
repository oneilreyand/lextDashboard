import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 400px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  ${({ isOpen, from }) => isOpen ? 
    (from === 'right' ? 'transform: translateX(0); right: 0;' : 'transform: translateX(0); left: 0;') : 
    (from === 'right' ? 'transform: translateX(100%); right: 0;' : 'transform: translateX(-100%); left: 0;')
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
