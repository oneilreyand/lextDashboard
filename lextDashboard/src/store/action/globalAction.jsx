import {
    LINIER_PROGRES_BAR,
    SCREEN_SIZE
} from './index.jsx';

export const ss = (payload) => ({
    type: SCREEN_SIZE,
    payload
});

export const linierProgresBar = (payload) => {
    return {
      type: LINIER_PROGRES_BAR,
      payload,
    };
  };