import React from 'react';
import { Image } from 'react-native';
import LogoImage from '../../assets/images/logo.png';

const Logo=()=>{
    return <Image source={LogoImage} style={{height:100, width:200, resizeMode:"contain", alignSelf:'center'}}/>
}

export default Logo;