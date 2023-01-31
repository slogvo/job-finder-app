import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

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
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    firestore()
      .collection('users')
      .where('user_id', '==', `${userId}`)
      .onSnapshot((snapshot) => {
        let user = [];
        snapshot.forEach((doc) => {
          user.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUserInfo(user[0]);
      });
  }, [userId]);
  return (
    <View
      style={{
        width: '100%',
        height: 120,
        borderRadius: 16,
        padding: 15,
        backgroundColor: colors.background,
        elevation: 1,
        marginTop: 25,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{
              uri: userInfo?.avatar,
            }}
            resizeMode="cover"
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              marginRight: 15,
            }}
          />
          <View>
            {/* Tên */}
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                color: colors.text,
                fontWeight: '700',
              }}
            >
              {username}
            </Text>
            {/* Nghề */}
            <Text style={{ fontSize: 13, marginTop: 3, fontWeight: '600', color: colors.primary }}>
              {userInfo?.job}
            </Text>
            {/* Email + SDT */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <MaterialIcons name="email" size={15} color={'#7f879d'} />
              <Text style={{ marginLeft: 5, fontSize: 13, color: '#7f879d' }}>{email}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <FontAwesome name="phone" size={15} color={'#7f879d'} />
              <Text style={{ marginLeft: 5, fontSize: 13, color: '#7f879d' }}>
                {phoneNumber || userInfo?.phoneNumber}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 38,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: colors.redColor,
            }}
          >
            <FontAwesome name="trash-o" size={20} color={colors.redColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 'auto',
              width: 60,
              height: 38,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
            }}
            onPress={() => {
              navigation.navigate('CandidateDetail', {
                itemId: userId,
                recruitmentId: id,
                userInfo: userInfo,
              });
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
