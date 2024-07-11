import axios from 'axios';
import { GET_USER } from './index'

const userUrl = 'https://reqres.in/api/users?page=1';

export const getUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(userUrl);
            const users = response.data.data;
            dispatch({
                type: GET_USER,
                payload: users,
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
};