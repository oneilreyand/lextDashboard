import { CREATE_USER } from './index'
import { showToast } from './toastAction';
import agent from '../../utils/agent';


export const createUser = (dataUser) => (dispatch) => {
    try {
        const response = agent.post(`/user`, dataUser);
        dispatch({
            type: CREATE_USER,
            payload: response.data,
          });
        dispatch(showToast('success', 'Berhasil membuat akun user'));
    } catch (error) {
        dispatch(showToast('error', 'Gagal membuat akun user'));
    }
}   
