const initialState = {
    dataProvinsi: [],
    dataKabupaten: [],
    dataKecamatan: [],
    dataKelurahan: [],
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_PROVINSI':
        return {
          ...state,
          dataProvinsi: action.payload,
        };
        case 'GET_KABUPATEN':
        return {
          ...state,
          updateDataTravel: action.payload,
        };
        case 'GET_KECAMATAN':
            return {
              ...state,
              dataKecamatan: action.payload,
        };
        case 'GET_KELURAHAN':
            return {
              ...state,
              dataKelurahan: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  