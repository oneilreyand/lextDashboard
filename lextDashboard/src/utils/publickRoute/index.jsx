import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Example function to check if a user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Check for a token in local storage
};

const PublicRoute = ({ children }) => {
  return !isAuthenticated() ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
