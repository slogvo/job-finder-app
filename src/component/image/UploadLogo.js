import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import colors from '../../../assets/colors/colors';

const UploadLogo = ({ fileData, handleFileUpload }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 14, color: colors.text2, fontWeight: '700' }}>Tải ảnh lên</Text>
      <TouchableOpacity
        style={{
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          backgroundColor: colors.background,
          borderStyle: 'dashed',
          borderColor: '#ccc',
          padding: 5,
          borderRadius: 16,
          width: '100%',
        }}
        onPress={handleFileUpload}
      >
        <View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {!fileData?.uri ? (
              <Image
                source={require('../../../assets/images/form/image-gallery.png')}
                style={{ height: 100, width: 100, resizeMode: 'contain' }}
              />
            ) : (
              <Image
                source={{ uri: fileData?.uri }}
                style={{ height: 100, width: 100, resizeMode: 'contain' }}
              />
            )}
            <Text style={{ color: colors.text2 }}>{fileData?.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UploadLogo;
