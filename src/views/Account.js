import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Account = () => {
  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState([]);

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>HƯỚNG DẪN VIẾT CV</Text>
        <Text>CV cơ bản cần có thông tin cá nhân, kỹ năng, học vấn và kinh nghiệm làm việc.</Text>
        <Text>Một số lỗi sai thường gặp:</Text>
        <Text>
          • Mục tiêu nghề nghiệp chung chung "tìm kiếm cơ hội", "thăng tiến", "phát triển bản thân".
        </Text>
        <Text>• Thiếu thông tin kỹ năng trong CV.</Text>
        <Text>• Kinh nghiệm làm việc hoặc hoạt động chưa có kết quả thể hiện bằng con số.</Text>
        <Text>• Kinh nghiệm làm việc chưa sắp xếp từ gần nhất đến xa nhất.</Text>

        <View style={styles.button}>
          <Button title="Chọn CV có sẵn" onPress={() => Alert.alert('Chọn từ database')} />
        </View>
        <View style={styles.button}>
          <Button title="Upload CV mới" onPress={() => selectOneFile()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#fff',
    padding: 8,
  },
  body: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: '#fff',
    margin: 10,
  },

  button: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
  },
});

export default Account;
