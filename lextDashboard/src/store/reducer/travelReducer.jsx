const initialState = {
  dataTravel: {},
  updateDataTravel: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TRAVEL_BY_ID':
    console.log(action, 'travel');
      return {
        ...state,
        dataTravel: action.payload,
      };
      case 'UPDATE_CLINIC_BY_ID':
    console.log(action, 'travel');
      return {
        ...state,
        updateDataTravel: action.payload,
      };


    default:
      return state;
  }
}

export default authReducer;
