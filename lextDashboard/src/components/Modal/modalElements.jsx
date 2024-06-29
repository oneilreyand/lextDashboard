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
  width: ${(props) => (props.size === 'large' ? '600px' : '400px')}; /* Ubah lebar berdasarkan size */
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

export const CloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #888;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  font-weight: 500;
`;

export const ModalSubtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: gray;
  margin-bottom: 15px
`;

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
