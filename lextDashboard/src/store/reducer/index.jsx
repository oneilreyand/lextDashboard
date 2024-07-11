import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import userReducer from './userReducer';
import patinetReducer from './patientReducer';
import authReducer from './authReducer';
import snackbarReducer from './snacbarrReducer';
import toastReducer from './toastReducer';
import cliniReducer from './clinicReducer';

const rootReducer = combineReducers({
  global: globalReducer, // Naming reducers can also help in distinguishing them
  user: userReducer,
  patien: patinetReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
  toast: toastReducer,
  clinic: cliniReducer,
});

export default rootReducer;
