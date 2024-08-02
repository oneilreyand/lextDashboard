// agent.js
import axios from 'axios';
import { addToast } from '../../store/action/toastAction.jsx'; // Import addToast action
import store from '../../store/index.jsx';
import { logout } from '../../store/action/authAction.jsx';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4010',
  headers: {
    'Content-Type': 'application/json'
  }
});

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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { dispatch } = store;
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(logout());
      } else if (error.response.status === 429) {
        dispatch(addToast('error', `Terlalu banyak request, ${error.response.data.remainingTimeInMinutes} menit dan ${error.response.data.remainingTimeInSecs} detik`));
      } else if (error.response.status === 428) {
        dispatch(addToast('error', `Anda telah melakukan kesalahan dalam login sebanyak tiga kali, waktu login berikutnya adalah ${error.response.data.remainingTimeInMinutes} menit dan ${error.response.data.remainingTimeInSecs} detik`));
      } else if (error.response.status >= 500) {
        dispatch(addToast('error', 'Server error, please try again later.'));
      } else {
        dispatch(addToast('error', error.response.data.message || 'An error occurred.'));
      }
    } else {
      dispatch(addToast('error', 'Network error, please try again.'));
    }
    return Promise.reject(error);
  }
);

export const setBaseURL = (url) => {
  axiosInstance.defaults.baseURL = url;
};

export default axiosInstance;
