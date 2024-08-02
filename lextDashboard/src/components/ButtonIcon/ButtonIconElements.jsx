import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }

  /* Add any additional styling here */
`;

export const Icon = styled.img`
  height: 1.3rem;
  width: 1.3rem;
`
