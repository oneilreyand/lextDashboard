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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const AccountWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #49BEFF20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 16px;
  border-radius: 20px;
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
  font-size: 0.7rem;
  font-weight: 500;
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
  margin-top: 10px;
  overflow-y: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const LogoSvg = styled.img`
  height: 50px;
  width: 50px;
  padding: 3px;
`;

export const LogoSvgText = styled.img`
  height: 22px;
  padding: 3px;
  margin-left: 10px;
`;

export const ProfileMenuWrapper = styled.div`
  width: 20px;
  height: 20px;
  background-color: #5d87ff;
  cursor: pointer;
`;

export const ProfileMenuIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const ProfileMenuContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 280px;
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const ProfileMenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  // border-bottom: solid 0.5px gray; 
  font-weight: 300;
  font-size: 0.9rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;

