import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from "./src/screen/Splash";
import WelcomeScreen from "./src/screen/Welcome";
import LoginScreen from "./src/screen/Login";
import LoginOrRegister from "./src/screen/LoginOrRegister";
import SignUpScreen from "./src/screen/SignUp";
import Restaurant from "./src/screen/Restaurant";
const Stack = createStackNavigator();
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyCard from "./src/screen/MyCard";
import Drawer from "./src/navigation/Drawer"
import { authFetch } from "./store/actions/users";
import FoodDetail from "./src/screen/FoodDetail";
import AddCard from "./src/screen/AddCart";

const App = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const authenticated = useSelector(state => state.users?.authenticated)
    useEffect(() => {

        AsyncStorage.getItem("@USER").then(sessionUser => {
            if (sessionUser !== null) {
                dispatch(authFetch({isAuth : true, userData : sessionUser}))

            }

        })


    }, [users?.user])


    return (
        <NavigationContainer>


            {

                authenticated ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Home" component={Drawer} />
                        <Stack.Screen name="Restaurant" component={Restaurant} />
                        <Stack.Screen name="MyCard" component={MyCard} />
                        <Stack.Screen name="AddCard" component={AddCard} />
                        <Stack.Screen name="FoodDetail" component={FoodDetail} />
                    </Stack.Navigator>
                )
                    :
                    (
                        <Stack.Navigator screenOptions={{ headerShown: false }} >
                            <Stack.Screen name="SplashScreen" component={SplashScreen} />
                            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                            <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="SignUp" component={SignUpScreen} />
                        </Stack.Navigator>
                    )

            }


        </NavigationContainer>
    )
}

export default App