import React from 'react'
import { Dimensions, Image } from 'react-native'

const {width: screenWidth} = Dimensions.get("window");

const ImageBanner = ({src}) => {
  return (
    <Image source={src} 
    style={{
      width: screenWidth - 50 , 
      height:200, 
      marginRight: 50,
      borderRadius:8
      }} resizeMode="cover"/>
  )
}

export default ImageBanner