import React from 'react'
import { BackHandler, Image, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES, icons, data, images } from "../../constants";
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Success = () => {
    const navigation = useNavigation();

    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            return true;
        })

        return () => backHandler.remove();
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: SIZES.padding }}>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image
                    source={images.success}
                    style={{ height: 150, width: 150 }}
                />

                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>Congratulations</Text>
                <Text style={{ ...FONTS.h3, textAlign: "center", marginTop: SIZES.base, color: COLORS.darkgray }}>Payment was successfully made.</Text>
            </View>

            <Button
                buttonStyle={{ backgroundColor: COLORS.primary }}
                title="Done"
                onPress={() => navigation.push("DeliveryStatus")}
            ></Button>
        </View>
    )
}

export default Success