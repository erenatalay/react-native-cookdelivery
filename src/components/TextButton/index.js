import React from "react"

import {
    TouchableOpacity, Text
} from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"


const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress, label2 = "", labelStyle2 }) => {
    return (
        <TouchableOpacity
            style={{
                ...buttonContainerStyle,
                alignItems: "center",
                justifyContent: "center",

            }}
            onPress={onPress}
        >
            <Text style={{
                ...labelStyle,


            }}>
                {label}
            </Text>
            {label2 != "" &&
                <Text style={{...FONTS.h3,...labelStyle2,flex : 1, textAlign : "right" , color : COLORS.white}}>
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton;