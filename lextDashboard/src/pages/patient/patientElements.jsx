import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  ${(props) => {
    if (!props.noPadding) {
      return `
        padding: 30px;
      `;
    }
  }}
  flex-direction: ${(props) => props.direction || 'column'};
  width: 100%; /* Ensure Container takes full width */
  height: 100%; /* Full viewport height */
  overflow-y: auto;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  width: ${(props) => (props.size / 12) * 100}%;

  & > div {
    max-width: 100%; /* Ensure GridItem doesn't exceed full width */
  }
`;

export const GridItem = styled.div`
  // padding: 16px;
  ${(props) => props.isBorder && 'border: 1px solid #ddd;'};
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  overflow: ${(props) => (props.scrollable ? 'auto' : 'hidden')};
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
  height: 100%; /* Full height to enable scrolling */
`;

export const DetailContainer = styled.div`
  padding: 16px;
  // border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PatientName = styled.span`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const PatientGender = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: gray;
`;

export const PatientPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`

`;

export const LefLine = styled.div`
  height:100%;
  border-right: 1px solid #ddd;
`;

export const ListButtonWrapper = styled.div`
  // border: 1px solid #ccc;
  border-radius:0 20px 0 0;
  background-color: #49BEFF20;
`;

export const ListButtonTitleWrapper = styled.div `
  display: flex;
  justify-content: center;
  aligment-item: center;
`;

export const ListButtonTitle = styled.div ` 
  display: flex;
  justify-content: center;
  aligment-item: center;
  padding: 12px;
  font-size: 0.9rem;
`;

export const HideButtonListWrapper= styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  aligment-item: center;
  // max-width: 20%;
  // height: 100%;
  justify-content: center;
  aligment-item: center;
  background-color: yellow;
  cursor: pointer;
`;

export const HiideIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const ListWrapper = styled.div`
  max-height: ${(props) => (props.isShowListPatient ? '500px' : '0')};
  opacity: ${(props) => (props.isShowListPatient ? '1' : '0')};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
`;
