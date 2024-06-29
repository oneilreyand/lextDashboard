import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line react-refresh/only-export-components
const progressAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ProgressIcon = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: conic-gradient(from 0deg, ${({ primaryColor }) => primaryColor}, ${({ secondaryColor }) => secondaryColor});
  border-radius: 50%;
  animation: ${progressAnimation} 1s linear infinite;
`;