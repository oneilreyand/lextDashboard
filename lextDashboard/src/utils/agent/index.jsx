// agent.js
import axios from 'axios';
import { showToast } from '../../store/action/toastAction'; // Import showToast action
import store from '../../store/index';
import { logout } from '../../store/action/authAction';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4010',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { dispatch } = store; // Ensure you have access to the Redux store
    if (error.response) {
      // Handle specific status codes
      if (error.response.status === 401) {
        dispatch(showToast('error', 'Unauthorized, please login again.'));
        dispatch(logout())
        // Handle unauthorized case, maybe logout the user
      } else if (error.response.status === 403) {
        dispatch(showToast('error', 'Forbidden, you do not have access.'));
      } else if (error.response.status === 404) {
        dispatch(showToast('error', 'Resource not found.'));
      } else if(error.response.status === 429) {
        console.log(error.response, 'error');
        dispatch(showToast('error',`Terlalu banyak request, ${error.response.data.remainingTimeInMinutes} menit dan ${error.response.data.remainingTimeInSecs} detik`));
      } else if(error.response.status === 428) {
        console.log(error.response, 'error');
        dispatch(showToast('error',`Anda telah melakukan kesalahan dalam login sebanyak tiga kali, waktu login berikutnya adalah', ${error.response.data.remainingTimeInMinutes} menit dan ${error.response.data.remainingTimeInSecs} detik`));
      }
      else if (error.response.status >= 500) {
        dispatch(showToast('error', 'Server error, please try again later.'));
      } else {
        dispatch(showToast('error', error.response.data.message || 'An error occurred.'));
      }
    } else {
      dispatch(showToast('error', 'Network error, please try again.'));
    }
    return Promise.reject(error);
  }
);

// Function to change base URL
export const setBaseURL = (url) => {
  axiosInstance.defaults.baseURL = url;
};

export default axiosInstance;
