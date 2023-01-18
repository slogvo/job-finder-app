import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';

const ReceivingCV = ({
  companyLogo,
  companyName,
  companyAddress,
  wage,
  title,
  career,
  navigation,
  id,
  ...props
}) => {
  const companyAddressArr = companyAddress?.split(',');
  const [recruitmentDetail, setRecruitmentDetail] = useState();

  useEffect(() => {
    firestore()
      .collection('recruitment')
      .where('jobId', '==', `${id}`)
      .onSnapshot((snapshot) => {
        let recruitment = [];
        snapshot.forEach((doc) => {
          recruitment.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setRecruitmentDetail(recruitment);
      });
  }, [id]);

  return (
    <View
      style={{
        width: '100%',
        height: 145,
        borderRadius: 16,
        backgroundColor: colors.background,
        padding: 15,
        elevation: 2,
        marginRight: 30,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', width: 200 }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
              elevation: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: companyLogo }}
              style={{ width: 58, height: 58, resizeMode: 'contain' }}
            />
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={{
                width: 150,
                fontSize: 15,
                color: colors.text,
                marginBottom: 3,
                fontWeight: '500',
              }}
            >
              {companyName}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/icons/location.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'SanFranciscoDisplay-Medium',
                }}
              >
                {companyAddressArr[companyAddressArr.length - 1]}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{
                marginTop: 5,
                width: 240,
                fontSize: 14,
                color: colors.secondary,
                fontWeight: '500',
              }}
            >
              {title}
            </Text>
          </View>
        </View>
        {/* <AntDesign name="heart" size={20} color={colors.redColor} /> */}
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
          }}
          onPress={() => {
            navigation.navigate('ReceivingDetailScreen', {
              recruitmentDetail: recruitmentDetail,
            });
          }}
        >
          <Text style={{ color: '#fff' }}>Chi tiết</Text>
        </TouchableOpacity>
      </View>
      <Text
        numberOfLines={1}
        style={{
          marginTop: 5,
          fontSize: 14,
          color: colors.text,
          fontWeight: '500',
        }}
      >
        {career}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'flex-start',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: colors.darkGray,
            fontWeight: '500',
            marginRight: 15,
          }}
        >
          Ứng tuyển: {recruitmentDetail ? recruitmentDetail.length : '0'}
        </Text>
        <Text style={{ color: colors.redColor, fontWeight: '500' }} numberOfLines={1}>
          {wage}
        </Text>
      </View>
    </View>
  );
};

export default ReceivingCV;
