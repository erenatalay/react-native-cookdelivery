import React from 'react'
import { COLORS, FONTS, SIZES, icons, data, constants } from "../../constants";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native"

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity style={{
            ...containerStyle,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}
            onPress={onPress}
        >
            {iconPosition === "LEFT" && <Image source={icon} style={{ ...style.image, ...iconStyle }} />}

            <Text style={{
                ...FONTS.body3,
                ...labelStyle
            }}>
                {label}
            </Text>

            {iconPosition === "RIGHT" && <Image source={icon} style={{ ...style.image, ...iconStyle }} />}


        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
})

export default TextIconButton