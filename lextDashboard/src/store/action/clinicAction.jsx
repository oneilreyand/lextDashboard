import { showToast } from './toastAction';
import { GET_CLINIC_BY_ID } from './index';
import agent from '../../utils/agent';

export const getClinicById = (id) => async (dispatch) => {
  try {
  
    const response = await agent.get(`/clinic/${id}`);

    dispatch({
      type: GET_CLINIC_BY_ID,
      payload: response.data,
    });

    dispatch(showToast('success', 'Berhasil mendapatkan data clinic'));

  } catch (error) {
    console.log(error, 'error');
  }
};

export const updateClinic = (id, clinicData) => async (dispatch) => {
  try {
    const response = agent.put(`/clinic/${id}`, clinicData);

    dispatch({
      type: GET_CLINIC_BY_ID,
      payload: response.data,
    });
    dispatch(showToast('success', 'Berhasil mengupdate data clinic'));
  } catch (error) {
    console.error('Error updating clinic:', error);
    dispatch(showToast('error', 'Gagal mengupdate data clinic'));
  }
};