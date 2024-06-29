import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.675rem;
  font-weight: 400;
  line-height: 1.334rem;
  color: gray;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: ${({ isLarge }) => (isLarge ? 'calc(2em + 1rem + 2px)' : 'calc(1.5em + .75rem + 2px)')};
  padding: ${({ isLarge }) => (isLarge ? '0.5rem' : '.375rem .75rem')};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #F4F7FA;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: lightgray;
  }

  &:hover {
    border-color: gray;
  }

  &:focus {
    border-color: ${props => (props.hasError ? 'red' : 'dodgerblue')};
    box-shadow: 0 0 8px ${props => (props.hasError ? 'red' : '#5D87ff')};
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #ddd;
    cursor: not-allowed;
    color: #6c757d;
  }
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #F4F7FA;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: lightgray;
  }

  &:hover {
    border-color: gray;
  }

  &:focus {
    border-color: ${props => (props.hasError ? 'red' : 'dodgerblue')};
    box-shadow: 0 0 8px ${props => (props.hasError ? 'red' : '#5D87ff')};
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #ddd;
    cursor: not-allowed;
    color: #6c757d;
  }

  // Style for options within the select element
  option {
    background-color: white;
    border-bottom: 1px solid gray;
    padding: .375rem .75rem;

    &:hover {
      background-color: #f4f7fa;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.675rem;
`;

export const Info = styled.div`
  color: #495057;
  font-size: 0.675rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
