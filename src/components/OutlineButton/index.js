import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
const OutlineButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Text style={styles.testStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle  :{
        paddingTop : 12,
        paddingBottom : 12,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        marginTop : 2,
        marginBottom : 2,
        borderRadius : 10,
        borderWidth: 1,
        borderColor: Colors.colorPrimary,
     
    },
    testStyle : {
        fontSize : 16,
        fontFamily : Fonts.primaryRegular,
        color : Colors.colorPrimary
    }
})

export default OutlineButton
