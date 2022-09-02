

const INITIAL_STATE = {
    user: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER':

            return {
                ...state,
                user: action.payload,
            }
        case 'CLEAR_USER':
            console.log(action.payload);
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

export default userReducer;