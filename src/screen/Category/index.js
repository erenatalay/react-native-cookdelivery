import React from "react"
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { COLORS, FONTS, SIZES, icons, data } from "../../constants";
import { Dimensions } from 'react-native';
import HalfScreenCard from "../../components/HalfScreenCard";


const Category = () => {
    return (

        <FlatList
        style={{
            flex: 1,
            flexDirection: "row",
            flexWrap : "wrap",
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.radius
        }}
        data={data.categories}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item,index}) => (
            <HalfScreenCard item={item} />

        )}/>
   
    )
}


export default Category;