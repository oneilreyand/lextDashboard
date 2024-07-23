import { showToast } from './toastAction';
import { GET_TRAVEL_BY_ID } from './index';
import agent from '../../utils/agent';

export const getTravelById = (id) => async (dispatch) => {
  try {
  
    const response = await agent.get(`/travel/${id}`);

    dispatch({
      type: GET_TRAVEL_BY_ID,
      payload: response.data,
    });

    dispatch(showToast('success', 'Berhasil mendapatkan data clinic'));

  } catch (error) {
    console.log(error, 'error');
  }
};

export const updateTravel = (id, travelData) => async (dispatch) => {
  try {
    const response = agent.put(`/travel/${id}`, travelData);

    dispatch({
      type: GET_TRAVEL_BY_ID,
      payload: response.data,
    });
    dispatch(showToast('success', 'Berhasil mengupdate data clinic'));
  } catch (error) {
    console.error('Error updating clinic:', error);
    dispatch(showToast('error', 'Gagal mengupdate data clinic'));
  }
};

export const createTravel = (travelData) => async (dispatch) => {
  try {
    const response = await agent.post(`/travel`, travelData); // Await the promise here
    dispatch({
      type: GET_TRAVEL_BY_ID,
      payload: response.data,
    });
    dispatch(showToast('success', 'Berhasil membuat travel baru'));
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error creating travel:', error);
    dispatch(showToast('error', 'Gagal membuat travel baru'));
    throw error; // Throw the error to be caught by the calling function
  }
};