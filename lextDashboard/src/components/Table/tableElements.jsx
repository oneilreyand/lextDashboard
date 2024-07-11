import styled from 'styled-components';

// Styled components for the table
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

export const StyledTableHead = styled.thead`
  // background-color: #5D87ff;
  `;
  
  export const StyledTableBody = styled.tbody`
  `;
  
  export const StyledTableRow = styled.tr`

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  `;
  
  export const StyledTableCell = styled.td`
  font-size: 0.875rem;
  font-weight: 300;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  white-space: nowrap
`;

export const StyledTableHeaderCell = styled.th`
  font-size: 1rem;
  font-weight: 400;
  padding: 5px;
  // color: white;
  border-bottom: 1px solid #ddd;
  text-align: left;
  white-space: nowrap
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #ddd;
`;
