import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
const windowWidth = Dimensions.get('window').width;

const JobDetail = ({ route, navigation }) => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const { itemId } = route.params;
  const [job, setJob] = useState();

  useEffect(() => {
    firestore()
      .collection('posts')
      .doc(itemId)
      .onSnapshot((snapshot) => {
        setJob(snapshot.data());
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        width: windowWidth,
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
          width: windowWidth,
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
              Chi tiết công việc
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View style={{ marginTop: 25, paddingHorizontal: 25 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                elevation: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
              }}
            >
              <Image
                source={{ uri: job?.image }}
                style={{ width: 75, height: 75, resizeMode: 'contain' }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 18,
                  width: windowWidth - 150,
                  fontWeight: '600',
                }}
              >
                {job?.title}
              </Text>
              <Text
                style={{
                  color: colors.text,
                  marginTop: 4,
                  width: windowWidth - 150,
                  fontSize: 14,
                }}
              >
                {job?.career}
              </Text>
            </View>
          </View>
          <Text style={{ marginTop: 10, fontSize: 15, color: colors.text, fontWeight: '700' }}>
            Công ty:<Text style={{ fontWeight: '500', lineHeight: 25 }}> {job?.name_company}</Text>
          </Text>
          {/* Star Wage Type-job */}
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: '700',
                color: colors.text,
              }}
            >
              Vote: <Text>0</Text> <AntDesign name="star" size={18} color={colors.yellowStar} />
            </Text>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: colors.lightGray,
              }}
            />
            <Text
              style={{
                color: colors.text,
                marginTop: 5,
                fontSize: 15,
                fontWeight: '700',
                color: colors.secondary,
              }}
            >
              {job?.wage}
            </Text>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: colors.lightGray,
              }}
            />
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 5,
                height: 40,
                backgroundColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#fff',
                }}
              >
                {job?.type_job === 'fruqq8kDn2IEb4cV7hcb' ? 'Part-time' : 'Full-time'}
              </Text>
            </View>
          </View>
          {/* Button */}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                width: '65%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                borderRadius: 8,
                backgroundColor: colors.primary,
                height: 50,
              }}
              onPress={() => {
                navigation.navigate('Recruitment', { itemId: itemId });
              }}
            >
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: 'white',
                }}
              >
                Ứng tuyển
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                borderRadius: 8,
                height: 50,
                backgroundColor: colors.lightGray,
                flexDirection: 'row',
              }}
            >
              <AntDesign name="heart" size={18} color={colors.text} />
              <Text
                style={{
                  fontWeight: '500',
                  marginLeft: 10,
                  fontSize: 16,
                  color: colors.text,
                }}
              >
                Lưu
              </Text>
            </TouchableOpacity>
          </View>
          {/* Detail */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>
              Mô tả công việc:
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '500', lineHeight: 25 }}>
              {job?.description.replace(' -', '\n-').replace(' - ', '\n- ')}
            </Text>
          </View>

          <Text style={{ marginTop: 20, fontSize: 16, color: colors.text, fontWeight: '700' }}>
            Yêu cầu công việc:
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '500', lineHeight: 25 }}>
            {job?.requirement.replace(' -', '\n-')}
          </Text>

          <Text style={{ marginTop: 20, fontSize: 16, color: colors.text, fontWeight: '700' }}>
            Địa chỉ công ty:
          </Text>
          <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/location.png')}
              style={{
                width: 18,
                height: 18,
                marginRight: 5,
              }}
            ></Image>
            <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 25 }}>{job?.address}</Text>
          </View>
          {/* Vote */}
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <View style={styles.customRatingBarStyle}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => setDefaultRating(item)}
                  >
                    {item <= defaultRating ? (
                      <AntDesign name="star" size={35} color={colors.yellowStar} />
                    ) : (
                      <AntDesign name="staro" size={35} color={colors.yellowStar} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: colors.text,
                fontWeight: '700',
                marginTop: 20,
              }}
            >
              Đánh giá công việc này
            </Text>
          </View>
          {/* Comment */}
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
  },
  customRatingBarStyle: {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
export default JobDetail;
