const initialState = {
    screenSize: '',
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'SCREEN_SIZE':
            console.log(payload, 'payload');
            return {...state, screenSize: payload}
        default:
            return state
    }
}

export default reducer;