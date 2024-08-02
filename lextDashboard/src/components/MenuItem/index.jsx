import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  padding: 8px 16px;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    background-color: #5d87ff;
    color: #fff;
  }
`;

const MenuItem = ({ children, onClick }) => {
  return <MenuItemWrapper onClick={onClick}>{children}</MenuItemWrapper>;
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
