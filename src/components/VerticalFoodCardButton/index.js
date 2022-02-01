import React from "react";
import { View, Text, TouchableOpacity, Image,ScrollView } from "react-native"
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import OutlineButton from "../OutlineButton"
import Button from "../Button"
import Fonts from "../../theme/Fonts";
import Colors from "../../theme/Colors";
const VerticalFoodCardButton = ({ containerStyle, item, onPress }) => {
    return (
        <View
            style={{
                padding: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                marginBottom: SIZES.radius,
                flexDirection: "column",
                
            }}>
            <View style={{
                flexDirection: "row",
            
            }}>
                {/* image card */}
                <View style={{
                    justifyContent: "center",
                    flex: 1
                }}>
                    <Image
                        source={item.image}
                        style={{
                            height: 80,
                            width: 80
                        }}
                    />
                </View>
                {/* card title */}
                <View style={{
                    flex: 2,
                    flexDirection: "column"

                }}>
                    <Text style={{
                        fontWeight: "bold",
                        marginBottom: 5,
                        ...FONTS.h3
                    }}>{item.name}</Text>
                    <Text style={{
                        ...FONTS.body3
                    }}>${item.price}</Text>
                </View>


            </View>
            {/* buttons */}
            <View style={{
                marginTop: 15,
            }}>
                <OutlineButton
                    title="Listeden Kaldır"
                />
                <TouchableOpacity style={{
                    backgroundColor: COLORS.primary,
                    paddingTop: 12,
                    paddingBottom: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                    borderRadius: 10,
                }}  >

                    <Text style={{
                        fontSize: 16,
                        fontFamily: Fonts.primaryRegular,
                        color: Colors.white
                    }}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default VerticalFoodCardButton;