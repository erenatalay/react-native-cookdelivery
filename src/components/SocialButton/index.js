import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SocialButton = (props) => {
    return (
        <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: props.color }]} onPress={props.onPress}>
            <Icon name={props.socialName} size={24} color={Colors.white} style={{ position: 'absolute', top: 10, left: 6 }} />
            <Text style={styles.testStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        paddingTop: 12,
        paddingBottom: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 10
    },
    testStyle: {
        fontSize: 16,
        fontFamily: Fonts.primaryRegular,
        color: Colors.white
    }
})
export default SocialButton;
