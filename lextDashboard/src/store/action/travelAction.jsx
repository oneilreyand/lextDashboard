import { addToast } from './toastAction.jsx';
import { GET_TRAVEL_BY_ID } from './index.jsx';
import agent from '../../utils/agent/index.jsx';
import { linierProgresBar } from '../../store/action/globalAction.jsx';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTravelById = (id) => async (dispatch) => {
  try {
    dispatch(linierProgresBar(true)); // Start progress bar

    await delay(3000); // Wait for 3 seconds

    const response = await agent.get(`/travel/${id}`);

    dispatch({
      type: GET_TRAVEL_BY_ID,
      payload: response.data,
    });
    dispatch(linierProgresBar(false)); // Start progress bar

    dispatch(addToast('success', 'Berhasil mendapatkan data Travel'));

  } catch (error) {
    dispatch(addToast('error', 'Gagal mendapatkan data Travel'));
  }
};

export const updateTravel = (id, travelData) => async (dispatch) => {
  try {
    const response = agent.put(`/travel/${id}`, travelData);

    dispatch({
      type: GET_TRAVEL_BY_ID,
      payload: response.data,
    });
    dispatch(addToast('success', 'Berhasil mengupdate data travel'));
  } catch (error) {
    console.error('Error updating travel:', error);
    dispatch(addToast('error', 'Gagal mengupdate data travel'));
  }
};

export const createTravel = (travelData) => async (dispatch) => {
  try {
    const response = await agent.post(`/travel`, travelData); // Await the promise here
    dispatch({
      type: GET_TRAVEL_BY_ID,
      payload: response.data,
    });
    dispatch(addToast('success', 'Berhasil membuat travel baru'));
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error creating travel:', error);
    dispatch(addToast('error', 'Gagal membuat travel baru'));
    throw error; // Throw the error to be caught by the calling function
  }
};