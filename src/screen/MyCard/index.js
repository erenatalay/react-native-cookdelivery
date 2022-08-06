import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES, icons, data } from "../../constants";
import CardItem from "../../components/CardItem";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
const MyCard = () => {
    const navigation = useNavigation();
    const [selectedCard, setSelectedCard] = React.useState(null)
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
                        }}>My Cards</Text>
                    </View>

                </View>
                <View style={{
                    width: 40
                }}>

                </View>


            </View>
        )
    }

    const renderAddNewCard = () => {
        return (
            <View 
                style={{
                    marginTop : SIZES.padding
                }}
            >
                <Text style={{...FONTS.h3}}>Add New Card</Text>

                {
                    data.allCards.map((item,index) => {
                        return (
                            <CardItem
                                key={`NewCard-${item.id}`}
                                item={item}
                                isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`}
                                onPress={() => setSelectedCard({...item,key:"NewCard"})}
                            />
                        )
                    })
                }
            </View>
        )
    }

    const renderMyCard = () => {
        return (
            <View>
                {
                    data.myCards.map((item, index) => {
                        return (
                            <CardItem
                                key={`MyCard-${item.id}`}
                                item={item}
                                isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                                onPress={() => setSelectedCard({ ...item, key: "MyCard" })}

                            />
                        )
                    })
                }
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingTop : SIZES.radius,
                    paddingHorizontal : SIZES.padding
                }}
            >
            <Button title={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"} onPress={() => {
                if(selectedCard?.key == "NewCard"){
                    navigation.push("AddCard",{selectedCard : selectedCard})

                }else{
                    navigation.push("Checkout",{selectedCard : selectedCard})

                }
            }} 
            disabled={selectedCard === null}
               btnStyle={{height : 60, backgroundColor : selectedCard === null ? "gray" : COLORS.primary}}
               
            
            />

            </View>

        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {/* header */}
            {renderHeader()}
            {/* cards */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* My Cards */}
                {renderMyCard()}

                {/* Add New Card */}
                {renderAddNewCard()}

            </ScrollView>

            {/* footer */}
            {renderFooter()}
        </SafeAreaView>
    )

}

export default MyCard;