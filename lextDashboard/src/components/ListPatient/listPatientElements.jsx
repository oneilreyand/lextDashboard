import styled from 'styled-components';

export const ListPatientContainer = styled.div`
  max-height: 440px;
  overflow-y: auto;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

export const ListPatientItem = styled.div`
  padding: 16px;
  border: 0.5px solid #ddd;
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.isActive ? '#5d87ff' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};

  &:hover {
    // background-color: #f0f0f0;
  }
`;
