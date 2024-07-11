const initialState = {
    userList: [],
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'GET_USER':
            return {...state, userList: payload}
        default:
            return state
    }
}

export default reducer;