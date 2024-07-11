import {dataTable} from '../../data';
import { GET_PATIENT } from './index';

export const getAllpatientByDate = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_PATIENT,
                payload: dataTable,
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };  
};
