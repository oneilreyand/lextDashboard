import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 100vh;
  padding-left: ${({ isCollapsed }) => (isCollapsed ? '16px' : '24px')};
  padding-right: ${({ isCollapsed }) => (isCollapsed ? '16px' : '24px')};
  padding-bottom: ${({ isCollapsed }) => (isCollapsed ? '16px' : '24px')};
  padding-top: 16px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 0 0 ${({ isCollapsed }) => (isCollapsed ? '80px' : '270px')}; /* Lebar sidebar yang bisa berubah */
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const LogoWraaping = styled.div`
  height: 64px;
`

export const AccountWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #49BEFF20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 16px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Avatar = styled.div`
  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 16px;
`;

export const InfoAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

export const Role = styled.span`
  font-size: 0.7rem;
  font-weight: 300;
`;

export const RadioBtn = styled.span`
  min-height: 20px;
  min-width: 20px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'blue' : 'gray')};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ active }) => (active ? 'darkblue' : 'darkgray')};
  }
`;

export const MenuWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;
