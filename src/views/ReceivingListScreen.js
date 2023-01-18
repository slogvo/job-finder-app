import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ReceivingCV from '../layout/ReceivingCV';

const ReceivingListScreen = ({ navigation }) => {
  const [userUid, setUserUid] = useState('');
  const [posts, setPosts] = useState('');
  auth().onAuthStateChanged((user) => {
    if (user) {
      setUserUid(user.uid);
    } else setUserUid('Unknown');
  });

  useEffect(() => {
    firestore()
      .collection('posts')
      .where('user_id', '==', `${userUid}`)
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(posts);
      });
  }, [userUid]);

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
              Quản lý bài đăng tuyển dụng
            </Text>
            <Text style={{ width: 20 }}></Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 25,
          }}
        >
          {posts.length > 0 ? (
            <Text style={{ fontSize: 18, color: colors.text, fontWeight: '700', marginBottom: 15 }}>
              Các bài tuyển dụng
            </Text>
          ) : (
            <Text
              style={{ fontSize: 14, color: colors.secondary, fontWeight: '400', marginBottom: 15 }}
            >
              Bạn chưa có bài đăng nào gần đây
            </Text>
          )}
          {posts.length > 0 &&
            posts.map((post) => (
              <View key={post.id} style={{ marginBottom: 25 }}>
                <ReceivingCV
                  companyLogo={post.image}
                  companyName={post.name_company}
                  companyAddress={post.address}
                  wage={post.wage}
                  career={post.career}
                  title={post.title}
                  navigation={navigation}
                  id={post.id}
                />
              </View>
            ))}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default ReceivingListScreen;
