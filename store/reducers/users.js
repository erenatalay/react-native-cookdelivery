
const initialState = {
    user: {},
    authenticated: false
}



export const users = (state = initialState, action) => {

    switch (action.type) {

        case "SET_USER":

            return {
                ...state,
                user: action.paylaod,

            }
        case "REMOVE_USER":
            return {
                ...state,
                user: action.paylaod
            }
        default:
            return state;
    }
}