const INITIAL_STATE = {
    user: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER':
            console.log(action.payload);
            return {
                ...state,
                user: action.payload,
            }
        case 'CLEAR_USER':
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

export default userReducer;