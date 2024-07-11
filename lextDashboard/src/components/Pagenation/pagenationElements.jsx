import styled from "styled-components";


export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 0.875rem;
  font-weight: 300;
`;

export const PageButton = styled.button`
  background-color: #5D87ff;
  color: white;
  border: none;
  padding: 5px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: 300;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const RowsPerPageSelector = styled.select`
  padding: 5px;
  margin-left: 10px;
  
`;