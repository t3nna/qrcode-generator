const initialState = {
    bgColor: '#fff',
    fgColor: '#000',
    size: 256,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'color/changeBgColor':
            return {
                ...state,
                bgColor: action.payload
            }
        case 'color/changeFgColor':
            return {
                ...state,
                fgColor: action.payload
            }

        case 'color/changeSize':
            return {
                ...state,
                size: action.payload
            }


        default:
            return state
    }
}