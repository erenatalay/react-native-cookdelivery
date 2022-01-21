import * as tabActionTypes from "../actions/tab"

const initialState = {
    selectedTab : ""
}

export const tab = (state = initialState,action) => {
    switch (action.type) {
        case tabActionTypes.SET_SELECTED_TAB:
            
            return {
                ...state,
                selectedTab : action.payload
            }
    
        default:
            return state;
    }
}

