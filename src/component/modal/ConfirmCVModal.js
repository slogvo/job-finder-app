import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ConfirmCVModal = ({ isConfirmCVModal, handleToggleConfirmCVModal = () => {} }) => {
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
            <Ionicons name="alert-circle" size={20} color={'#faa9a3'}></Ionicons>
            <Text style={{ marginLeft: 5, color: '#4d1f1b', fontSize: 16, fontWeight: 'bold' }}>
              Lưu ý!
            </Text>
          </View>
          <Text style={{ marginTop: 15, lineHeight: 21, color: '#6B5250' }}>
            Để gửi hồ sơ cho nhà tuyển dụng, vui lòng điền đầy đủ thông tin trong mục hồ sơ cá nhân
            nếu chưa thực hiện!
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
              <Text style={{ color: '#ce4b43', fontWeight: 'bold' }} o>
                Đóng thông báo!
              </Text>
            </Pressable>

            <Pressable
              style={{
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: '#fee8e7',
              }}
              onPress={() => {
                console.log('Hello');
              }}
            >
              <Text style={{ color: '#ce4b43', fontWeight: 'bold' }} o>
                Đã có, gửi ngay!
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
