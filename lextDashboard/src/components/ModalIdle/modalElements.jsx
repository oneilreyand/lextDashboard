import styled, { keyframes, css } from 'styled-components';

const overlayAnimation = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const contentAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Pastikan overlay berada di atas konten lain */
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1001; /* Pastikan konten modal berada di atas overlay */
  animation: ${contentAnimation} 0.5s ease-out;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Background hitam dengan opacity 30% */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Pastikan overlay berada di belakang konten modal */
  animation: ${overlayAnimation} 0.5s ease-out;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
`;
