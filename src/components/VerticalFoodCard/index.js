import React from "react";

import {
    TouchableOpacity,
    View,
    Text,
    Image
} from "react-native"
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle,
                width: 200,
                padding: SIZES.radius,
                alignItems: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
            }}
            onPress={onPress}
        >
            <View style={{
                flexDirection: "row"
            }}>

                <View style={{ flex: 1,flexDirection : "row" }}>
                    <Image
                        source={icons.calories}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text style={{ ...FONTS.body5, color: COLORS.darkgray }}>{item.calories} Calories</Text>
                </View>
                <Image
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                    }}
                />

            </View>

            <View style={{
                height : 150,
                width : 150,
                alignItems : "center",
                justifyContent : "center"
            }}>
                <Image
                    source={item.image}
                    style={{
                        height : "100%",
                        width : "100%"
                    }}
                />


            </View>

            <View style={{
                alignItems : "center",
                marginTop :-20
            }}>
                <Text style={{...FONTS.h3}}>{item.name}</Text>
                <Text style={{
                    ...FONTS.body5,
                    color : COLORS.darkgray,textAlign : "center" ,
                    
                }}>
                    {item.description}
                </Text>
                <Text style={{
                    ...FONTS.h2,
                    marginTop : SIZES.radius
                }}>
                    ${item.price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard;
