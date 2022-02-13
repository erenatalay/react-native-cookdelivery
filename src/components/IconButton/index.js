import React from "react";
import {TouchableOpacity,Image} from "react-native"
import { COLORS } from "../../constants";

const IconButton = ({containerStyle,icon,iconStyle,onPress}) => {
    return(
        <TouchableOpacity 
        style={{...containerStyle}}
        onPress={onPress}

        >
            <Image source={icon} 
                style={{
                    ...iconStyle,
                    width : 30,
                    height : 30,
                   
                }}
            />
        </TouchableOpacity>
    )
}

export default IconButton;
