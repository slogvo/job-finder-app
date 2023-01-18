import { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SearchLayout = ({ navigation }) => {
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/images/icons/menu.png')}
              style={{
                width: 28,
                height: 28,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Image
            source={require('../../assets/images/notification.png')}
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity> */}
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <Image
          source={{
            uri: userInfo?.avatar,
          }}
          style={{ width: 50, height: 50, borderRadius: 50, marginRight: 15 }}
        />
        <View>
          <Text
            style={{
              fontSize: 21,
              color: colors.text,
              fontFamily: 'Inter-Bold',
              marginBottom: 5,
            }}
          >
            Hi, {userAuth.displayName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.secondary,
            }}
          >
            Bạn muốn tìm kiếm gì?
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          paddingBottom: 10,
          backgroundColor: '#fff',
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e2e2e2',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={require('../../assets/images/icons/search-symbol.png')}
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            left: 15,
            zIndex: 10,
            top: 13,
          }}
        />
        <TextInput
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            paddingLeft: 50,
            borderRadius: 80,
            width: '100%',
            color: colors.text,
            backgroundColor: '#f7f7f7',
            fontSize: 15,
          }}
          placeholder="Tìm kiếm công việc, công ty,..."
          onFocus={() => {
            navigation.navigate('SearchFilterView');
          }}
        />
      </View>
    </View>
  );
};

export default SearchLayout;
