import React from "react"
import { View, Text, TextInput } from "react-native"
import { COLORS, FONTS, SIZES, icons, data, images } from "../../constants";

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeHolder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoComplateType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{label}</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.red }}>{errorMsg}</Text>
            </View>

            <View style={{
                ...inputContainerStyle,
                flexDirection: "row",
                height: SIZES.height > 800 ? 55 : 45,
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.height > 800 ? SIZES.base : 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2

            }}>
                {prependComponent}
                <TextInput
                    value={value}
                    placeholder={placeHolder}
                    placeHolderTextColor={COLORS.gray}
                    style={{ ...inputStyle, flex: 1 }}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoComplete={autoComplateType}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}

                />
                {appendComponent}

            </View>
        </View>
    )
}

export default FormInput;