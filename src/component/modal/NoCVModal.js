import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NoCVModal = ({ isNoCVModal, handleToggleNoCVModal = () => {} }) => {
  return (
    <View>
      <Modal
        isVisible={isNoCVModal}
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
            <Ionicons name="alert-circle" size={20} color={'#b4b4bb'}></Ionicons>
            <Text style={{ marginLeft: 5, color: '#19191d', fontSize: 16, fontWeight: 'bold' }}>
              Không tìm thấy hồ sơ!
            </Text>
          </View>
          <Text style={{ marginTop: 15, lineHeight: 22, color: '#19191d' }}>
            Bạn cần tải lên ít nhất một hồ sơ để nhà tuyển dụng có thể xét duyệt!
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}></View>

            <Pressable
              style={{
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: '#ededf0',
              }}
              onPress={handleToggleNoCVModal}
            >
              <Text style={{ color: '#4e4f5b', fontWeight: 'bold' }} o>
                Đã hiểu, đóng!
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoCVModal;
