import styled from 'styled-components';

export const ModalContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  width: ${(props) => (props.size === 'large' ? '800px' : '400px')};
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
`;

export const ModalSubtitle = styled.h3`
  color: grey;
`;

export const ContentWrapper = styled.div`
  margin: 20px 0;
  max-height: 60vh;
  overflow-y: auto;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CloseIConWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`