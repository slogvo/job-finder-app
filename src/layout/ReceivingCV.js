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
        console.log('recruitmentDetail: ', recruitment);
        setRecruitmentDetail(recruitment);
      });
  }, [id]);

  return (
    <View
      style={{
        width: '100%',
        height: 195,
        borderRadius: 16,
        backgroundColor: '#fff',
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
          <View style={{}}>
            <Text
              numberOfLines={1}
              style={{
                width: 240,
                fontSize: 15,
                color: colors.text,
                marginBottom: 3,
                fontFamily: 'SanFranciscoDisplay-Bold',
              }}
            >
              {companyName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'SanFranciscoDisplay-Medium',
              }}
            >
              {companyAddressArr[companyAddressArr.length - 1]}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: colors.secondary,
                fontWeight: '500',
              }}
            >
              {wage}
            </Text>
          </View>
        </View>
        {/* <AntDesign name="heart" size={20} color={colors.redColor} /> */}
      </View>
      <Text
        numberOfLines={1}
        style={{
          marginTop: 10,
          fontSize: 16,
          color: colors.text,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
      <Text style={{ marginTop: 4 }} numberOfLines={1}>
        Lĩnh vực: {career}
      </Text>
      <View style={{ flexDirection: 'column', marginTop: 'auto' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        ></View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.darkGray,
              fontWeight: '700',
            }}
          >
            Ứng tuyển: {recruitmentDetail ? recruitmentDetail.length : '0'}
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: 'auto',
              width: '30%',
              height: 40,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
              marginRight: 8,
            }}
            onPress={() => {
              navigation.navigate('ReceivingDetailScreen', { itemId: recruitmentDetail });
            }}
          >
            <Text style={{ color: '#fff' }}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReceivingCV;
