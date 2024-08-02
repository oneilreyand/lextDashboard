import styled from 'styled-components';

export const SearchContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  transition: border-color 0.3s, border-width 0.3s;

  &:focus-within {
    border-color: #5d87ff;
    border-width: 1.3px;
  }
`;

export const SearchInput = styled.input`
  font-size: 0.875rem;
  font-weight: 100;
  border: none;
  outline: none;
  min-width: 100%;
  font-weight: 300;
`;

export const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const SpinnerIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const SpinerWrapper = styled.div`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 3px; 
    display: flex;
    justify-content: center;
    align-items: center;
`

export const  SearchIconWrapper = styled.div`
    background-color: #5d87ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px; 
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    `
    
    export const SearchInpiutWrapper = styled.div`
    padding: 3px; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`
