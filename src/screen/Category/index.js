import React from "react"
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { COLORS, FONTS, SIZES, icons, data } from "../../constants";
import { Dimensions } from 'react-native';
import HalfScreenCard from "../../components/HalfScreenCard";


const Category = () => {
    return (

        <ScrollView
        >
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent : "space-around"
            }}>
                {
                    data.categories.map(item => {
                        return (

                            <HalfScreenCard item={item} />



                        )
                    })
                }

            </View>

        </ScrollView>

    )
}


export default Category;