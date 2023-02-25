import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import colors from '../../../assets/colors/colors';

const UploadLogo = ({ fileData, handleFileUpload }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderStyle: 'dashed',
        borderColor: '#ccc',
        padding: 5,
        borderRadius: 16,
        width: 100,
        height: 100,
      }}
      onPress={handleFileUpload}
    >
      <View>
        {!fileData?.uri ? (
          <Image
            source={require('../../../assets/images/form/image-gallery.png')}
            style={{ height: 80, width: 80, resizeMode: 'contain' }}
          />
        ) : (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={{ uri: fileData?.uri }}
              style={{ height: 80, width: 80, resizeMode: 'cover' }}
            />
            {/* <Text style={{ color: colors.text2, fontSize: 12 }}>{fileData?.name}</Text> */}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default UploadLogo;
