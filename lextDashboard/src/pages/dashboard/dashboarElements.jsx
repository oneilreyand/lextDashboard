import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  background-color: white;
  padding: 30px;
//   height: 100vh
`;

export const FormWrapper = styled.div`
    width: 50%;
`

export const DynamicInputWrapper = styled.div`
  flex: 1 1 1;
`;

export const FormContainer = styled.div`
    display: flex;
    gap: 2%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Tombol ke tepi kiri */
  align-items: flex-end; /* Tombol ke bawah */
  flex-wrap: wrap;
  gap: 1rem; /* Tambahkan jarak antar tombol */
  padding: 1rem; /* Tambahkan padding jika diperlukan */
  width: 100%; /* Sesuaikan lebar kontainer tombol */
`;