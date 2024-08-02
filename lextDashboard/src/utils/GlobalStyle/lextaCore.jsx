import styled from 'styled-components';

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
  overflow: hidden; /* Hide overflow to ensure internal scrolling */
  // height: 100%;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  width: ${(props) => (props.size / 12) * 100}%;

  & > div {
    flex: 0 0 100%; /* Ensure GridItem takes full width */
    max-width: 100%; /* Ensure GridItem doesn't exceed full width */
  }
`;

export const GridItem = styled.div`
  padding: 16px;
  ${(props) => props.isBorder && 'border: 1px solid #ddd;'};
  border-radius: 4px;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Tombol ke tepi kiri */
  align-items: flex-end; /* Tombol ke bawah */
  flex-wrap: wrap;
  gap: 1rem; /* Tambahkan jarak antar tombol */
  padding: 0.6rem; /* Tambahkan padding jika diperlukan */
  width: 100%; /* Sesuaikan lebar kontainer tombol */
`;

export const ScrollableTableContainer = styled.div`
  overflow-x: auto;
`;
