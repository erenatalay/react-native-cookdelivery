import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';
import Home from "../screen/Home"
import { isIphoneX } from 'react-native-iphone-x-helper';
import Cart from '../screen/Cart';

const Tab = createBottomTabNavigator();
import { COLORS, FONTS, icons, SIZES } from "../constants"


const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}
const TabBarCustomButton = ({ accessibilityState, children, onPress, label }) => {
    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{
                flex: 1, alignItems: "center", backgroundColor: COLORS.primary, borderTopLeftRadius: 30,
                borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, paddingRight: 30, paddingLeft: 30, paddingTop: 8, paddingBottom: 0
            }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0, }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.primary, }}></View>

                    <View style={{ flex: 1, backgroundColor: COLORS.primary, }}></View>
                </View>

                <TouchableOpacity
                    style={{

                    }}
                    onPress={onPress}
                >
                    {children}

                    <Text numberOfLines={2} style={{ fontSize: 14, color: "white", paddingTop: 5 }}>{label}</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}

            </TouchableOpacity>
        )
    }
}






const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 3,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0,
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary,
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            label={"Home"}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary,

                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            label={"Search"}

                        />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.cart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary,

                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            label={"Cart"}

                        />
                    )
                }}
            />
            <Tab.Screen
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary,

                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            label={"Favourite"}

                        />
                    )
                }}
            />

            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary,

                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            label={"User"}

                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs
