import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  height: ${({ maximize }) => (maximize ? '100vh' : '100vh')};
  width: ${({ maximize }) => (maximize ? '80%' : '400px')};
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out;
  ${({ isOpen, from }) => isOpen ? 
    (from === 'right' ? 'transform: translateX(0); right: 0;' : 'transform: translateX(0); left: 0;') : 
    (from === 'right' ? 'transform: translateX(100%); right: 0;' : 'transform: translateX(-100%); left: 0;')
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  overflow-y: auto;
  display: flex;

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

export const ModalIconButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;

export const LeftButtonWrapper = styled.div``;

export const RightButtonWrapper = styled.div``;

export const NormalComponent = styled.div`
  width: 400px;
`;
export const MaximizeComponent = styled.div`
  width: 80%;
`;



