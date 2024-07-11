import styled from "styled-components";

export const AvatarDetail = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #ddd;
`


export const AvatarDetailWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const StatusField = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  ${(props) => {
    switch (props.status) {
      case 'Registrasi':
        return `background-color: #3498db`; // Light Blue
      case 'Pemeriksaan Awal':
        return `background-color: #e67e22`; // Carrot Orange
      case 'Konsultasi Dokter':
        return `background-color: #2ecc71`; // Emerald Green
      case 'Resep Dikeluarkan':
        return `background-color: #e74c3c`; // Alizarin Red
      case 'Pendaftaran Apotek':
        return `background-color: #95a5a6`; // Concrete Gray
      case 'Penyiapan Obat':
        return `background-color: #f1c40f`; // Sunflower Yellow
      case 'Obat Diterima':
        return `background-color: #1abc9c`; // Turquoise
      case 'Selesai Konsultasi Dokter Tanpa Obat':
        return `background-color: #9b59b6`; // Amethyst Purple
      case 'Pembayaran Cashier':
        return `background-color: #f39c12`; // Orange
      default:
        return `background-color: #6c757d`; // Default Gray
    }
  }}
`;

export const PaymentMethodeField = styled.span`
padding: 5px 10px;
border-radius: 5px;
color: white;
font-weight: bold;
${(props) => {
  switch (props.paymentMethod) {
    case 'BPJS':
      return `background-color: #6c757d;`; // hijau
    case 'Tunai':
      return `background-color: #28a745;`; // abu-abu
    default:
      return `background-color: #6c757d;`; // default abu-abu
  }
}}
`