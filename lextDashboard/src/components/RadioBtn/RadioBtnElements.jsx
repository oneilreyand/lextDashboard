import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRadio = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'dodgerblue' : 'white')};
  border-radius: 50%;
  border: 1px solid dodgerblue;
  transition: all 150ms;
  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5);
  }
`;

export const Label = styled.label`
  margin-left: 8px;
  font-size: 16px;
  color: #333;
`;
