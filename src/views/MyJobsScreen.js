import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import MyJob from '../layout/MyJob';

const MyJobsScreen = ({ navigation }) => {
  const [recruitmentDetail, setRecruitmentDetail] = useState();
  const [userId, setUserId] = useState('');
  auth().onAuthStateChanged((user) => {
    if (user) {
      setUserId(user.uid);
      console.log('user.uid: ', user.uid);
    } else setUserId('Unknown');
  });
  useEffect(() => {
    firestore()
      .collection('recruitment')
      .where('userId', '==', `${userId}`)
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
        console.log('recruitment: ', recruitment);
        setRecruitmentDetail(recruitment);
      });
  }, [userId]);

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
              Việc làm của tôi
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 30,
          }}
        >
          {recruitmentDetail?.length > 0 &&
            recruitmentDetail.map((item) => (
              <MyJob status={item?.status} key={item?.id} jobId={item?.jobId} />
            ))}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default MyJobsScreen;
