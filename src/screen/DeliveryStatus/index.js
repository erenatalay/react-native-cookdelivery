import React from 'react'
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Button from '../../components/Button';
import LineDivider from '../../components/LineDivider';
import TextButton from '../../components/TextButton';
import TextIconButton from '../../components/TextIconButton';
import { COLORS, FONTS, SIZES, icons, data, constants } from "../../constants";

const DeliveryStatus = ({ navigation, route }) => {
    const [currentStep, setCurrentStep] = React.useState(4)
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
                        }}>Delivery Status</Text>
                    </View>

                </View>
                <View style={{
                    width: 40
                }}>

                </View>


            </View>
        )
    }
    const renderInfo = () => {
        return (
            <View style={{ marginTop: SIZES.radius, paddingHorizontal: SIZES.padding }}>
                <Text style={{ textAlign: "center", color: COLORS.gray }}>
                    Estimated Delivery
                </Text>
                <Text style={{ ...FONTS.h2, textAlign: "center", fontWeight: "bold" }}>21 Sept 2022/12:30PM</Text>
            </View>
        )
    }

    const renderTrackOrder = () => {
        return (
            <View style={{
                marginTop: SIZES.padding,
                paddingVertical: SIZES.padding,
                borderRadius: SIZES.radius,
                borderWidth: 2,
                borderColor: COLORS.lightGray2,
                backgroundColor: COLORS.lightGray
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                    paddingHorizontal: SIZES.padding
                }}>
                    <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>Track Order</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.gray }}>NY012345</Text>


                </View>
                <LineDivider />

                <View style={{
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}>
                    {constants.track_order_status.map((item, index) => {
                        return (
                            <View key={index}>
                                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: -5 }}>
                                    <Image source={icons.check_circle}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1
                                        }}
                                    />

                                    <View style={{
                                        marginLeft: SIZES.radius
                                    }}>

                                        <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>{item.title}</Text>
                                        <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{item.sub_title}</Text>
                                    </View>
                                </View>

                                {index < constants.track_order_status.length - 1 && (
                                    <View>
                                        {index < currentStep && (
                                            <View style={{
                                                height: 50,
                                                width: 3,
                                                marginLeft: 18,
                                                backgroundColor: COLORS.primary,
                                                zIndex: -1
                                            }}>


                                            </View>
                                        )}

                                        {index >= currentStep && (
                                            <Image source={icons.dotted_line}
                                                resizeMode="cover"
                                                style={{
                                                    width: 4,
                                                    height: 50,
                                                    marginLeft: 17
                                                }}
                                            />
                                        )}

                                    </View>
                                )}
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }


    const renderFooter = () => {
        return (
            <View style={{
                marginTop: SIZES.radius,
                marginBottom: SIZES.padding
            }}>
                {currentStep <= constants.track_order_status.length - 1 && (
                    <View style={{
                        flexDirection: "row",
                        height: 55
                    }}>
                        <TextButton buttonContainerStyle={{
                            width: "40%",
                            borderRadius: SIZES.base,
                            backgroundColor: COLORS.lightGray2,

                        }}
                            label="Cancel"
                            labelStyle={{ color: COLORS.primary }}
                            onPress={() => navigation.push("FoodDetail")}
                        />

                        <TextIconButton
                            containerStyle={{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            label="Map View"
                            labelStyle={{
                                ...FONTS.h3,
                                color: COLORS.white,
                            }}
                            iconPosition="LEFT"
                            icon={icons.map}
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white
                            }}
                            onPress={() => navigation.push("Map")}
                        />
                    </View>
                )}
                {currentStep === constants.track_order_status.length  && (
                    <TextButton buttonContainerStyle={{
                        height: 55,
                        borderRadius : SIZES.base,
                        backgroundColor : COLORS.primary,

                    }} 
                    labelStyle={{
                        ...FONTS.body3,
                        color : COLORS.white,

                    }}
                    label="Done"
                    onPress={() => navigation.push("FoodDetail")}
                    />
                )}
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: SIZES.padding }}>
            {renderHeader()}

            {renderInfo()}


            <ScrollView showsHorizontalScrollIndicator={false}>
                {renderTrackOrder()}
            </ScrollView>

            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus;