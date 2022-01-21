import React from "react";
import { useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import iconButton from "react-native-vector-icons/dist/lib/icon-button";
import FooterTotal from "../../components/FooterTotal";
import { icons, COLORS, SIZES, FONTS, data } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const Cart = () => {

    const [myCart, setMyCart] = useState(data.myCart)
    const [orderItems, setOrderItems] = React.useState([]);
    
    const navigation = useNavigation()


    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 1
    }
    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }
    const renderCartList = () => {
        return (



            <SwipeListView
                data={myCart}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{

                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <ScrollView
                        style={{
                            paddingBottom: 5
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                flex: 1,
                                height: 100,
                                backgroundColor: COLORS.lightGray,
                                ...styles.cartItemContainer
                            }}
                        >

                            <View style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10,

                            }}>
                                <Image
                                    source={data.item.image}
                                    resizeMode="contain"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        top: 10
                                    }}
                                />
                            </View>


                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{ ...FONTS.h3 }}>{data.item.name}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>{data.item.price} TL</Text>
                            </View>
                            {/* Quantity */}
                            <View
                                style={{
                                    position: 'absolute',

                                    width: SIZES.width,
                                    height: 50,
                                    justifyContent: 'flex-end',
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25
                                    }}
                                    onPress={() => editOrder("-", data.item.id, data.item.price)}
                                >
                                    <Text style={{ ...FONTS.body1 }}>-</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        width: 40,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ ...FONTS.h2 }}>{getOrderQty(data.item.id)}</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25,
                                        marginRight: 40
                                    }}
                                    onPress={() => editOrder("+", data.item.id, data.item.price)}
                                >
                                    <Text style={{ ...FONTS.body1 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>

                )}

                renderHiddenItem={(data, rowMap) => (
                    <ScrollView
                        style={{
                            flexGrow: 1,
                            paddingBottom: SIZES.radius
                        }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            height: 100,
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}>
                            <Image source={icons.delete_icon} style={{ color: COLORS.primary, width: 40, height: 40 }} />

                        </TouchableOpacity>
                    </ScrollView>

                )}
            />

        )
    }
    return (
        <SafeAreaView style={{ flexDirection: "column",flex : 1, backgroundColor: COLORS.white }}>

            {renderCartList()}
            <FooterTotal

                shippingFree={0.00}
                total={37.97}
                onPress={() => navigation.push("MyCard")}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default Cart;