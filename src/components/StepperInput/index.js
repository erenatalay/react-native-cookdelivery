import React from "react"

import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES, icons, data, } from "../../constants";
import IconButton from "../IconButton";


const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
    return (
        <View style={{
            ...containerStyle,
            flexDirection: "row",
            height: 60,
            width: 130,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.radius,
            

        }}>
            <IconButton containerStyle={{
                width: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
                icon={icons.minus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor:  "gray"
                }}
                onPress={onMinus}
            />

                <View style={{
                    flex : 1,
                    alignItems : "center",
                    justifyContent : "center"
                }}>
                    <Text style={{...FONTS.h2}}>{value}</Text>
                </View>
            <IconButton containerStyle={{
                width: 50,
                alignItems: "center",
                justifyContent: "center",
            }}
                icon={icons.plus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.primary
                }}
                onPress={onAdd}
            />
        </View>
    )
}

export default StepperInput