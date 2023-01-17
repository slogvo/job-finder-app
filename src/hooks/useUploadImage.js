import { useState } from 'react';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import firebaseSetup from '../firebase/firebase-config';

export default function useUploadImage() {
  const [fileData, setFileData] = useState([]);
  const [url, setUrl] = useState('');
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
          setUrl(downloadURL);
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
  return { fileData, setFileData, handleFileUpload, url };
}
