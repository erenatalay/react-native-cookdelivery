import React from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import { COLORS, FONTS, SIZES, icons, data, images } from "../../constants";
import FormInput from "../../components/FormInput"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import utils from '../../../utils/Validation';
import FormInputCheck from '../../components/FormInputCheck';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/Button';

const AddCard = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardNumberError, setCardNumberError] = React.useState("")
    const [cardName, setCardName] = React.useState("")
    const [cardNameError, setCardNameError] = React.useState("")
    const [expiryDate, setExpiryDate] = React.useState("")
    const [expiryDateError, setExpiryDateError] = React.useState("")
    const [cardCvv, setCardCvv] = React.useState("")
    const [cardCvvError, setCardCvvError] = React.useState("")
    const [isRemember, setIsRemember] = React.useState("")


    React.useEffect(() => {
        let { selectedCard } = route.params;

        setSelectedCard(selectedCard)
    }, [])

    const isEnableAddCard = () => {
        return cardNumber != "" && cardName != "" && expiryDate != "" && cardCvv != "" &&
            cardNumberError == "" && cardNameError == "" && expiryDateError == "" && cardCvvError == ""
    }

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
                        }}>Add Cart</Text>
                    </View>

                </View>
                <View style={{
                    width: 40
                }}>

                </View>


            </View>
        )
    }

    const renderForm = () => {
        return (
            <View style={{
                marginTop: SIZES.padding * 2
            }}>
                <FormInput
                    label="Card Number"
                    maxLength={19}
                    keyboardType="numeric"
                    value={cardNumber}
                    onChange={(value) => {
                        setCardNumber(value.replace(/[^0-9]/g, '').replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    errorMsg={cardNumberError}
                    appendComponent={<FormInputCheck value={cardNumber} error={cardNumberError} />}
                />

                <FormInput
                    label="Cardholder Name"
                    containerStyle={{ marginTop: SIZES.radius }}
                    value={cardName}
                    onChange={(value) => {
                        setCardName(value)
                        utils.validateInput(value, 1, setCardNameError)
                    }}
                    errorMsg={setCardNameError}
                    appendComponent={<FormInputCheck value={cardName} error={cardNameError} />}
                />

                <View style={{
                    flexDirection: "row",
                    marginTop: SIZES.radius
                }}>
                    <FormInput
                        label="Expiry Date"
                        maxLength={5}
                        placeHolder="MM/YY"
                        containerStyle={{ flex: 1 }}

                        value={expiryDate}
                        onChange={(value) => {
                            setExpiryDate(value.replace(/[^0-9]/g, ''))
                            utils.validateInput(value, 5, setExpiryDateError)
                        }}
                        errorMsg={setExpiryDateError}
                        appendComponent={<FormInputCheck value={expiryDate} error={expiryDateError} />}
                    />

                    <FormInput
                        label="CVV"
                        maxLength={3}
                        placeHolder="***"
                        containerStyle={{ flex: 1, marginLeft: SIZES.radius }}
                        value={cardCvv}
                        onChange={(value) => {
                            setCardCvv(value.replace(/[^0-9]/g, ''))
                            utils.validateInput(value, 3, setCardCvvError)
                        }}
                        errorMsg={setExpiryDateError}
                        appendComponent={<FormInputCheck value={cardCvv} error={cardCvvError} />}
                    />
                </View>

                <View style={{ alignItems: "flex-start", marginTop: SIZES.padding }}>
                    <RadioButton
                        label="Remember this card details"
                        isSelected={isRemember}
                        onPress={() => setIsRemember(!isRemember)}
                    />
                </View>
            </View>
        )
    }

    const renderCard = () => {
        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    width: "100%",
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: "hidden"
                }}
            >
                <Image source={selectedCard?.icon}
                    resizeMode="contain"
                    tintColor="white"
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        height: 40,
                        width: 80
                    }}
                />

                <View style={{
                    position: "absolute",
                    bottom: 30,
                    left: 0,
                    right: 0,
                    paddingHorizontal: SIZES.padding
                }}>

                    <Text style={{ ...FONTS.h3, color: "white" }}>
                        {cardNumber === "" ? "1234 1234 1234 1234" : cardNumber}
                    </Text>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ ...FONTS.body3, flex: 1, color: COLORS.white, }}>{cardName === "" ? "John Smith" : cardName}</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.white, }}>{expiryDate === "" ? "000" : expiryDate}</Text>
                    </View>

                </View>

            </ImageBackground>
        )
    }

    const renderFooter = () => {
        return (
            <View style={{
                padding: 5
            }}>
                <Button
                    buttonStyle={{ backgroundColor: isEnableAddCard() ?  COLORS.primary: "gray"  }}
                    disabled={!isEnableAddCard()}
                    title="Add Cart"
                    onPress={() => navigation.goBack()}></Button>
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {renderHeader()}

            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {renderCard()}

                {renderForm()}

            </KeyboardAwareScrollView>

            {renderFooter()}
        </View>
    )
}

export default AddCard