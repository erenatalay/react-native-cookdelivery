import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CardItem from '../../components/CardItem';
import { COLORS, FONTS, SIZES, icons, data, images } from "../../constants";


const Checkout = ({navigation, route}) => {
    const [selectedCard, setSelectedCard] = React.useState(null);
    React.useEffect(() => {
        let {selectedCard} = route.params
        setSelectedCard(selectedCard)
    },[])

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
        return(
            <View>
                {selectedCard && data.myCards.map((item,index) => {
                    return(
                        <CardItem key={`MyCard-${item.id}`}
                        item={item}
                        isSelected={`${selectedCard?.key}-${selectedCard.id}` == `MyCard-${item.id}`}
                        onPress={() => setSelectedCard({...item,key : "MyCard"})}
                        />
                    )
                })}
            </View>
        )
    }
    return (
        <View style={{flex : 1,backgroundColor : COLORS.white}}>
            {renderHeader()}

            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={200}
                contentContainerStyle={{
                    flexGrow : 1,
                    paddingHorizontal : SIZES.padding,
                    paddingBottom : 20
                }}
            >
                {renderMyCards()}
            </KeyboardAwareScrollView>
        </View>
    )
}

export default Checkout