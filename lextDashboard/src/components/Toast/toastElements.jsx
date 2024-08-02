import styled, { keyframes } from 'styled-components';

// Keyframe animation for border color change
const borderColorAnimation = (startColor) => keyframes`
  0% {
    border-color: ${startColor};
  }
  100% {
    border-color: #ddd;
  }
`;

// Styled components
export const ToastContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 30px;
  border-radius: 10px;
//   background: #fff;
  padding: 10px 25px 10px 15px;
  background-color: ${props => props.color};
  overflow: hidden;
  transform: translateX(${props => props.active ? '0%' : 'calc(100% + 30px)'});
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
  animation: ${props => props.active ? borderColorAnimation(props.color) : 'none'} 5s linear forwards;
  z-index: 2000;
`;

export const MessageContainer = styled.div`
  max-width: 500px;
  font-size: 0.9rem;
  font-weight: 300;
  position: relative;
`;

export const ProgressBarBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ddd;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${props => props.color || '#4070f4'};
  transition: width 5s linear;
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 5px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const StatusWrapper = styled.h3`
  color: ${(props) => 
    props.status === 'success' ? '#4070f4' : 
    props.status === 'error' ? '#ff0000' : 
    props.status === 'warning' ? '#ffa500' : 
    '#4070f4'
  }
`;
