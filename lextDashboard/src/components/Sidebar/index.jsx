/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  LogoWraaping,
  AccountWrapper,
  MenuWrapper,
  Avatar,
  InfoAvatarWrapper,
  Name,
  Role,
} from './SidebarElemets';
import MenuItem from '../MenuItem/index';
import { menu } from '../../data';

function Sidebar({ isCollapsed }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  useEffect(() => {
    setActiveMenu(0);
    navigate('/dashboard'); // Redirect to /dashboard on initial load
  }, []);

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <LogoWraaping>
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
         <AccountWrapper>
          <Avatar/>
          <InfoAvatarWrapper>
            <Name>
              Reyand Oneil
            </Name>
            <Role>
              React Developer
            </Role>
          </InfoAvatarWrapper>
        </AccountWrapper>
      }
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
