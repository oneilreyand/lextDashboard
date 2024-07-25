import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(2);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #aaa;
`;
