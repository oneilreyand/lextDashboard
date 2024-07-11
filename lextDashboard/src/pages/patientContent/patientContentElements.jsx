import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
`;

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  padding: 0px 0px 0px 0px;
  border-bottom: 1px solid #ddd;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  aligment-item: space-between;
`;

export const ContentBody = styled.div`
  padding: 20px;
  height: 2500px;
`;

export const ListPatienHideIcon = styled.img`
  height: 45px;
  width: 25px;
  background-color: #5d87ff;
  cursor: pointer;
  border-radius: 10px 0px 0px 10px;
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: center;
  aligment-item: center;
  height: 45px;
  font-size: 0.9rem;

  // color: white;
  border-radius: 0px 20px 0px 0px;
  background-color: #49BEFF20;
  padding: 10px;
  width: 130px
`
