import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

const ConfirmCVModal = ({
  jobID,
  phone,
  userInfo,
  isConfirmCVModal,
  handleToggleConfirmCVModal = () => {},
}) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Gửi CV thành công!',
      text2: 'Hồ sơ của bạn sẽ được xem xét!',
      topOffset: 0,
      visibilityTime: 2500,
    });
  };

  const handleApply = () => {
    firestore()
      .collection('recruitment')
      .add({
        username: userInfo?.username,
        email: userInfo?.email,
        file: userInfo?.file || '',
        userId: userInfo?.user_id,
        phoneNumber: phone,
        jobId: jobID,
        status: 0,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('Recruitment added!');
      })
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <Modal
        isVisible={isConfirmCVModal}
        animationIn="fadeInDown"
        animationInTiming={500}
        animationOut="pulse"
        animationOutTiming={500}
        style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <View
          style={{
            justifyContent: 'center',
            width: 310,
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 20,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="alert-circle" size={20} color={'#a9d3ab'}></Ionicons>
            <Text style={{ marginLeft: 5, color: '#1d351e', fontSize: 16, fontWeight: 'bold' }}>
              Gửi hồ sơ ứng tuyển!
            </Text>
          </View>
          <Text style={{ marginTop: 15, lineHeight: 22, color: '#2c422d' }}>
            Khi gửi hồ sơ cho nhà tuyển dụng, vui lòng điền đầy đủ thông tin cần thiết trong mục{' '}
            <Text style={{ fontWeight: 'bold' }}>Hồ sơ cá nhân</Text> để nhà tuyển dụng có thể nắm
            bắt tốt đa về bản thân bạn
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Pressable
              style={{ paddingHorizontal: 5, paddingVertical: 5 }}
              onPress={handleToggleConfirmCVModal}
            >
              <Text style={{ color: '#37833b', fontWeight: 'bold' }} o>
                Đóng thông báo!
              </Text>
            </Pressable>

            <Pressable
              style={{
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: '#ecf7ed',
              }}
              onPress={() => {
                handleToggleConfirmCVModal();
                handleApply();
                setTimeout(() => {
                  showToast();
                }, 500);
              }}
            >
              <Text style={{ color: '#37833b', fontWeight: 'bold' }} o>
                Tiếp tục và gửi
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ConfirmCVModal;

const styles = StyleSheet.create({});
