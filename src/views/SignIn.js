import { useState } from 'react';
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import auth from '@react-native-firebase/auth';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
  email: Yup.string()
    .email('Địa chỉ email không hợp lệ')
    .required('Vui lòng nhập địa chỉ email của bạn!'),
  password: Yup.string()
    .min(6, 'Mật khẩu của bạn phải có ít nhất 8 ký tự')
    .required('Vui lòng nhập mật khẩu của bạn'),
}).required();

// const windowHeight = Dimensions.get('window').height;
const SignIn = ({ navigation }) => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    auth()
      .signInWithEmailAndPassword(data?.email, data?.password)
      .then((user) => {})
      .catch((error) => {
        console.log('error: ', error);
        if (error.code === 'auth/user-not-found') {
          showToast('Không tồn tại người dùng hoặc người dùng đã bị xóa!');
        }
        if (error.code === 'auth/wrong-password') {
          showToast('Mật khẩu không đúng!');
        }
        if (error.code === 'auth/too-many-requests') {
          showToast('Phát hiện hoạt động bất thường! Tài khoản sẽ bị khóa');
        }
      });
  };

  const showToast = (error) => {
    Toast.show({
      type: 'error',
      text2: `${error}`,
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
            Đăng Nhập
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
              Welcome to{' '}
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: 'Poppins-Bold',
                }}
              >
                CatinDob!
              </Text>
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
            Tạo ra một tương lai tốt đẹp hơn cho chính bạn!
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
              // justifyContent: 'space-between',
              marginTop: 20,
              alignItems: 'flex-start',
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
              Chưa có tài khoản ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
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
                Đăng ký
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
              Đăng Nhập
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
      <Toast />
    </View>
  );
};

export default SignIn;
