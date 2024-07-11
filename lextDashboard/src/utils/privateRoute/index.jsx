import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadToken } from '../../store/action/authAction';
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Check for a token in local storage
};

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation()
  useEffect(() => {
    dispatch(loadToken())
  }, [dispatch, location]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return isAuthenticated() ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
