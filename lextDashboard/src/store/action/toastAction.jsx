import {
    ADD_TOAST,
    REMOVE_TOAST,
    CLEAR_TOASTS
} from './index.jsx';

let toastId = 0;

export const addToast = (status, message) => ({
  type: ADD_TOAST,
  payload: { id: ++toastId, status, message },
});

export const hideToast = (id) => ({
  type: REMOVE_TOAST,
  payload: id,
})

export const clearToasts = () => ({
  type: CLEAR_TOASTS,
});