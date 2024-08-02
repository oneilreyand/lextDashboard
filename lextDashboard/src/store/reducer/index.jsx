import { combineReducers } from 'redux';
import globalReducer from './globalReducer.jsx';
import userReducer from './userReducer.jsx';
import patinetReducer from './patientReducer.jsx';
import authReducer from './authReducer.jsx';
import snackbarReducer from './snacbarrReducer.jsx';
import toastReducer from './toastReducer.jsx';
import travelReducer from './travelReducer.jsx';
import cabangReducer from './cabangReducer.jsx';
import wilayahIndonesiaReducer from './wilayahIndonesiaReducer.jsx'

const rootReducer = combineReducers({
  global: globalReducer, // Naming reducers can also help in distinguishing them
  user: userReducer,
  patien: patinetReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
  toast: toastReducer,
  travel: travelReducer,
  cabang: cabangReducer,
  wilayahIndonesia: wilayahIndonesiaReducer,
});

export default rootReducer;
