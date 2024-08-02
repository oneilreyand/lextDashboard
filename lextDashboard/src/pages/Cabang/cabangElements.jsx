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
      case 'aktif':
        return `background-color: #2ecc71`; // Emerald Green
      case 'tidak aktif':
        return `background-color: #e74c3c`; // Alizarin Red
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