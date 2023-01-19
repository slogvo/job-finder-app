import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

const CandidateDetail = ({ route, navigation }) => {
  const { itemId, recruitmentId, userInfo } = route.params;
  console.log('recruitmentId: ', recruitmentId);
  console.log('itemId: ', itemId);
  const [recruitmentDetail, setRecruitmentDetail] = useState();
  console.log('userInfo: ', userInfo);
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
      .collection('recruitment')
      .onSnapshot((snapshot) => {
        let recruitment = [];
        snapshot.forEach((doc) => {
          const { status, jobId } = doc.data();
          recruitment.push({
            id: doc.id,
            jobId,
            status,
          });
        });
        let recruitmentClone = recruitment.find((item) => item.id === recruitmentId);
        setRecruitmentDetail(recruitmentClone);
      });
  }, [userInfo]);

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
        <View style={{ marginTop: 10, height: 240, position: 'relative', paddingHorizontal: 10 }}>
          <ImageBackground
            source={require('../../assets/images/bg-candidate.png')}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: 16,
              marginRight: 15,
            }}
          >
            <View
              style={{
                paddingHorizontal: 25,
                paddingTop: 15,
              }}
            >
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 50,
                  }}
                >
                  <Ionicons name="ios-arrow-back-sharp" size={23} color={colors.primary} />
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View
            style={{
              position: 'absolute',
              left: '50%',
              zIndex: 3,
              width: 100,
              height: 100,
              bottom: 0,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.background,
              transform: [{ translateX: -50 }],
            }}
          >
            <Image
              source={{
                uri: userInfo?.avatar,
              }}
              resizeMode="cover"
              style={{
                width: 90,
                height: 90,
                borderRadius: 100,
              }}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 25, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: colors.text }}>
            {userInfo?.username}
          </Text>
          <Text style={{ marginTop: 3, fontSize: 15, color: '#7f879d' }}>{userInfo?.job}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{userInfo?.experience}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 25,
          }}
        >
          <TouchableOpacity
            style={{
              height: 45,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              width: '46%',
              paddingHorizontal: 15,
              backgroundColor: colors.primary,
            }}
            onPress={() => {
              return navigation.navigate('PDFView', { pdfFile: userInfo?.file });
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Xem hồ sơ</Text>
          </TouchableOpacity>

          {recruitmentDetail?.status === 0 ? (
            <TouchableOpacity
              style={{
                height: 45,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.border,

                width: '46%',
                paddingHorizontal: 15,
              }}
              onPress={() => {
                handleApprove();
                showToast();
              }}
            >
              <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Duyệt</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                height: 45,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.secondary,
                width: '46%',
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Đã duyệt</Text>
            </View>
          )}
        </View>
        <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
          <Text
            style={{
              color: colors.text,
              fontWeight: '500',
              fontSize: 16,
            }}
          >
            Tổng quan
          </Text>

          {/* Ngày sinh */}
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 25,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Image
                source={require('../../assets/images/accountImage/date.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                  marginLeft: 10,
                }}
              >
                Ngày sinh:
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: colors.text2,
                  fontWeight: '400',
                }}
              >
                {userInfo?.dateOfBirth}
              </Text>
            </View>
          </View>
          {/* Giới tính */}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
            }}
          >
            <Image
              source={require('../../assets/images/accountImage/female.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.text,
                marginLeft: 10,
                fontWeight: '500',
              }}
            >
              Giới tính:
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: colors.text2,
                fontWeight: '400',
              }}
            >
              {userInfo?.gender}
            </Text>
          </View>
          {/* Vị trí hiện tại */}
          <View
            style={{
              marginTop: 20,
              alignItems: 'stretch',
              flexDirection: 'row',
            }}
          >
            <Image
              source={require('../../assets/images/accountImage/office-chair.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 10,
                color: colors.text,
                fontWeight: '500',
              }}
            >
              Vị trí:
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: colors.text2,
                fontWeight: '400',
                width: 250,
              }}
            >
              {userInfo?.job_position}
            </Text>
          </View>
          {/* Kinh nghiệm */}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
              width: '100%',
            }}
          >
            <Image
              source={require('../../assets/images/accountImage/rating.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.text,
                fontWeight: '500',
                marginLeft: 10,
              }}
            >
              Kinh nghiệm làm việc:
            </Text>
            <Text
              style={{
                marginLeft: 30,
                fontSize: 14,
                lineHeight: 22,
                color: colors.text2,
                fontWeight: '400',
              }}
            >
              {userInfo?.experience || 'Chưa cập nhật'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default CandidateDetail;
