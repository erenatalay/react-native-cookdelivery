import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';
import UserInput from '../../components/Input';
import AppStatusBar from './../../components/AppStatusBar/index';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import SocialButton from '../../components/SocialButton';
import {useDispatch } from 'react-redux';
import {login} from "../../../store/actions/users"

const Login = () => {
    const dispatch = useDispatch();
    const [mobile, onChangeMobile] = useState();
    const [password, onChangePassword] = useState();
    const navigation = useNavigation();

    const userLogin = () => {
        if (mobile === undefined || mobile.length < 10) {
            Toast.show('Please Enter Valid Mobile Number', Toast.LONG);
        }
        else if (password === undefined || password.length < 6) {
            Toast.show('Please Enter Valid Password', Toast.LONG);
        } else {
            let data = {
                phoneNumber : mobile,
                password : password
            }
           
            dispatch(login(data))

        
                
           
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                width: 50,
                justifyContent: 'center'
            }}
                onPress={() => navigation.goBack()}

            >
                <Icon name="arrow-back" size={30} color={Colors.colorPrimary}  />

            </TouchableOpacity>
            <AppStatusBar />
            <ScrollView style={styles.scrollview}>
                <View style={{ marginTop: 15, marginBottom: 20 }}>
                    <View style={styles.positionTextLogo}>
                        <Logo style={styles.logo} />

                        <Text style={styles.title}>Login</Text>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <UserInput
                            placeholder="Enter Mobile Number"
                            maxLength={10}
                            value={mobile}
                            onChangeText={onChangeMobile}
                            keyboardType={"numeric"}
                            style={{ paddingLeft: 30, marginBottom: 10 }}
                        />
                        <Icon name="smartphone" size={24} color={Colors.colorPrimary} style={{ position: 'absolute', top: 13, left: 6 }} />

                    </View>

                    <View style={{ position: 'relative' }}>
                        <UserInput
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            maxLength={20}
                            value={password}
                            onChangeText={onChangePassword}
                            style={{ paddingLeft: 30 }}
                        />
                        <Icon name="lock" size={24} color={Colors.colorPrimary} style={{ position: 'absolute', top: 13, left: 6 }} />

                    </View>

                    <Button title={"Login"} onPress={() => userLogin()} />
                    <SocialButton socialName={"facebook"} title={"Facebook"} color={"#3b5998"} />
                    <SocialButton socialName={"google"} title={"Google"} color={"#DB4437"} />


                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 5 }} onPress={() => navigation.navigate("SignUp")}>
                        <Text>New User? Please Register.</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    scrollview: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.primaryBold,
        color: Colors.colorPrimary,
        fontWeight: "bold",
        marginTop: 60,
        marginBottom: 30,
    },
    subTitle: {
        fontSize: 14,
        fontFamily: Fonts.primaryRegular,
        color: Colors.gray,
        marginBottom: 20
    },
    positionTextLogo: {
        alignItems: "center"
    },

})
export default Login;