import styled, { keyframes } from 'styled-components';

// Keyframes for the linear progress animation
const progressAnimation = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
`;

// Styled component for the progress container
export const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
`;

// Styled component for the progress bar
export const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #5d87ff;
  transition: width 0.5s ease;
  position: relative;
`;

// Styled component for the animation effect (optional)
export const ProgressBarAnimation = styled.div`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 50%;
  top: 0;
  animation: ${progressAnimation} 2s linear infinite;
`;
