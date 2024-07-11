import {showToast} from './toastAction';
import agent from '../../utils/agent';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './index';

export const login = (data) => async (dispatch) => {
  try {
    const response = await agent.post(`/auth/login`, { email: data.email, password: data.password });
    const { token } = response.data;

    // Save token in localStorage
    localStorage.setItem('token', token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: token
    });
  } catch (error) {
    if(error.response.status === 400) {
      dispatch(showToast('error', 'Email/Password yang anda input salah'));
    }
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : 'Server Error'
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT
  });
};

export const loadToken = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token
    });
  }
};
