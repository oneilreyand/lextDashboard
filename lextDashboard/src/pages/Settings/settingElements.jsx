import styled from "styled-components";

export const SettingsTitle = styled.h1`
    font-weight: 600;
`;

export const MainMenu = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: 500;
  color: #5d87ff;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const SubMenu = styled.div`
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 5px;

  &:hover {
    color: #aaa;
  }
`;

export const SubMenuContainer = styled.div`
  margin-bottom: 10px;
`;

export const MenuContainer = styled.div`
  margin-bottom: 20px;
`;

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

export const ContentContainer = styled.div`
  position: relative;
  max-height: 60vh;
  overflow-y: auto;
`;

export const DescTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Desc = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;