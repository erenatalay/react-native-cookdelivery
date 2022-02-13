import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import IconLabel from "../../components/IconLabel";
import TextButton from "../../components/TextButton";
import { COLORS, FONTS, SIZES, icons, data, } from "../../constants";
import LineDivider from "../../components/LineDivider";
import Rating from "../../components/Rating";
import StepperInput from "../../components/StepperInput";

const FoodDetail = ({ navigation }) => {
    const [foodItem, setFoodItem] = React.useState(data.vegBiryani)
    const [selectedSize, setSelectedSize] = React.useState("")
    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: "center",
                    
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
                        }}>Food Detail</Text>
                    </View>

                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            position: "absolute",
                            backgroundColor: COLORS.primary,
                            borderRadius: 50,
                            top: 0,
                            right: 17,
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 11111
                        }}

                    >
                        <Text
                            style={{ color: "white", fontSize: 10 }}
                        >1</Text>

                    </View>
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>


            </View>
        )
    }

    const renderDetails = () => {
        return (
            <View style={{
                marginTop : 10,
                marginBottom: SIZES.padding,
                paddingHorizontal: 15
            }}>

                {/* Food Card */}

                <View style={{
                    height: 190,
                    borderRadius: 15,
                    backgroundColor: COLORS.lightGray2
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: SIZES.base,
                        paddingHorizontal: 10
                    }}>

                        {/* Calories */}

                        <View style={{
                            flexDirection: "row"
                        }}>
                            <Image source={icons.calories} style={{ width: 30, height: 30 }} />

                            <Text style={{
                                ...FONTS.body4,
                                color: COLORS.darkgray

                            }}>{foodItem?.calories} calories</Text>
                        </View>

                        {/* Favourite */}

                        <Image source={icons.love} style={{ width: 20, height: 20, tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray }} />

                    </View>

                    {/* Food Image */}

                    <Image source={foodItem?.image} resizeMode="contain" style={{ height: 170, width: "100%" }} />
                </View>

                {/* Food Info */}

                <View style={{ marginTop: SIZES.padding }}>
                    {/* Name & description */}
                    <Text style={{ ...FONTS.h1, paddingHorizontal: SIZES.radius }}>
                        {foodItem?.name}
                    </Text>
                    <Text style={{ ...FONTS.body3, paddingHorizontal: SIZES.radius, marginTop: SIZES.base, color: COLORS.darkgray, textAlign: "justify", }}>
                        {foodItem?.description}
                    </Text>

                    {/* Ratings Durations Shipping */}

                    <View style={{ flexDirection: "row", marginTop: SIZES.padding, paddingHorizontal: SIZES.radius }}>
                        {/* Ratings */}
                        <IconLabel
                            containerStyle={{
                                backgroundColor: COLORS.primary,
                            }}
                            icon={icons.star}
                            iconStyle={{
                                tintColor: COLORS.white
                            }}
                            label="4.5"
                            labelStyle={{
                                color: COLORS.white
                            }}

                        />

                        {/* Duration */}
                        <IconLabel
                            containerStyle={{
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="30 min"


                        />
                        {/* Shipping */}

                        <IconLabel
                            containerStyle={{
                            }}
                            icon={icons.dollar}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Free Shipping"


                        />
                    </View>

                    {/* SIZES */}

                    <View style={{
                        flexDirection: "row",
                        marginTop: SIZES.padding,
                        alignItems: "center",
                        paddingHorizontal: SIZES.padding * 3

                    }}>
                        <Text style={{ ...FONTS.h3 }}>
                            Sizes
                        </Text>

                        <View style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            marginLeft: SIZES.padding,


                        }}>
                            {
                                data.sizes.map((item, index) => {
                                    return (
                                        <TextButton
                                            key={`Sizes-${index}`}
                                            buttonContainerStyle={{
                                                width: 55,
                                                height: 55,
                                                margin: SIZES.base,

                                                borderWidth: 1,
                                                borderRadius: 6,
                                                borderColor: selectedSize === item.id ? COLORS.primary : COLORS.gray2,
                                                backgroundColor: selectedSize === item.id ? COLORS.primary : null,


                                            }}
                                            label={item.label}
                                            labelStyle={{
                                                ...FONTS.body2,
                                                color: selectedSize === item.id ? COLORS.white : COLORS.gray2,

                                            }}
                                            onPress={() => {
                                                setSelectedSize(item.id)
                                            }}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>

            </View>
        )
    }


    const renderRestaurant = () => {
        return (
            <View style={{
                flexDirection: "row",
                marginVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding * 4,
                alignItems: "center"
            }}>
                <Image source={data.myProfile?.profile_image}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* Info */}

                <View style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    justifyContent: "center",
                   
                }}>

                    <Text style={{ ...FONTS.h3 }}>ByProgrammers</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.gray }}>1.2 KM away from you</Text>
                    {/* Ratings */}
                </View>
                <Rating rating={4} iconStyle={{marginLeft : 3}}/>

            </View>
        )
    }


    const renderFooter = () => {
        return (
            <View style={{
                flexDirection :"row",
                alignItems : "center",
               
                paddingHorizontal : SIZES.padding *3,
                paddingBottom : SIZES.radius
            }}>
                {/* Stepper Input */}
                    <StepperInput value={3}/>
                {/* Text Button */}
            </View>
        )
    }
    return (
        <View style={{flex : 1}}>
            {renderHeader()}

            <ScrollView >
                {/* Food Details */}
                {renderDetails()}

                <LineDivider />
                {/* Restuarant  */}
                {renderRestaurant()}
            </ScrollView>

            {/* Footer */}
            <LineDivider/>
            {renderFooter()}

        </View>
    )
}

export default FoodDetail