import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import LinearGradient from "react-native-linear-gradient"
import { COLORS, FONTS, SIZES, icons, data, constants, images } from "../../constants";
import IconButton from '../../components/IconButton';
import { utils } from "../../../utils/Validation"
import MapViewDirections from 'react-native-maps-directions';
const Map = ({ navigation }) => {
    const mapView = React.useRef();
    const [region, setRegion] = React.useState(null);
    const [toLoc, setToLoc] = React.useState(null);
    const [fromLoc, setFromLoc] = React.useState(null);
    const [angle, setAngle] = React.useState(0);
    const [isReady, setIsReady] = React.useState(false);
    const [duration, setDuration] = React.useState("");
    React.useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }
        setRegion(initialRegion)
        setToLoc(destination)
        setFromLoc(data.fromLocs[1])
    }, [])


    const handleLocation = () => {
        Geolocation.getCurrentPosition(info => setFromLoc(info))
    }

    const renderMap = () => {
        return (
            <MapView ref={mapView}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >

                {
                    fromLoc !== null &&
                    <Marker key={"FromLoc"}
                        coordinate={fromLoc}
                        tracksViewChanges={false}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}

                    >
                        <Image source={icons.navigator1} style={{ width: 30, height: 30 }} />

                    </Marker>
                }

                {
                    toLoc !== null &&
                    <Marker key={"ToLoc"}
                        coordinate={toLoc}
                        tracksViewChanges={false}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}
                    >
                        <Image source={icons.location_pin} style={{ width: 40, height: 40 }} />
                    </Marker>
                }

                <MapViewDirections
                    origin={fromLoc}
                    destination={toLoc}
                    apikey={constants.GOOGLE_MAP_API_KEY}
                    strokeWidth={5}
                    strokeColor={COLORS.primary}
                    optimizeWaypoints={true}
                    onReady={result => {
                        setDuration(Math.ceil(result.duration))

                        if (!isReady) {
                            // mapView.current.fitToCoordinates(result.coordinates,{
                            //     edgePadding : {
                            //         right : SIZES.right * 0.1,
                            //         bottom : 400,
                            //         left : SIZES.width *0.1,
                            //         top : SIZES.height *0.1
                            //     }
                            // })
                            if (result.coordinates.lenght >= 2) {
                                let angle = utils.calculateAngle(result.coordinates)
                                setAngle(angle)
                            }

                            setIsReady(true)


                        }


                    }}
                />

            </MapView>
        )
    }

    const renderHeaderButtons = () => {
        return (
            <>
                <IconButton icon={icons.back}
                    containerStyle={{
                        ...styles.buttonStyle,
                        position: "absolute",
                        top: SIZES.padding * 2,
                        left: SIZES.padding
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                    onPress={() => navigation.goBack()}
                />


                <View style={{
                    position: "absolute",
                    top: SIZES.padding * 2,
                    right: SIZES.padding,
                }}>
                    <IconButton
                        icon={icons.globe}
                        containerStyle={{
                            ...styles.buttonStyle
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                    <IconButton
                    onPress={() => handleLocation()}
                        icon={icons.focus}
                        containerStyle={{
                            ...styles.buttonStyle,
                            marginTop: SIZES.radius
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                </View>
            </>
        )
    }

    const renderInfo = () => {
        return (

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.lightGray
                    ]}
                    style={{
                        position :"absolute",
                        top : -20,
                        left: 0,
                        right : 0,
                        height : Platform.OS === "ios" ? 200 : 50
                    }}
                />
                <View style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: COLORS.white,
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",

                    }}>
                        <Image
                            source={icons.clock}
                            style={{ width: 40, height: 40, tintColor: COLORS.black }}
                        />

                        <View style={{
                            flex: 1,
                            marginLeft: SIZES.padding
                        }}>
                            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>Your delivery time</Text>
                            <Text style={{ ...FONTS.h3 }}>{duration} minutes</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: SIZES.padding
                    }}>
                        <Image source={icons.focus} style={{
                            width: 40,
                            height: 40,
                            tintColor: COLORS.black
                        }} />
                        <View style={{ marginLeft: SIZES.padding }}>
                            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>Your Address</Text>
                            <Text style={{ ...FONTS.h3 }}>88, Jln Padugan, Kuching</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{
                        flexDirection: "row",
                        height: 70,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: COLORS.primary

                    }}>
                        <Image
                            source={images.avatar_4}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 5
                            }}
                        />
                        <View style={{
                            flex: 1,
                            marginLeft: SIZES.radius
                        }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>John Carter</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Delivery Man</Text>
                        </View>

                        <View style={{
                            height: 40,
                            width: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            backgroundColor: COLORS.transparent
                        }}>
                            <Image source={icons.call} style={{
                                width: 30,
                                height: 30
                            }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {renderMap()}

            {renderHeaderButtons()}

            {renderInfo()}
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        width: 40,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.white
    }
})

export default Map;