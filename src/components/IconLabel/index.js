import React from "react";
import {
    View,
    Image,
    Text
} from "react-native"

import { FONTS, SIZES } from "../../constants"


const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
    return (
        <View style={{
            ...containerStyle,
            flexDirection: "row",
             paddingVertical: SIZES.base, 
             paddingHorizontal: 15,
             borderRadius: SIZES.radius
        }}>
            <Image source={icon} 
            style={{ 
                ...iconStyle, 
            width: 20,
            height: 20 }}
            />

            <Text style={{...FONTS.h3,...labelStyle,marginLeft :SIZES.base}}>{label}</Text>

        </View>
    )
}

export default IconLabel