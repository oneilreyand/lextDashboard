import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #aaa;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.8rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;

export const InfoMessage = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
`;

export const ItemCount = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  background: #f0f0f0;
  border-top: 1px solid #ccc;
`;
