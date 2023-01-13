import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import firebaseSetup from '../firebase/firebase-config';

const Explore = () => {
  const [fileData, setFileData] = useState([]);
  //We can choose all types of files here
  const { database, storage } = firebaseSetup();
  const handleFileUpload = async (props) => {
    //Pick a single file
    try {
      const res = await DocumentPicker.pick({
        // presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.allFiles],
      });
      const file = res[0];
      const path = await normalizePath(file?.uri);
      console.log('path: ', path);
      setFileData(file);
      const result = await RNFetchBlob.fs.readFile(path, 'base64');
      uploadFileToFirebaseStorage(result, file);
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

  async function uploadFileToFirebaseStorage(result, file) {
    const uploadTask = storage()
      .ref(`allFiles/${file.name}`)
      .putString(result, 'base64', { contentType: file.type });
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log('Error: ', error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          saveFileToRealtimeDatabase(downloadURL, file);
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  function saveFileToRealtimeDatabase(downloadURL, file) {
    const uniqueKey = database().ref().push().key;
    database()
      .ref(`allFiles/${uniqueKey}`)
      .update({ fileName: file.name, fileType: file.type, fileURL: downloadURL });
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
