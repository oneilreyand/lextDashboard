import styled from "styled-components";

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatusIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ success }) => (success ? '#5d87ff' : '#f44336')};
  color: white;
  font-size: 24px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Optional: add box shadow for better visibility */

  & > i {
    margin-right: 8px;
  }
`;

export const SuccessContainer = styled.div`
  height: 400px;
  width: 300px;
`