import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #5d87ff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  width: 100%;
  background-color: #ddd;
`;

export const DateCell = styled.div`
  background-color: #5d87ff;
  text-align: center;
  color: white;
  font-size: 0.8rem;
  padding: 10px 0;
`;

export const Cell = styled.div`
  background-color: ${(props) => (props.isDay ? '#fff' : '#e8eaed')};
  border: ${(props) => (props.today ? '2px solid #5d87ff' : '1px solid #ddd')};
  padding: 10px;
  min-height: 100px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  &:hover {
    background-color: #f1f3f4;
  }
  font-size: 0.8rem;
`;

export const Event = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  padding: 2px 5px;
  border-radius: 3px;
  margin-top: 2px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 300px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterButton = styled(Button)`
  margin-left: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 10px;
  padding: 10px;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  min-width: auto; /* Set width to 100% of parent */
  display: flex;
  flex-direction: column; /* Ensure items are stacked vertically */
`;

export const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  font-size: 0.8rem;
`;

export const DropdownItemWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 5px;
padding: 10px;
`


export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

export const  PrefYearIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;

`

export const  NextYearIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`
export const LeftButtonWrapper = styled.div`
  display: flex;
`

export const TodayButton = styled.div`
margin-left: 10px;
margin-right: 10px;
padding: 5px 10px;
color: #5d87ff;
border: none;
border-radius: 3px;
cursor: pointer;
font-size: 0.8rem;
border: 1px solid #5d87ff;
`