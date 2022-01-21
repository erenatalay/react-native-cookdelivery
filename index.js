/**
 * @format
 */
import React from "react"
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "react-redux";



import store from "./store/store";


const Redux = () => {


    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}




AppRegistry.registerComponent(appName, () => Redux);
