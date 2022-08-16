import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native"
import { COLORS, FONTS, SIZES, icons, data } from "../../constants";


const HalfScreenCard = ({ item }) => {
    const cardWidth = (Dimensions.get('window').width - 16 * 3) / 2;
    return (
        <TouchableOpacity style={{
            width: cardWidth,
            marginRight: 5,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            marginBottom: 15,
            paddingRight: 20,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.lightGray2,

        }}>
            <View style={{
                flexDirection: 'row',
             

            }}>
                {/* Card Image  */}
                <View
                    style={{
                        width: 60,
                        height: 65,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="center"
                        style={{
                            width: 60,
                            height: 65
                        }}
                    />
                </View>


                <Text
                  style={{
                      color : "black",
                      fontWeight : "bold",
                      fontSize : 15,
                    marginTop : 20,
                    marginLeft : 5
                }}

                >
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default HalfScreenCard;