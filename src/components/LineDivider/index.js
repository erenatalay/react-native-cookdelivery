import React from "react"
import {View} from "react-native"

import { COLORS, FONTS, SIZES } from "../../constants"

const LineDivider = ({lineStyle}) => {
    return(
        <View
            style={{
                ...lineStyle,
                height : 2,
                width : "100%",
                backgroundColor : COLORS.lightGray2
            }}
        
        
        />

      
    )
}

export default LineDivider;
