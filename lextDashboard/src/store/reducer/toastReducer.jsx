// reducer.js


const initialState = {
    active: false,
    status: '',
    message: ''
};

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_TOAST':
            return {
                ...state,
                active: true,
                status: action.payload.status,
                message: action.payload.message
            };
        case 'HIDE_TOAST':
            return {
                ...state,
                active: false
            };
        default:
            return state;
    }
};

export default toastReducer;


