import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
const Button = (props) => {
    return (
        <TouchableOpacity style={{...styles.buttonStyle,...props.buttonStyle}} onPress={props.onPress} disabled={props.disabled}>

            <Text style={ styles.testStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle  :{
        backgroundColor: COLORS.primary,
        paddingTop : 12,
        paddingBottom : 12,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        marginTop : 20,
        marginBottom : 20,
        borderRadius : 10,
    },
    testStyle : {
        fontSize : 16,
        fontFamily : Fonts.primaryRegular,
        color : Colors.white
    }
})

export default Button
