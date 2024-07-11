// reducers/snackbarReducer.js
const initialState = {
  open: true,
  message: 'sdfsdfdsf',
  severity: 'info', // default severity
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        open: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        open: false,
        message: '',
        severity: 'info', // reset to default severity
      };
    default:
      return state;
  }
};

export default snackbarReducer;
