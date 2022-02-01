import React from 'react'
import { Text, View, FlatList } from "react-native"
import VerticalFoodCardButton from '../../components/VerticalFoodCardButton';
import { COLORS, FONTS, SIZES, icons, data } from "../../constants";

const Favourite = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: "column",

        }}>
            <FlatList
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,

                }}
                data={data.myFavourite}
                keyExtractor={item => `${item.id}`}

                renderItem={({ item, index }) => (
                    <VerticalFoodCardButton item={item} />

                )}
                ListFooterComponent={
                    <View style={{ height: 150 }}></View>
                }
            />
        </View>
    )
}

export default Favourite
