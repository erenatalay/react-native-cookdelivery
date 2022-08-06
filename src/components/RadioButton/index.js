import React from 'react'
import { View, TouchableOpacity, Image,Text } from 'react-native'
import { COLORS, FONTS, SIZES, icons, data, images } from "../../constants";

const RadioButton = (
    { containerStyle, label, labelStyle, iconStyle, isSelected, onPress }
) => {
    return (
        <TouchableOpacity
            style={{ ...containerStyle, flexDirection: "row", alignItems: "center", justifyContent: "center" }}
            onPress={onPress}
        >
            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    ...iconStyle,
                    marginLeft: 5,
                    width: 20,
                    height: 20
                }}

            />

            <Text style={{
                ...FONTS.body3,
                ...labelStyle,
                marginLeft : SIZES.radius,
                color : COLORS.gray,
            }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default RadioButton