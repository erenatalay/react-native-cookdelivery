import React from "react"

import {
    TouchableOpacity,Text
} from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"


const TextButton = ({buttonContainerStyle,label,labelStyle,onPress}) => {
    return(
        <TouchableOpacity
            style={{
                ...buttonContainerStyle,
                alignItems : "center",
                justifyContent : "center",
              
            }}
            onPress={onPress}
        >
            <Text style={{
                ...labelStyle,


            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;