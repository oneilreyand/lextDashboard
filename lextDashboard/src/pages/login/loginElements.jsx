import styled, { keyframes } from "styled-components";

// Keyframes for falling effect
const fallingEffect = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const FallingButton = styled.div`
  animation: ${fallingEffect} 0.3s ease-out;
`;


export const PasswordWrapper = styled.div`
    display: flex;
`
export const IconButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
 `
 
 export const IconButton = styled.img`
    cursor: pointer;
    height: 20px;
    width: 20px;
`

export const LogoIcon = styled.img`
    height: 150px;
    width: 150px;
`