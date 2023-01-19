import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import colors from '../../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const CustomDrawer = ({ ...props }) => {
  const [userAuth, setUserAuth] = useState('');
  auth().onAuthStateChanged((user) => {
    if (user) {
      setUserAuth(user);
    } else setUserAuth('Unknown');
  });

  const [userInfo, setUserInfo] = useState();
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

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          marginTop: -5,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          style={{
            padding: 20,
          }}
          source={require('../../assets/images/drawer-image.png')}
        >
          <View
            style={{
              backgroundColor: '#Fff',
              borderRadius: 100,
              alignItems: 'center',
              width: 60,
              height: 60,
              marginBottom: 10,
            }}
          >
            <Image
              source={{
                uri: userInfo?.avatar,
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 100,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 3,
              }}
            >
              {userAuth.displayName}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingHorizontal: 3,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        {/* Cài đặt */}
        <TouchableOpacity style={{ flexDirection: 'row', padding: 10, borderRadius: 8 }}>
          <Ionicons name="ios-settings-sharp" size={22} color={colors.darkGray} />
          <Text
            style={{
              marginLeft: 20,
              color: colors.darkGray,
              fontWeight: '500',
              fontSize: 16,
            }}
          >
            Cài đặt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 10, borderRadius: 8 }}
          onPress={handleSignOut}
        >
          <AntDesign name="logout" size={22} color={colors.darkGray} />
          <Text
            style={{
              marginLeft: 20,
              color: colors.darkGray,
              fontWeight: '500',
              fontSize: 16,
            }}
          >
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
