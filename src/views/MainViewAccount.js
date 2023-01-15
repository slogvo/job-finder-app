import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import NoCVModal from '../component/modal/NoCVModal';
import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';

const MainViewAccount = ({ navigation }) => {
  const [checked, setChecked] = useState('first');
  const [isNoCVModal, setNoCVModal] = useState(false);
  const toggleNoCVModal = () => {
    setNoCVModal(!isNoCVModal);
  };

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

  const userDisplayArr = userAuth.displayName?.split(' ');

  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
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
              Hồ sơ cá nhân
            </Text>
            <Ionicons name="settings-sharp" size={24} color={colors.text} />
          </View>
        </View>
        <View style={{ marginTop: 15, paddingHorizontal: 25 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 75,
                height: 75,
                borderRadius: 100,
                // backgroundColor: '#7896FF',
              }}
            >
              {/* <Text style={{ fontSize: 30, color: '#fff', fontWeight: '900' }}>
                {userDisplayArr && userDisplayArr[userDisplayArr?.length - 1][0]}
              </Text> */}
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/job-finder-app-c1066.appspot.com/o/user-image.png?alt=media&token=c717e663-745e-491b-a96e-4b3c229ff8ac',
                }}
                style={{ width: 75, height: 75 }}
              />
              {/* Camera */}
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: -3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: 100,
                  backgroundColor: colors.background,
                  borderWidth: 1,
                  borderColor: 'white',
                }}
              >
                <FontAwesome name="camera" size={14} color={colors.text} />
              </View>
            </View>
            <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>0</Text>
              <Text style={{ textAlign: 'center' }}>Lượt xem hồ sơ</Text>
            </View>
            <View style={{ width: 70, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>0</Text>
              <Text style={{ textAlign: 'center' }}>Thông báo việc làm</Text>
            </View>
            <View style={{ width: 70, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>0</Text>
              <Text style={{ textAlign: 'center' }}>Việc làm ứng tuyển</Text>
            </View>
          </View>
          <Text style={{ marginTop: 15, fontSize: 16, color: colors.text, fontWeight: '700' }}>
            {userAuth.displayName}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <MaterialIcons name="email" size={15} />
            <Text style={{ marginLeft: 5 }}>{userAuth?.email}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            {/* <FontAwesome name="phone" size={15} /> */}
            <AntDesign name="pluscircle" size={15} />
            <Text style={{ marginLeft: 5 }}>Thêm số điện thoại</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                fontWeight: '500',
              }}
            >
              Hồ sơ của tôi
            </Text>
            <View
              style={{
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.primary,
                  width: '48%',
                  paddingHorizontal: 15,
                }}
                onPress={() => {
                  if (userInfo?.file !== undefined) {
                    return navigation.navigate('PDFViewAccount', { pdfFile: userInfo?.file });
                  }
                  return toggleNoCVModal();
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Xem hồ sơ hiện tại</Text>
              </TouchableOpacity>
              <NoCVModal handleToggleNoCVModal={toggleNoCVModal} isNoCVModal={isNoCVModal} />
              <TouchableOpacity
                style={{
                  width: '48%',
                  height: 50,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 15,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: colors.primary,
                }}
                onPress={() => {}}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="pluscircle" size={16} color={colors.primary} />
                  <Text style={{ marginLeft: 10, color: colors.primary, fontWeight: 'bold' }}>
                    Upload CV mới
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                Nghề nghiệp
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      marginTop: 8,
                      borderWidth: 1,
                      width: '100%',
                      borderRadius: 5,
                      height: 50,
                      borderColor: colors.border,
                      fontWeight: '400',
                      paddingLeft: 15,
                    }}
                    placeholder="VD: Lập trình viên, designer,..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                Vị trí (nếu có)
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      marginTop: 8,
                      borderWidth: 1,
                      width: '100%',
                      borderRadius: 5,
                      height: 50,
                      borderColor: colors.border,
                      fontWeight: '400',
                      paddingLeft: 15,
                    }}
                    placeholder="VD:Trưởng phòng nhân sự"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                Ngày sinh
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      marginTop: 8,
                      borderWidth: 1,
                      width: '100%',
                      borderRadius: 5,
                      height: 50,
                      borderColor: colors.border,
                      fontWeight: '400',
                      paddingLeft: 15,
                    }}
                    placeholder="Ngày sinh của bạn"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
            </View>
            <View>
              <RadioButton
                value="Nam"
                status={checked === 'Nam' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Nam')}
              />
              <RadioButton
                value="Nữ"
                status={checked === 'Nữ' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Nữ')}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default MainViewAccount;
