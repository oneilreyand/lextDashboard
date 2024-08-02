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
} from './SidebarElemets.jsx';
import LazyAvatar from '../LazyAvatar/index.jsx';
import MenuItem from '../SidebarMenu/index.jsx';
import { menu } from '../../data/index.js';
import {
  sahabatUmrahLogo,
  sahabatUmrahLogoText,
  chevronRightSvg,
  chevronleftSvg,
} from '../../assets/index.jsx';
import { logout } from '../../store/action/authAction.jsx'

function Sidebar({ iscollapsed }) {
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
    <SidebarContainer iscollapsed={iscollapsed}>
      <LogoWraaping>
        <LogoSvg src={sahabatUmrahLogo} alt='logo-svg'/>
        {!iscollapsed &&
          <LogoSvgText src={sahabatUmrahLogoText} alt='logo-svg'/>
        }
      </LogoWraaping>
      {iscollapsed ? '...' : 'Menu'}
      <MenuWrapper>
        {menu.map((m, index) => (
            <MenuItem
              key={index}
              icon={m.icon}
              title={m.title}
              isActive={activeMenu === index}
              onClick={() => handleMenuClick(index)}
              iscollapsed={iscollapsed}
              path={m.path}
            />
        ))}
      </MenuWrapper>
      {!iscollapsed &&
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
  iscollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
