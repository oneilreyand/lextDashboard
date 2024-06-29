import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

export const ErrorMessage = styled.h2`
  font-size: 2rem;
`;

export const ErrorDetails = styled.pre`
  font-size: 1.2rem;
  color: #333;
`;

export const RetryButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  color: #fff;
  background-color: #5D87FF;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4A76D0;
  }
`;
