// actions.js

import { SHOW_TOAST, HIDE_TOAST } from './index';

export const showToast = (status, message) => ({
    type: SHOW_TOAST,
    payload: { status, message }
});

export const hideToast = () => ({
    type: HIDE_TOAST
});
