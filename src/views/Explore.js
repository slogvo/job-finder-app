import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

const Explore = () => {
  const [fileData, setFileData] = useState([]);
  //We can choose all types of files here
  const handleFileUpload = async (props) => {
    //Pick a single file
    try {
      const res = await DocumentPicker.pick({
        // presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.allFiles],
      });
      const file = res[0];
      const path = await normalizePath(file?.uri);
      console.log('result: ', path);
      setFileData(file);
      const result = await RNFetchBlob.fs.readFile(path, 'base64');
      console.log('path: ', result);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  //We have to remove filePrefix from path url (if have)
  function normalizePath(path) {
    if (Platform.OS === 'ios') {
      filename = path.replace('file:', '');
    } else {
      filename = path;
    }
    return filename;
  }
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: '#fff',
          position: 'relative',
        }}
        stickyHeaderIndices={[0]}
      >
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#fff',
            elevation: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
              paddingTop: 15,
              width: '100%',
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="ios-arrow-back-sharp" size={28} color={colors.darkGray} />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: 'bold',
              }}
            >
              Khám phá
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          <View>
            <Image source={{ uri: fileData?.uri }} style={{ height: 100, width: 100 }} />
            <Text>{fileData?.name}</Text>
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#c72de3',
            }}
            onPress={handleFileUpload}
          >
            <Text style={{ fontSize: 16, color: '#fff' }}>Open</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default Explore;
