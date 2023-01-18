import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CardBookmark from '../layout/CardBookmark';
// import ItemBox from './src/components/ItemBox';

const Bookmark = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [userAuth, setUserAuth] = useState('');

  auth().onAuthStateChanged((user) => {
    if (user) {
      setUserAuth(user);
    } else setUserAuth('Unknown');
  });

  //Get userInfo
  useEffect(() => {
    firestore()
      .collection('users')
      .where('user_id', '==', `${userAuth.uid}`)
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
  }, [userAuth]);

  //Get favorites
  useEffect(() => {
    firestore()
      .collection('users')
      .where('user_id', '==', `${userAuth.uid}`)
      .onSnapshot((snapshot) => {
        let user = [];
        snapshot.forEach((doc) => {
          user.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        let isFavoriteArr = [];
        isFavoriteArr = user[0]?.favorites.filter((item) => item.isFavorite === true);
        console.log(' isFavorite: ', isFavoriteArr);
        setFavorites(isFavoriteArr);
      });
  }, [userAuth]);

  //Get posts
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
        setPosts(posts);
      });
  }, [favorites]);

  const favoritesClone = userInfo?.favorites || [];

  const deleteItem = (index) => {
    let favoritesUpdate = favoritesClone.map((favorite) => {
      if (favorite.id === index)
        return {
          ...favorite,
          isFavorite: false,
        };
      return favorite;
    });
    firestore()
      .collection('users')
      .doc(userInfo.id)
      .update({
        favorites: favoritesUpdate,
      })
      .then(() => {})
      .catch((err) => console.log(err));
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
        }}
        stickyHeaderIndices={[0]}
      >
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 25,
              paddingTop: 20,
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: 'bold',
              }}
            >
              Công việc yêu thích
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            width: '100%',
            paddingHorizontal: 25,
            justifyContent: 'center',
          }}
        >
          <View style={{ width: '100%', position: 'relative', marginBottom: 25 }}>
            <Image
              source={require('../../assets/images/bg-gradient.png')}
              style={{
                paddingTop: 20,
                width: '100%',
                marginTop: 10,
                height: 195,
                resizeMode: 'stretch',
              }}
            />
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                padding: 20,
                position: 'absolute',
                top: 10,
              }}
            >
              <Text
                style={{ fontSize: 23, color: '#fff', lineHeight: 30, fontFamily: 'Poppins-Bold' }}
              >
                Big Opportunity {'\n'}Around You!
              </Text>
              <Text style={{ color: '#fff', lineHeight: 20 }}>
                Tìm công việc thực sự tốt chỉ {'\n'}dành cho bạn và xung quanh bạn.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SearchFilterView');
                }}
                activeOpacity={0.7}
                style={{
                  marginTop: 10,
                  height: 40,
                  width: 90,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: colors.primary, fontWeight: '600' }}>Tìm kiếm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 15,
              color: colors.text2,
              fontWeight: '700',
              textAlign: 'left',
            }}
          >
            Bạn đang quan tâm
          </Text>
          {favorites?.length > 0 &&
            posts
              .filter((item) => favorites.find((favorite) => favorite.id === item.id))
              .map((item) => (
                <View key={item.id}>
                  <CardBookmark
                    id={item.id}
                    companyLogo={item.image}
                    companyName={item.name_company}
                    companyAddress={item.address}
                    wage={item.wage}
                    career={item.career}
                    title={item.title}
                    idPost={item.id}
                    handleRemove={() => deleteItem(item.id)}
                  />
                </View>
              ))}
          {favorites?.length > 0 &&
            posts.filter((item) => favorites.find((favorite) => favorite.id === item.id)).length <=
              0 && (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text2,
                }}
              >
                Chưa có công việc nào được theo dõi!
              </Text>
            )}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default Bookmark;
