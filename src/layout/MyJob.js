import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

const MyJob = ({ status, jobId, isFavorite = false }) => {
  console.log('status: ', status);
  const [postDetail, setPostDetail] = useState('');
  useEffect(() => {
    firestore()
      .collection('posts')
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        const post = posts.filter((post) => post.id === jobId);
        setPostDetail(post[0]);
        console.log('post[0]: ', post[0]);
      });
  }, [jobId]);
  return (
    <View
      onPress={() => navigation.navigate('JobDetail')}
      style={{
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        height: 100,
        borderRadius: 16,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 2,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          elevation: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}
      >
        <Image
          source={{ uri: postDetail?.image }}
          style={{ width: 58, height: 58, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ height: '100%', width: '100%' }}>
        <Text
          style={{
            fontSize: 14,
            color: colors.text,
            marginBottom: 5,
            fontWeight: '700',
            width: 220,
          }}
          numberOfLines={1}
        >
          {postDetail?.title}
        </Text>
        <Text
          style={{
            marginTop: -4,
            fontWeight: '500',
            color: colors.text,
            width: 220,
            fontSize: 13,
          }}
          numberOfLines={1}
        >
          {postDetail?.name_company}
        </Text>
        <Text style={{ marginTop: 4, width: 230, fontSize: 13 }} numberOfLines={1}>
          {postDetail?.career}
        </Text>
        <View
          style={{
            marginTop: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/images/location.png')}
            style={{
              width: 18,
              height: 18,
              marginRight: 5,
            }}
          ></Image>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: '500',
              marginRight: 10,
              fontSize: 13,
            }}
          >
            {/* {companyAddressArr && companyAddressArr[companyAddressArr?.length - 1]} */}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: colors.secondary,
              fontWeight: '500',
              fontSize: 13,
            }}
          >
            {postDetail?.wage}
          </Text>
          <Text
            style={{
              color: colors.secondary,
              fontWeight: '500',
              fontSize: 13,
            }}
          >
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginLeft: 'auto' }}
        // onPress={() => toggleFavorite(id)}
      >
        <AntDesign
          name="heart"
          size={20}
          color={isFavorite === true ? colors.redColor : colors.border}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyJob;
