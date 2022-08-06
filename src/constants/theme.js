import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray
    red: "red",   // gray
    green: "green",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray1: "#DDDDDD",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 ,color : "#1E1F20"},
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 , color : "#1E1F20"},
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22, color : "#1E1F20" },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22, color : "#1E1F20" },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 ,color : "#1E1F20"},
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 ,color : "#1E1F20" },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 , color : "#1E1F20"},
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 ,color : "white"},
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 , color : "#1E1F20"},


};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;