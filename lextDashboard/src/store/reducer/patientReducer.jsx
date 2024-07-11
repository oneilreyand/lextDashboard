const initialState = {
    patientList: [],
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'GET_PATIENT':
            return {...state, patientList: payload}
        default:
            return state
    }
}

export default reducer;