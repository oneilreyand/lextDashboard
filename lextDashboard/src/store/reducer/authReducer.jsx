import { jwtDecode } from 'jwt-decode';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null
};

const token = localStorage.getItem('token');
if (token) {
  initialState.isAuthenticated = true;
  initialState.token = token;
  initialState.user = jwtDecode(token);
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        user: jwtDecode(action.payload), // Decode JWT to get user info
        error: null
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        // user: null,
        error: action.payload
      };
    case 'LOGOUT':
      console.log('reducer login LOGOUT');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        // user: null,
        error: null
      };
    default:
      return state;
  }
}

export default authReducer;
