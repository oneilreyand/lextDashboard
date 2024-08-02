const initialState = {
    screenSize: '',
    linierProgresBar: false,
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'SCREEN_SIZE':
            return {...state, screenSize: payload}
        case 'LINIER_PROGRES_BAR':
            return {...state, linierProgresBar: payload}
        default:
            return state
    }
}

export default reducer;