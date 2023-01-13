import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

const CandidateDetail = ({ route, navigation }) => {
  const { itemId, recruitmentId } = route.params;
  const [candidate, setCandidate] = useState('');
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Chấp nhận ứng tuyển!',
      text2: 'Công việc đã được gửi đến ứng cử viên!',
      topOffset: 65,
      visibilityTime: 2500,
    });
  };

  useEffect(() => {
    firestore()
      .collection('users')
      .where('id', '==', `${itemId}`)
      .onSnapshot((snapshot) => {
        let candidates = [];
        snapshot.forEach((doc) => {
          candidates.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCandidate(candidates[0]);
      });
  }, [itemId]);

  const handleApprove = () => {
    firestore()
      .collection('recruitment')
      .doc(`${recruitmentId}`)
      .update({
        status: 1,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('User updated!');
      });
  };

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
          width: '100%',
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
              Chi tiết ứng cử viên
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View style={{ marginTop: 25, paddingHorizontal: 25 }}>
          <Text>{candidate?.username}</Text>
          <Text>{candidate?.email}</Text>
          <Text>{candidate?.phoneNumber}</Text>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.secondary,
              width: '45%',
              paddingHorizontal: 15,
            }}
            onPress={() => {
              return navigation.navigate('PDFView', { pdfFile: candidate.file });
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Xem hồ sơ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
              width: '45%',
              paddingHorizontal: 15,
            }}
            onPress={() => {
              handleApprove();
              showToast();
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Duyệt</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default CandidateDetail;
