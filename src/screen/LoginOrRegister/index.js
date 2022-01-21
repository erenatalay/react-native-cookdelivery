import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Colors from "../../theme/Colors";
import image from "../../constants/images";
import Button from '../../components/Button';
import OutlineButton from '../../components/OutlineButton';
import { useNavigation } from "@react-navigation/native";
import AppStatusBar from '../../components/AppStatusBar';


const LoginOrRegister = () => {
    const navigation = useNavigation();

    const goLogin = () => {
        navigation.navigate("Login")
    }

    const goSignUp = () => {
        navigation.navigate("SignUp")
    }

    return (
        <View style={styles.container}>
            <AppStatusBar/>

            <View style={styles.headerContainer}>
                <Image source={image.logo} style={styles.logo} />
                <Image source={image.headerImage} style={styles.headerImage} />


            </View>
            <View style={{ flex: 1, margin: 10 }}>
                <Button title={"Login"} onPress={() => goLogin()} />
                <OutlineButton title={"Sign Up"} onPress = {() => goSignUp()} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.colorPrimary,
        borderBottomLeftRadius : 25,
        borderBottomRightRadius : 25,
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    headerImage: {
        height: 250,
        width: 250,
        resizeMode: 'contain'
    }
});

export default LoginOrRegister
