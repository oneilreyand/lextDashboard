// src/components/CustomLink.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Optional: Styled-component for additional styling
const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CustomLink = ({ to, children, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

// Define prop types for CustomLink component
CustomLink.propTypes = {
  to: PropTypes.string.isRequired, // 'to' prop should be a string and is required
  children: PropTypes.node.isRequired, // 'children' prop should be a React node and is required
};

export default CustomLink;
