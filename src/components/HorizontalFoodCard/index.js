import React from "react";

import {
    TouchableOpacity,
    View,
    Text,
    Image
} from "react-native"
import {COLORS,FONTS ,SIZES,icons} from "../../constants"

const HorizontalFoodCard = ({containerStyle,imageStyle,item,onPress}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection : "row",
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.lightGray2,
                ...containerStyle
            }}
            onPress={onPress}
        >

            <Image
                source={item.image}
                style={imageStyle}
            />

            <View style={{
                flex :1,
            }}>
                <Text style={{...FONTS.h3, fontSize : 17}}>
                    {item.name}
                </Text>

                <Text style={{...FONTS.body4, color:COLORS.darkgray}}>
                    {item.description}
                </Text>

                
                <Text style={{marginTop : SIZES.base,...FONTS.h2}}>
                    ${item.price}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard