const initialState = {
  dataClinic: {},
  updateDataClinic: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CLINIC_BY_ID':
    console.log(action, 'clinic');
      return {
        ...state,
        dataClinic: action.payload,
      };
      case 'UPDATE_CLINIC_BY_ID':
    console.log(action, 'clinic');
      return {
        ...state,
        updateDataClinic: action.payload,
      };


    default:
      return state;
  }
}

export default authReducer;
