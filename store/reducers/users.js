
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
                authenticated: true,

            }
        case "REMOVE_USER":
            return {
                ...state,
                user: null,
                authenticated: false,

            }
        case "AUTH_USER":
            const {userData,isAuth} = action.paylaod;
            return {
                ...state,
                authenticated: isAuth,
                user: userData,

            }
        default:
            return state;
    }
}