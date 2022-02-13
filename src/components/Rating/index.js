import React from "react"
import { View, Image, StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES, icons } from "../../constants"

const Rating = ({ rating, iconStyle, activeColor = COLORS.orange, inactiveColor = "gray" }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image source={icons.star}
                style={{
                    ...styles.rateIcon,
                    ...iconStyle,
                    tintColor: rating >= 1 ? activeColor : inactiveColor,
                }}

            />

            <Image source={icons.star}
                style={{
                    ...styles.rateIcon,
                    ...iconStyle,
                    tintColor: rating >= 2 ? activeColor : inactiveColor,
                }}

            />

            <Image source={icons.star}
                style={{
                    ...styles.rateIcon,
                    ...iconStyle,
                    tintColor: rating >= 3 ? activeColor : inactiveColor,
                }}

            />

            <Image source={icons.star}
                style={{
                    ...styles.rateIcon,
                    ...iconStyle,
                    tintColor: rating >= 4 ? activeColor : inactiveColor,
                }}

            />

            <Image source={icons.star}
                style={{
                    ...styles.rateIcon,
                    ...iconStyle,
                    tintColor: rating >= 5 ? activeColor : inactiveColor,
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    rateIcon: {
        height: 15,
        width: 15
    }
})

export default Rating;
