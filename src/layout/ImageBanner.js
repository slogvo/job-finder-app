import React from 'react';
import { Dimensions, Image, View } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const ImageBanner = ({ src }) => {
  return (
    <View>
      <Image
        source={{ uri: src }}
        style={{
          width: screenWidth - 50,
          height: 200,
          marginRight: 50,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />

      <Image
        source={require('../../assets/images/opacity.png')}
        style={{
          width: screenWidth - 50,
          height: 200,
          position: 'absolute',
          marginRight: 50,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageBanner;
