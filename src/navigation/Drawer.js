import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"

import {
    createDrawerNavigator,
    DrawerContentScrollView

} from "@react-navigation/drawer"

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    data,
    constants
}
    from "../constants"
import MainLayout from "../screen/MainLayout";
import Animated from "react-native-reanimated";
import {  useSelector,useDispatch } from 'react-redux';
import { setSelectedTab } from "../../store/actions/tab"
import { logout } from "../../store/actions/users"

const Drawer = createDrawerNavigator();
const CustomDrawerItem = ({ label, icon,isFocused,onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                height: 40,
                marginBottom: SIZES.base,
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor : isFocused ? COLORS.transparentBlack1 : null
            }}
            onPress={onPress}
        >
            <Image source={icon} style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white

            }} />
            <Text style={{
                ...FONTS.h3,
                marginLeft: 15,
                color: COLORS.white
            }}>{label}</Text>

        </TouchableOpacity>
    )
}
const CustomDrawerContent = ({ navigation }) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    const selectedTab = useSelector(state => state.tab?.selectedTab)
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1, paddingHorizontal: SIZES.radius }}
        >
            <View style={{
                alignItems: "flex-start",
                justifyContent: "center"
            }}>
                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}
                    onPress={() => navigation.closeDrawer()}
                >
                    <Image
                        source={icons.cross}
                        style={{
                            height: 35,
                            width: 35,
                            tintColor: COLORS.white
                        }}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center"
                    }}
                    onPress={() => console.log("Profile")}
                >
                    <Image
                        source={data.myProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View style={{
                        marginLeft: SIZES.radius
                    }}>
                        <Text style={{
                            ...FONTS.h3, color: COLORS.white,
                        }}>{data.myProfile?.name}</Text>
                        <Text style={{
                            color: COLORS.white
                        }}>View Your Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{
                flex: 1,
                marginTop: SIZES.radius
            }}>

                <CustomDrawerItem 
                label={constants.screens.home} 
                icon={icons.home}
                    isFocused={selectedTab == constants.screens.home}
                    onPress={() => {
                      dispatch(setSelectedTab(constants.screens.home))
                        navigation.navigate("MainLayout")
                    }}
                />


                <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet}
                  isFocused={selectedTab == constants.screens.my_wallet}
                  onPress={() => {
                    dispatch(setSelectedTab(constants.screens.my_wallet))
                      navigation.navigate("MainLayout")
                  }}
                />

                <CustomDrawerItem label={constants.screens.notification} icon={icons.notification}
                     isFocused={selectedTab == constants.screens.notification}
                     onPress={() => {
                        dispatch(setSelectedTab(constants.screens.notification))
                         navigation.navigate("MainLayout")
                     }}
                />

                <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite}
                    isFocused={selectedTab == constants.screens.favourite}
                    onPress={() => {
                        dispatch(setSelectedTab(constants.screens.favourite))
                        navigation.navigate("MainLayout")
                    }}
                />

                <View
                    style={{
                        height: 1,
                        marginVertical: SIZES.radius,
                        marginLeft: SIZES.radius,
                        backgroundColor: COLORS.lightGray2
                    }}
                />

                <CustomDrawerItem label={"Track Your Order"} icon={icons.location}

                />

                <CustomDrawerItem label={"Settings"} icon={icons.setting}

                />

                <CustomDrawerItem label={"Invate Friend"} icon={icons.profile}
                />
                <CustomDrawerItem label={"Help Center"} icon={icons.help}
                />

            </View>

            <View style={{
                marginBottom: SIZES.padding,

            }}>
                <CustomDrawerItem label={"Logout"} icon={icons.logout}
                onPress={() => handleLogout()}
                />
            </View>

        </DrawerContentScrollView>
    )
}



const CustomDrawer = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >

            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: "65%",
                    paddingRight: 20,
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"

                }}
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)

                    }, 0)
                    return (
                        <CustomDrawerContent navigation={props.navigation} />
                    )
                }}
            >

                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>
    )
}

export default CustomDrawer