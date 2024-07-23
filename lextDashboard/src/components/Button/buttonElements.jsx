import styled, { css } from 'styled-components';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => (size === 'large' ? '1rem' : '0.875rem')};
  padding: ${({ size }) => (size === 'large' ? '0.75rem 1.5rem' : '0.5rem 1rem')};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  width: 100%;
  &:disabled {
    background-color: #ddd;
    color: #aaa;
    border-color: #ddd;
  }
  margin-bottom: 8px;
`;

const containedStyles = css`
  background-color: #5d87ff;
  color: white;
  border: 1px solid #5d87ff;

  &:hover {
    background-color: #476bb4;
  }

  &:disabled:hover {
    background-color: #ddd;
    color: #aaa;
    border-color: #ddd;
  }
`;

const outlineStyles = css`
  background-color: transparent;
  color: #5d87ff;
  border: 1px solid #5d87ff;

  &:hover {
    background-color: #e1e8ff;
  }

  &:disabled:hover {
    background-color: #ddd;
    color: #aaa;
    border-color: #ddd;
  }
`;

const activeStyles = css`
  background-color: #5d87ff;
  color: white;
  border: 1px solid #5d87ff;
`;

export const StyledButton = styled.button`
  ${buttonStyles}
  ${({ variant }) => (variant === 'contained' ? containedStyles : outlineStyles)}
  ${({ button_isactive }) => button_isactive && activeStyles}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${({ iconPosition }) => (iconPosition === 'right' ? '0' : '0.5rem')};
  margin-left: ${({ iconPosition }) => (iconPosition === 'left' ? '0' : '0.5rem')};
`;
