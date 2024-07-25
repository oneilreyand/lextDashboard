const initialState = {
  dataTravel: {},
  updateDataTravel: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TRAVEL_BY_ID':
      return {
        ...state,
        dataTravel: action.payload,
      };
      case 'UPDATE_CLINIC_BY_ID':
      return {
        ...state,
        updateDataTravel: action.payload,
      };


    default:
      return state;
  }
}

export default authReducer;
