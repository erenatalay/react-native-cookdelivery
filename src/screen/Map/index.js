import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform
} from 'react-native';

import MapView,{PROVIDER_GOOGLE,Marker} from "react-native-maps"
import LinearGradient from "react-native-linear-gradient"
import { COLORS, FONTS, SIZES, icons, data, constants } from "../../constants";
import TextIconButton from '../../components/TextIconButton';
import {utils} from "../../../utils/Validation"
import MapViewDirections from 'react-native-maps-directions';
const Map = ({ navigation }) => {
    const mapView = React.useRef();
    const [region,setRegion] = React.useState(null);
    const [toLoc,setToLoc] = React.useState(null);
    const [fromLoc,setFromLoc] = React.useState(null);
    const [angle,setAngle] = React.useState(0);
    const [isReady,setIsReady] = React.useState(false);
    const [duration,setDuration] = React.useState("");
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

    const renderMap = () => {
        return(
            <MapView ref={mapView} 
                style={{flex :1}}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >

                {
                    fromLoc &&
                    <Marker key={"FromLoc"}
                     coordinate={fromLoc}
                     tracksViewChanges={false}
                     rotation={angle}
                     anchor={{x : 0.5,y:0.5}}
                     >
                        <Image source={icons.navigator1} style={{ width: 30, height: 30 }} />

                     </Marker>
                }

                {
                    toLoc && 
                    <Marker key={"ToLoc"}
                    coordinate={toLoc}
                    tracksViewChanges={false}
                    rotation={angle}
                    anchor={{x : 0.5,y:0.5}}
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

                        if(!isReady){
                            // mapView.current.fitToCoordinates(result.coordinates,{
                            //     edgePadding : {
                            //         right : SIZES.right * 0.1,
                            //         bottom : 400,
                            //         left : SIZES.width *0.1,
                            //         top : SIZES.height *0.1
                            //     }
                            // })
                            if(result.coordinates.lenght >=2){
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

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {renderMap()}
        </View>
    )
}

export default Map;