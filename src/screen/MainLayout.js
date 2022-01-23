import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { icons, images, SIZES, COLORS, FONTS, constants } from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from "../../store/actions/tab"
import Home from "./Home"
import Cart from "./Cart"
import Favourite from "./Favourite"
import Notification from "./Notification"
import Category from './Category';


const TabButton = ({ label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >

            <Animated.View
                style={[{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                },
                    outerContainerStyle,
                    innerContainerStyle
                ]}

            >
                <Animated.View
                    style={[{
                        flexDirection: "column",
                        width: "100%",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,

                    },
                        innerContainerStyle
                    ]}
                >
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.primary : COLORS.gray,
                            
                        }}
                    />

                    <Text style={{
                        color:isFocused ? COLORS.primary : COLORS.gray,
                        fontSize: 12
                    }}>
                        {label}
                    </Text>


                </Animated.View>
            </Animated.View>

        </TouchableWithoutFeedback>
    )
}

const MainLayout = ({ drawerAnimationStyle, navigation }) => {
    const dispatch = useDispatch();
    const selectedTab = useSelector(state => state.tab?.selectedTab)

    const flatListRef = React.useRef()






    React.useEffect(() => {
        dispatch(setSelectedTab(constants.screens.home))

    }, [])


    React.useEffect(() => {

        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0
            })

        }
        if (selectedTab == constants.screens.category) {
            flatListRef?.current?.scrollToIndex({
                index: 1
            })

        }


        if (selectedTab == constants.screens.cart) {
            flatListRef?.current?.scrollToIndex({
                index: 2
            })

        }

        if (selectedTab == constants.screens.favourite) {
            flatListRef?.current?.scrollToIndex({
                index: 3
            })

        }


        if (selectedTab == constants.screens.notification) {
            flatListRef?.current?.scrollToIndex({
                index: 4
            })

        }

    }, [selectedTab])

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{

                    width: 50,
                    paddingLeft: SIZES.padding,
                    justifyContent: "center"
                }}
                    onPress={() => navigation.openDrawer()}
                >
                    <Icon name="menu" size={30} color={"black"} style={{ position: 'absolute', top: 13, left: 6 }} />


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
                        }}>{selectedTab}</Text>
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
    return (
        <Animated.View
            style={{
                flex: 1,

                backgroundColor: "white",
                ...drawerAnimationStyle
            }}
        >

            {renderHeader()}
            <View style={{
                flex: 1
            }}>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    height: SIZES.height,
                                    width: SIZES.width
                                }}
                            >
                                {item.label == constants.screens.home && <Home />}
                                {item.label == constants.screens.cart && <Cart />}
                                {item.label == constants.screens.favourite && <Favourite />}
                                {item.label == constants.screens.category && <Category />}
                                {item.label == constants.screens.notification && <Notification />}


                            </View>
                        )
                    }}
                />


            </View>

            {/* footer */}
            <View style={{
                justifyContent: "flex-end"
            }}>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.lightGray1
                    ]}
                    style={{
                        position: "absolute",
                        backgroundColor: COLORS.lightGray4,
                        top: -1,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}

                />

                {/* Tabs */}
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: SIZES.radius,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white

                }}>
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}

                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => dispatch(setSelectedTab(constants.screens.home))}

                    />

                    <TabButton
                        label={constants.screens.category}
                        icon={icons.category}

                        isFocused={selectedTab == constants.screens.category}
                        onPress={() => dispatch(setSelectedTab(constants.screens.category))}

                    />

                    <TabButton
                        label={constants.screens.cart}
                        icon={icons.cart}

                        isFocused={selectedTab == constants.screens.cart}
                        onPress={() => dispatch(setSelectedTab(constants.screens.cart))}

                    />

                    <TabButton
                        label={constants.screens.favourite}
                        icon={icons.favourite}

                        isFocused={selectedTab == constants.screens.favourite}
                        onPress={() => dispatch(setSelectedTab(constants.screens.favourite))}

                    />

                    <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}

                        isFocused={selectedTab == constants.screens.notification}
                        onPress={() => dispatch(setSelectedTab(constants.screens.notification))}

                    />

                </View>

            </View>
        </Animated.View>
    )
}

export default MainLayout;