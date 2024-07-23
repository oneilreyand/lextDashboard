import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const Button = styled.button`
  background-color: #5d87ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0; /* Remove gap between grid items */
  height: calc(100% - 50px); /* Adjusted for header */
`;

export const DateCell = styled.div`
  padding: 5px;
  text-align: center;
  border: 1px solid #ddd;
  color: white;
  position: relative;
  overflow: hidden;
  background-color: #5d87ff;
  // height: 60px; /* Adjusted height for day cells */
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-bottom: -400px;
`;

export const Cell = styled.div`
  padding: 5px;
  background-color: ${(props) => (props.today ? '#d1ecf1' : '#f8f9fa')};
  text-align: center;
  border: 1px solid #ddd;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: auto; /* Adjusted height for date cells */
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: #e9ecef;
  }

  .event-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffc107;
    color: #000;
    padding: 4px 7px;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border-top: 1px solid #ddd;
    border-radius: 0 0 4px 4px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
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
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
