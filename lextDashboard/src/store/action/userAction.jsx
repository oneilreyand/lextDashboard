import { CREATE_USER } from './index.jsx'
import { addToast } from './toastAction.jsx';
import agent from '../../utils/agent/index.jsx';


export const createUser = (dataUser) => (dispatch) => {
    try {
        const response = agent.post(`/user`, dataUser);
        dispatch({
            type: CREATE_USER,
            payload: response.data,
          });
        dispatch(addToast('success', 'Berhasil membuat akun user'));
    } catch (error) {
        dispatch(addToast('error', 'Gagal membuat akun user'));
    }
}   
