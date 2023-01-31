import { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import colors from '../../assets/colors/colors';
import auth from '@react-native-firebase/auth';
import { useForm, Controller } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
  username: Yup.string()
    .max(12, 'Tên của bạn chỉ được phép tối đa 12 ký tự')
    .required('Vui lòng nhập tên của bạn!'),
  email: Yup.string()
    .email('Địa chỉ email không hợp lệ')
    .required('Vui lòng nhập địa chỉ email của bạn!'),
  password: Yup.string()
    .min(8, 'Mật khẩu của bạn phải có ít nhất 8 ký tự')
    .required('Vui lòng nhập mật khẩu của bạn'),
}).required();

const SignUp = ({ navigation }) => {
  const [activeUsername, setActiveUsername] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    await auth()
      .createUserWithEmailAndPassword(data?.email, data?.password)
      .then(async (values) => {
        firestore()
          .collection('users')
          .add({
            user_id: values.user.uid,
            avatar:
              'https://firebasestorage.googleapis.com/v0/b/job-finder-app-fb9fd.appspot.com/o/user-image.png?alt=media&token=30c63d2b-9d94-46e0-bdf6-baf6f2204e89',
            username: data?.username,
            email: data?.email,
            password: data?.password,
            createdAt: firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            console.log('User added!');
          });
        const update = {
          displayName: data?.username,
        };
        await auth().currentUser.updateProfile(update);
        setUserInfo(values);
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          showToast('Địa chỉ email này đã được sử dụng!');
        }
        if (error.code === 'auth/invalid-email') {
          showToast('Địa chỉ email không hợp lệ!');
        }
        // console.error(error);
      });
  };
  const showToast = (error) => {
    Toast.show({
      type: 'error',
      text1: `${error}`,
      topOffset: 0,
      visibilityTime: 2500,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
      }}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: '#fff',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 35,
            marginTop: 15,
          }}
        >
          {/* Heading */}
          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              Đăng Ký
            </Text>
            <View
              style={{
                width: '100%',
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: 'Poppins-Medium',
                  color: colors.text,
                }}
              >
                <Text style={{ fontFamily: 'Poppins-Bold', color: colors.primary }}>Create </Text>an
                account
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 22,
                color: colors.text,
                fontWeight: '400',
              }}
            >
              Tạo và tìm kiếm việc làm ngay trong hôm nay!
            </Text>
          </View>
          {/* Form */}
          <View>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                Tên
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
                      borderColor: activeUsername ? colors.focusColor : colors.border,
                      fontWeight: '400',
                      paddingLeft: 15,
                    }}
                    placeholder="Nhập tên của bạn"
                    onFocus={() => setActiveUsername(true)}
                    onBlur={() => {
                      setActiveUsername(false);
                      onBlur();
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="username"
              />
              {errors?.username && (
                <Text style={{ marginTop: 10, color: colors.redColor }}>
                  {errors?.username?.message}
                </Text>
              )}
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                Email
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
                      borderColor: activeEmail ? colors.focusColor : colors.border,
                      fontWeight: '400',
                      paddingLeft: 15,
                    }}
                    placeholder="Nhập email"
                    onFocus={() => setActiveEmail(true)}
                    onBlur={() => {
                      setActiveEmail(false);
                      onBlur();
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors?.email && (
                <Text style={{ marginTop: 10, color: colors.redColor }}>
                  {errors?.email?.message}
                </Text>
              )}
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                Mật khẩu
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
                      borderColor: activePassword ? colors.focusColor : colors.border,
                      fontWeight: '400',
                      paddingLeft: 15,
                    }}
                    placeholder="Nhập password"
                    secureTextEntry={true}
                    onFocus={() => setActivePassword(true)}
                    onBlur={() => {
                      setActivePassword(false);
                      onBlur();
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
              />
              {errors?.password && (
                <Text style={{ marginTop: 10, color: colors.redColor }}>
                  {errors?.password?.message}
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                  letterSpacing: 0.2,
                  fontWeight: '400',
                }}
              >
                Đã có tài khoản?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
              >
                <Text
                  style={{
                    color: colors.secondary,
                    fontSize: 14,
                    letterSpacing: 0.2,
                    fontWeight: '600',
                  }}
                >
                  {' '}
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                backgroundColor: colors.primary,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 2,
                marginTop: 25,
              }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}
              >
                Tạo tài khoản
              </Text>
            </TouchableOpacity>
          </View>
          {/* More */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: '40%',
                height: 1,
                backgroundColor: colors.border,
              }}
            />
            <Text>Hoặc</Text>
            <View
              style={{
                width: '40%',
                height: 1,
                backgroundColor: colors.border,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={{
                width: '45%',
                height: 50,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 25,
                paddingHorizontal: 30,
                backgroundColor: '#fff',
              }}
            >
              <Image
                source={require('../../assets/images/icons/google.png')}
                style={{
                  width: 22,
                  height: 22,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  color: '#292524',
                  marginLeft: 15,
                  fontFamily: 'Poppins-Medium',
                }}
              >
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '45%',
                height: 50,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 25,
                paddingHorizontal: 30,
                backgroundColor: '#fff',
              }}
            >
              <Image
                source={require('../../assets/images/icons/facebook.png')}
                style={{
                  width: 22,
                  height: 22,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  color: '#292524',
                  marginLeft: 15,
                  fontFamily: 'Poppins-Medium',
                }}
              >
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default SignUp;
