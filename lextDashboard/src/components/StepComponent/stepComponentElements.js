import styled from 'styled-components';

// Styled components
export const StepContainer = styled.div`
  display: flex;
  align-items: center;
//   justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StepCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.completed ? '#5D87ff' : '#ccc')};
  border: 2px solid ${(props) => (props.completed ? '#5D87ff' : '#ccc')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  z-index: 1;
`;

export const Line = styled.div`
  height: 2px;
  width: 150px;
  background-color: ${(props) => (props.completed ? '#5D87ff' : '#ccc')};
  margin: 0 8px;
  z-index: 0;
`;
