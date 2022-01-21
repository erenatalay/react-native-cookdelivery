import api from "../../service/api"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = (item) => dispatch => {

    if (item.phoneNumber == "5532626651" && item.password == "123456") {
        AsyncStorage.setItem("@USER", JSON.stringify(item));
        dispatch({
            type: "SET_USER",
            payload: item
        })

    }

    // api.post("user/login",payload).then(res => {
    //     AsyncStorage.setItem("@USER",JSON.stringify(res.data));
    //     NativeModules.DevSettings.reload();
    //     let userData = JSON.stringify("")
    //     dispatch({
    //         type : "SET_USER",
    //         payload : res.data
    //     })
    // })

}


export const logout = () => dispatch => {
    AsyncStorage.removeItem("@USER");
    dispatch({
        type: "REMOVE_USER",
        payload: null
    })

}