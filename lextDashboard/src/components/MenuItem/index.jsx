import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #5d87ff;
    color: #FFFF
  }
`;

const MenuItem = ({ children }) => {
  return <MenuItemWrapper>{children}</MenuItemWrapper>;
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuItem;
