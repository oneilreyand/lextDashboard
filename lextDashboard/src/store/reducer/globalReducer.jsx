const initialState = {
    screenSize: '',
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'SCREEN_SIZE':
            return {...state, screenSize: payload}
        default:
            return state
    }
}

export default reducer;