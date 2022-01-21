import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Alert } from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation()
    const [mobile, onChangeMobile] = useState();
    const [password, onChangePassword] = useState();
    const [name, onChangeName] = useState();
    const [email, onChangeEmail] = useState();
    const [confirmPassword, onChangeConfirmPassword] = useState();

    const userRegister = () => {
        if (mobile === undefined || mobile.length < 10) {
            Toast.show('Please Enter Valid Mobile Number', Toast.LONG);
        }
        else if (password === undefined || password.length < 6) {
            Toast.show('Please Enter Valid Password', Toast.LONG);
        } else {
            Alert.alert("Login Clicked")
        }
    }

    return (
        <View >
            <TouchableOpacity style={{
                width: 50,
                justifyContent: 'center'
            }}
                onPress={() => navigation.goBack()}

            >
                <Icon name="arrow-back" size={30} color={Colors.colorPrimary} style={{width : 30,height : 30 }} />

            </TouchableOpacity>
            <AppStatusBar />
            <ScrollView style={styles.scrolview}>
                <View style={{ margin: 20, marginBottom: 20 }}>
                    <View style={styles.positionTextLogo}>
                        <Logo style={styles.logo} />
                        <Text style={styles.title}>Sign Up</Text>
                    </View>

                    <View style={{ position: 'relative' }}>
                        <Input
                            placeholder="Enter Name"
                            maxLength={20}
                            value={name}
                            onChangeText={onChangeName}
                            style={{ paddingLeft: 30, marginBottom: 10 }}
                        />
                        <Icon name="person" size={24} color={Colors.colorPrimary} style={{ position: 'absolute', top: 13, left: 6 }} />

                    </View>

                    <View style={{ position: 'relative' }}>
                        <Input
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
                        <Input
                            placeholder="Enter Email"
                            maxLength={20}
                            value={email}
                            onChangeText={onChangeEmail}
                            style={{ paddingLeft: 30, marginBottom: 10 }}
                        />
                        <Icon name="email" size={24} color={Colors.colorPrimary} style={{ position: 'absolute', top: 13, left: 6 }} />

                    </View>

                    <View style={{ position: 'relative' }}>
                        <Input
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            maxLength={20}
                            value={password}
                            onChangeText={onChangePassword}
                            style={{ paddingLeft: 30, marginBottom: 10 }}
                        />
                        <Icon name="lock" size={24} color={Colors.colorPrimary} style={{ position: 'absolute', top: 13, left: 6 }} />

                    </View>

                    <View style={{ position: 'relative' }}>
                        <Input
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            maxLength={20}
                            value={confirmPassword}
                            onChangeText={onChangeConfirmPassword}
                            style={{ paddingLeft: 30, marginBottom: 10 }}
                        />
                        <Icon name="lock" size={24} color={Colors.colorPrimary} style={{ position: 'absolute', top: 13, left: 6 }} />

                    </View>

                    <Button title={"Register"} onPress={() => userRegister()} />
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate("Login")}>
                        <Text>You have an account ? Sign in.</Text>
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
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10
    },
    positionTextLogo: {
        alignItems: "center"
    },
})

export default SignUp;
