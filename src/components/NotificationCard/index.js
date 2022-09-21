import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from "../../constants"
const NotificationCard = ({ containerStyle, data, onPress }) => {
  return (
    <TouchableOpacity style={{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
      padding: 10,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.lightGray,
      ...containerStyle
    }}>
      <Image resizeMode="cover"
        source={data.image}
        style={{ width: 100, height: 100, borderRadius: SIZES.radius }}
      />
      <View style={{ width: "65%", paddingHorizontal: 20 }}>
        <Text style={{
          ...FONTS.h2,
        }}>
          {data.title}
        </Text>

        <Text style={{
          ...FONTS.h2,
          fontWeight : "bold"
        }}>
          {data.discount}
        </Text>

        <Text style={{
          ...FONTS.body3,
          color: COLORS.gray,

        }}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NotificationCard;