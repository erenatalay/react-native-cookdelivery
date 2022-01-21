import React, { useEffect, useState } from "react";

import { StyleSheet, View, Image } from "react-native"
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";
import { useNavigation } from "@react-navigation/native";
import image from "../../constants/images";
import AppStatusBar from "../../components/AppStatusBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem("@USER").then(sessionUser => {
            if (sessionUser === null) {
                navigation.replace("WelcomeScreen");
                

            }
        });


    }, [])

  
    return (
        <View style={styles.container}>
            <AppStatusBar />
            <Image source={image.logo} style={styles.logo} />
        </View>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorPrimary
    },
    testStyle: {
        fontSize: 50,
        color: Colors.white,
        fontFamily: Fonts.primaryExtraBold
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    }
});

export default Splash;