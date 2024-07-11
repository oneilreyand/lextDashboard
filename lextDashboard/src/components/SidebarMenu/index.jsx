import PropTypes from 'prop-types';
import { MenuItemContainer, MenuIcon, MenuTitle, Links } from './MenuItemElements';

const MenuItem = ({ icon, title, isActive, onClick, isCollapsed, path }) => {
  return (
    <Links onClick={onClick} to={path}>
      <MenuItemContainer isActive={isActive}>
        <MenuIcon src={icon} alt={`${title} icon`} isActive={isActive} />
        {!isCollapsed && 
            <MenuTitle>{title}</MenuTitle>
        }
      </MenuItemContainer>
    </Links>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default MenuItem;
