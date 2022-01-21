export const SET_SELECTED_TAB = "SET_SELECTED_TAB"

export const setSelectedTab = (selectedTab) => dispatch =>  {
    console.log(selectedTab)
    dispatch({
        type: SET_SELECTED_TAB,
        payload: selectedTab
    })
};

