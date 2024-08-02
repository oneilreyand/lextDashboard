// toastReducer.js
import { ADD_TOAST, REMOVE_TOAST, CLEAR_TOASTS } from '../action/index.jsx';

const initialState = {
  toasts: [],
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    case CLEAR_TOASTS:
    return {
      ...state,
      toasts: [],
    };
    default:
      return state;
  }
};

export default toastReducer;
