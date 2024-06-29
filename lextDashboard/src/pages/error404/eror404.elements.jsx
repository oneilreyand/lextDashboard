import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

export const ErrorMessage = styled.h1`
    font-size: 2rem;
`;

export const ErrorDescription = styled.p`
    font-size: 1.2rem;
    color: #333;
`;
