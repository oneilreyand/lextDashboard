const initialState = {
    dataCabang: [],
};

const cabangReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'GET_CABANG_BY_TRAVELID':
        return {
          ...state,
          dataCabang: payload,
        };
      case 'CREATE_CABANG':
        return {
          ...state,
          dataCabang: [...state.dataCabang, payload],
        };
      case 'DELETE_CABANG':
        return {
          ...state,
          dataCabang: state.dataCabang.filter((cabang) => cabang.id !== payload.id),
        };
      case 'UPDATE_CABANG':
        return {
          ...state,
          dataCabang: state.dataCabang.map((cabang) =>
            cabang.id === payload.id ? payload : cabang
          ),
        };
      default:
        return state;
    }
  };
  
  export default cabangReducer;


