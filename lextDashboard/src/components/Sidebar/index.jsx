/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  SidebarContainer,
  LogoWraaping,
  AccountWrapper,
  MenuWrapper,
  InfoAvatarWrapper,
  Name,
  Role,
  LogoSvg,
  LogoSvgText,
  ProfileMenuWrapper,
  ProfileMenuIcon,
  ProfileMenuContainer,
  ProfileMenuItem,
} from './SidebarElemets';
import LazyAvatar from '../LazyAvatar';
import MenuItem from '../SidebarMenu';
import { menu } from '../../data';
import {
  sahabatUmrahLogo,
  sahabatUmrahLogoText,
  chevronRightSvg,
  chevronleftSvg,
} from '../../assets';
import { logout } from '../../store/action/authAction'

function Sidebar({ isCollapsed }) {
  const dispatach = useDispatch();
  const profileMenuRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeProfileMenu, setActiveProfileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const menuItemIndex = menu.findIndex(item => item.path === currentPath);
    setActiveMenu(menuItemIndex !== -1 ? menuItemIndex : 0);
  }, [location.pathname]);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  useEffect(() => {
    setActiveMenu(0);
    navigate('/dashboard'); // Redirect to /dashboard on initial load
  }, []);

  const handleProfileMenu = () =>{
    setActiveProfileMenu(!activeProfileMenu)
  };

  const handleLogout = () => {
    dispatach(logout());
    navigate('/login');
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setActiveProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <LogoWraaping>
        <LogoSvg src={sahabatUmrahLogo} alt='logo-svg'/>
        {!isCollapsed &&
          <LogoSvgText src={sahabatUmrahLogoText} alt='logo-svg'/>
        }
      </LogoWraaping>
      {isCollapsed ? '...' : 'Menu'}
      <MenuWrapper>
        {menu.map((m, index) => (
            <MenuItem
              key={index}
              icon={m.icon}
              title={m.title}
              isActive={activeMenu === index}
              onClick={() => handleMenuClick(index)}
              isCollapsed={isCollapsed}
              path={m.path}
            />
        ))}
      </MenuWrapper>
      {!isCollapsed &&
        <>
          <AccountWrapper>
            <LazyAvatar 
            src={`https://api.multiavatar.com/Reyand Oneil.svg`}
            alt={'account-avatar'}
            />
            <InfoAvatarWrapper>
              <Name>
                Suci Rahmadani
              </Name>
              <Role>
                Admin
              </Role>
            </InfoAvatarWrapper>
            <ProfileMenuWrapper>
              <ProfileMenuIcon 
                src={activeProfileMenu ? chevronleftSvg : chevronRightSvg}
                onClick={handleProfileMenu}
              />
            </ProfileMenuWrapper>
            {activeProfileMenu && (
              <ProfileMenuContainer ref={profileMenuRef}>
                <ProfileMenuItem onClick={handleLogout}>log out</ProfileMenuItem>
                <ProfileMenuItem>Edit Profile</ProfileMenuItem>
              </ProfileMenuContainer>
            )}
          </AccountWrapper>
        </>
      }
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
