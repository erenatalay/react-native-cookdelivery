import React from 'react'
import { Text, View,FlatList } from "react-native"
import NotificationCard from '../../components/NotificationCard';
import { COLORS, FONTS, SIZES, icons, data } from "../../constants";

const Notification = () => {
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
                data={data.notification}
                keyExtractor={item => `${item.id}`}

                renderItem={({ item, index }) => (
                    <NotificationCard data={item} />


                )}
                ListFooterComponent={
                    <View style={{ height: 150 }}></View>
                }
            />
        </View>
    )
}

export default Notification
