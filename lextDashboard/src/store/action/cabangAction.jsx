import { addToast} from './toastAction.jsx';
import { 
    GET_CABANG_BY_TRAVELID,
    CREATE_CABANG,
    DELETE_CABANG,
    UPDATE_CABANG,
} from './index.jsx'
import agent from '../../utils/agent/index.jsx';
import { linierProgresBar } from '../../store/action/globalAction.jsx';

export const getCabangByTravelId = (id) => async (dispatch) => {
    try {
        dispatch(linierProgresBar(true));
        const response = await agent.get(`/cabang/${id}`);

        dispatch({
            type: GET_CABANG_BY_TRAVELID,
            payload: response.data.data
        })
        dispatch(linierProgresBar(false));
        dispatch(addToast('success', 'Berhasil mendapatkan data cabang'));

    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data cabang'));
    }
}

export const createCabang = (data) => async(dispatch) => {
    try {
        dispatch(linierProgresBar(true));
        const response = await agent.post(`/cabang`, data);

        dispatch({
            type: CREATE_CABANG,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        dispatch(addToast('success', 'Berhasil membuat cabang baru'));

    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data cabang'));
    }
}

export const deleteCabang = (id) => async(dispatch) => {
    try {
        dispatch(linierProgresBar(true));
        const response = await agent.delete(`/cabang/${id}`);
        
        dispatch({
            type: DELETE_CABANG,
            payload: response.data
        })
        dispatch(addToast('success', 'Berhasil menghapus cabang'));
        dispatch(linierProgresBar(false));
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal menghapus cabang'));
    }
}

export const updateCabang = (id, data) => async (dispatch) => {
    try {
        dispatch(linierProgresBar(true));
        const response = await agent.put(`/cabang/${id}`, data);
        dispatch(linierProgresBar(false));
        dispatch(addToast('success', 'Berhasil mengupdate cabang'));
        dispatch({
            type: UPDATE_CABANG,
            payload: response.data
        })
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mengedit data cabang'));
    }
}