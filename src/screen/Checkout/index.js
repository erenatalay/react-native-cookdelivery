import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CardItem from '../../components/CardItem';
import { COLORS, FONTS, SIZES, icons, data, images } from "../../constants";
import FormInput from "../../components/FormInput"
import FooterTotal from "../../components/FooterTotal"

const Checkout = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [coupon, setCoupon] = React.useState("");
    React.useEffect(() => {
        let { selectedCard } = route.params
        setSelectedCard(selectedCard)
    }, [])

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: "center"
                }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />

                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "black"
                        }}>Checkout</Text>
                    </View>

                </View>
                <View style={{
                    width: 40
                }}>

                </View>


            </View>
        )
    }

    const renderMyCards = () => {
        return (
            <View>
                {selectedCard && data.myCards.map((item, index) => {
                    return (
                        <CardItem key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
                        />
                    )
                })}
            </View>
        )
    }

    const renderDeliveryAdress = () => {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text style={{ ...FONTS.h3 }}>Delivery Adress</Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: SIZES.padding,
                    borderWidth: 2,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.lightGray2
                }}>
                    <Image source={icons.location} style={{ width: 40, height: 40 }} />
                    <Text
                        style={{ marginLeft: SIZES.radius, width: "85%", ...FONTS.body3 }}
                    >
                        Fethiye Mah Osmangazi Bursa
                    </Text>
                </View>
            </View>
        )
    }

    const renderCoupon = () => {
        return (
            <View style={{ marginTop: 15 }}>
                <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>

                <FormInput

                    inputContainerStyle={{
                        marginTop: 0,
                        paddingLeft: SIZES.padding,
                        paddingLeft: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray,
                        backgroundColor: COLORS.white,
                        overflow: "hidden"
                    }}
                    placeHolder="Coupon Code"
                    appendComponent={
                        <View style={{
                            width: 50,
                            alignItems : "center",
                            justifyContent : "center",
                            backgroundColor : COLORS.primary
                        }}>
                            <Image source={icons.discount} style={{width : 40,height :40}} />
                        </View>
                    }
                />
            </View>
        )

    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}

            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20
                }}
            >
                {renderMyCards()}

                {renderDeliveryAdress()}

                {renderCoupon()}
            </KeyboardAwareScrollView>
            <View style={{flex : 3}}>

            <FooterTotal
                subTotal={37.97}
                shippingFree={0.00}
                total={37.97}
                onPress={() => navigation.push("Success")}
            />
            </View>

        </View>
    )
}

export default Checkout