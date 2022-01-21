import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Colors from '../../theme/Colors';

const Input = (props) => {
    const [hasFocus,setHasFocus]=useState(false);
    return (
        <View style={{marginBottom : 12}}>
            <TextInput
                style={[hasFocus?styles.focusInputStyle:styles.inputStyle,props.style]}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={props.onChangeText}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType}
                onFocus={()=>setHasFocus(true)}
                onBlur={()=>setHasFocus(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle : {
        borderWidth : 1,
        borderRadius : 20,
        padding : 10,
        borderColor : Colors.gray,
        textAlign : "center"
      
    },

    focusInputStyle : {
        borderWidth : 1,
        borderColor : Colors.colorPrimary,
        borderRadius : 20,
        textAlign : "center",


    }
})
export default Input
