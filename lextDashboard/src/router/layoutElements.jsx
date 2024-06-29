import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh; // Ensures the layout container takes the full viewport height
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  background-color: #F4F7FA;
  width: 100%;
  overflow: hidden; // Prevents the whole container from scrolling
`;

export const ScrollableContentContainer = styled.div`
  flex: 1;
  overflow-y: auto; // Allows scrolling for this specific container
  padding: 16px; // Optional, adjust as needed
`;

export const ToggleButton = styled.img`
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
`;
