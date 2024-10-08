import {addToast} from './toastAction.jsx';
import agent from '../../utils/agent/index.jsx';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './index.jsx';

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
      dispatch(addToast('error', 'Email/Password yang anda input salah'));
    }
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : 'Server Error'
    });
  }
};

export const logout = () => async (dispatch) => {
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
