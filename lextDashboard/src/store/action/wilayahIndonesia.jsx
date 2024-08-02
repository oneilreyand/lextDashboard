import {
    GET_PROVINSI,
    GET_KABUPATEN,
    GET_KECAMATAN,
    GET_KELURAHAN,
    GET_PROVINSI_BY_ID,
    GET_KABUPATEN_BY_ID,
    GET_KECAMATAN_BY_ID,
    GET_KELURAHAN_BY_ID,
    GET_KABUPATEN_BY_PROVINSI_ID,
    GET_KECAMATAN_KABUPATEN_ID,
} from './index.jsx';
import agent from '../../utils/agent/index.jsx';
import { addToast} from './toastAction.jsx';
import { linierProgresBar } from '../../store/action/globalAction.jsx';



export const getAllProvinsi = () => async (dispatch) => {
    dispatch(linierProgresBar(true));
    try {
        const response = await agent.get(`/wilayahIndonesia/provinsi`);
      
        dispatch({
            type: GET_PROVINSI,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data);
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data provinsi'));
    }
}

export const getProvinsiById = (id) => async (dispatch) => {
    dispatch(linierProgresBar(true));
    try {
        dispatch(linierProgresBar(true));
        const response = await agent.get(`/wilayahIndonesia/provinsi/${id}`);
        dispatch(linierProgresBar(false));
        dispatch({
            type: GET_PROVINSI_BY_ID,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data);

    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data provinsi'));
    }
}

export const getAllKabupaten = () => async (dispatch) => {
    dispatch(linierProgresBar(true));
    try {
        const response = await agent.get(`/wilayahIndonesia/kabupaten`);
      
        dispatch({
            type: GET_KABUPATEN,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data)

    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kabupaten'));
    }
}

export const getKabupatenById = (id) => async (dispatch) => {
    dispatch(linierProgresBar(true));
    try {
        const response = await agent.get(`/wilayahIndonesia/kabupaten/${id}`);
      
        dispatch({
            type: GET_KABUPATEN_BY_ID,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data);
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kabupaten'));
    }
}

export const kabupatenProvinsiId = (id) => async (dispatch) => {
    dispatch(linierProgresBar(true));
    try {
        const response = await agent.get(`/wilayahIndonesia/kabupatenProvinsiId/${id}`);
      
        dispatch({
            type: GET_KABUPATEN_BY_PROVINSI_ID,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data);
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kabupaten'));
    }
}

export const getAllKecamatan = (dispatch) => async () => {
    dispatch(linierProgresBar(true));
    try {
        dispatch(linierProgresBar(true));
        const response = await agent.get(`/wilayahIndonesia/kecamatan`);
      
        dispatch({
            type: GET_KECAMATAN,
            payload: response.data
        })
        dispatch(linierProgresBar(false));

    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kecamatan'));
    }
}

export const kecamatanKabupatenId = (id) => async (dispatch) => {
    dispatch(linierProgresBar(true));
    try {
        const response = await agent.get(`/wilayahIndonesia/kecamatanKabupatenId/${id}`);
      
        dispatch({
            type: GET_KECAMATAN_KABUPATEN_ID,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data)
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kecamatan'));
    }
}

export const getKecamatanById = (id) => async (dispatch) => {
    try {
        const response = await agent.get(`/wilayahIndonesia/kecamatan/${id}`);
      
        dispatch({
            type: GET_KECAMATAN_BY_ID,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
        return(response.data);

    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kecamatan'));
    }
}

export const getAllKelurahan = () => async (dispatch) => {
    dispatch(linierProgresBar(true));
    
    try {
        const response = await agent.get(`/wilayahIndonesia/kelurahan`);
      
        dispatch({
            type: GET_KELURAHAN,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kelurahan'));
    }
}

export const getKelurahanById = (id) => async (dispatch) => {
    dispatch(linierProgresBar(true));
    
    try {
        const response = await agent.get(`/wilayahIndonesia/kelurahan/${id}`);
      
        dispatch({
            type: GET_KELURAHAN_BY_ID,
            payload: response.data
        })
        dispatch(linierProgresBar(false));
    } catch (error) {
        dispatch(linierProgresBar(false));
        dispatch(addToast('error', 'Gagal mendapatkan data kelurahan'));
    }
}