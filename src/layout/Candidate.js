import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Candidate = ({
  id,
  userId,
  username,
  email,
  jobId,
  phoneNumber,
  file,
  status,
  navigation,
  ...props
}) => {
  const usernameArr = username?.split(' ');
  // useEffect(() => {
  //   firestore()
  //     .collection('recruitment')
  //     .where('jobId', '==', `${id}`)
  //     .onSnapshot((snapshot) => {
  //       let recruitment = [];
  //       snapshot.forEach((doc) => {
  //         recruitment.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       console.log('recruitmentDetail: ', recruitment);
  //       setRecruitmentDetail(recruitment);
  //     });
  // }, [id]);

  return (
    <View
      style={{
        width: '100%',
        height: 146,
        borderRadius: 16,
        backgroundColor: '#fff',
        padding: 15,
        elevation: 2,
        marginRight: 30,
        marginTop: 25,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', width: 200 }}>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              backgroundColor: '#7896FF',
              elevation: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 15,
            }}
          >
            <Text style={{ fontSize: 26, color: '#fff', fontWeight: '900' }}>
              {username && usernameArr[usernameArr?.length - 1][0]}
            </Text>
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={{
                width: 240,
                fontSize: 16,
                color: colors.text,
                fontWeight: '700',
              }}
            >
              {username}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <MaterialIcons name="email" size={15} />
              <Text style={{ marginLeft: 5 }}>{email}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <FontAwesome name="phone" size={15} />
              <Text style={{ marginLeft: 5 }}>{phoneNumber}</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={{ marginTop: 4 }} numberOfLines={1}></Text>
      <View style={{ flexDirection: 'column', marginTop: 'auto' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        ></View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {status === 1 ? (
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#bfffda',
                borderRadius: 4,
              }}
            >
              <Text style={{ fontWeight: '500', color: '#0DDE65' }}>Đã duyệt</Text>
            </View>
          ) : (
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#fae3c9',
                borderRadius: 4,
              }}
            >
              <Text style={{ fontWeight: '500', color: '#ED8E29' }}>Chưa duyệt</Text>
            </View>
          )}

          <TouchableOpacity
            style={{
              marginLeft: 'auto',
              width: '30%',
              height: 40,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.secondary,
              marginRight: 8,
            }}
            onPress={() => {
              navigation.navigate('CandidateDetail', { itemId: userId, recruitmentId: id });
            }}
          >
            <Text style={{ color: '#fff' }}>Xem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Candidate;
