import React from "react"

import { Text, View, Platform } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { icons, COLORS, SIZES, FONTS } from '../../constants'
import Button from "../Button";

const FooterTotal = ({ subTotal, shippingFree, total, onPress }) => {
    return (
        <View>
            {/* Shadow */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray]}
                style={{
                    position : "absolute",
                    top : -15,
                    left : 0,
                    right : 0,
                    height : 50,
                    borderTopLeftRadius : 15,
                    borderTopRightRadius : 15
                }}

            />

            {/* Order Detail */}

            <View
                style={{
                    flexDirection : "column",
                    paddingLeft : 15,
                    paddingRight : 15,
                    paddingBottom: SIZES.padding*12,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: COLORS.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}
            >

  

                {/* Shipping Free */}
                <View style={{
                    flexDirection: "row",
                    marginTop: SIZES.base,
                }}>
                    <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping free</Text>
                    <Text style={{ ...FONTS.body3, fontWeight: "bold" }}>{shippingFree.toFixed(2)}TL</Text>

                </View>

           

                {/* Total */}
                <View style={{
                    flexDirection: "row",
                    marginTop: SIZES.padding,

                }}>
                    <Text style={{ flex: 1, ...FONTS.h2 }}>Total:</Text>
                    <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>{total.toFixed(2)}TL</Text>

                </View>
            
                {/* Button */}
             
                <Button title="Place Your Order" onPress={onPress} />



            </View>

        </View>
    )
}

export default FooterTotal;