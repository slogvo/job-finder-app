import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import { Controller, useForm } from 'react-hook-form';
import ConfirmCVModal from '../component/modal/ConfirmCVModal';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Recruitment = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [isConfirmCVModal, setConfirmCVModal] = useState(false);
  const toggleConfirmCVModal = () => {
    setConfirmCVModal(!isConfirmCVModal);
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
      .where('id', '==', `${userAuth.uid}`)
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

  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {};
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
              Ứng tuyển công việc
            </Text>
            <Text></Text>
          </View>
        </View>
        <View style={{ marginTop: 15, paddingHorizontal: 25 }}>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colors.text,
                fontWeight: '500',
              }}
            >
              Chức danh
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    width: '100%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: 'white',
                    borderBottomColor: colors.border,
                    fontWeight: '400',
                    paddingRight: 15,
                  }}
                  placeholder="Nhập chức danh"
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
              marginTop: 20,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colors.text,
                fontWeight: '500',
              }}
            >
              Số điện thoại
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    borderWidth: 1,
                    width: '100%',
                    height: 50,
                    borderColor: 'white',
                    borderBottomColor: colors.border,
                    fontWeight: '400',
                    paddingRight: 15,
                  }}
                  placeholder="Nhập số điện thoại"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
          </View>
          <View style={{ marginTop: 25 }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.text,
                  fontWeight: 'bold',
                }}
              >
                HƯỚNG DẪN VIẾT CV
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  fontWeight: '500',
                  lineHeight: 25,
                }}
              >
                CV cơ bản cần có thông tin cá nhân, kỹ năng, học vấn và kinh nghiệm làm việc. {'\n'}
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.secondary,
                    fontWeight: 'bold',
                  }}
                >
                  Một số lỗi sai thường gặp:
                </Text>
                {'\n'}• Mục tiêu nghề nghiệp chung chung "tìm kiếm cơ hội", "thăng tiến", "phát
                triển bản thân". {'\n'}• Thiếu thông tin kỹ năng trong CV.
                {'\n'}• Kinh nghiệm làm việc hoặc hoạt động chưa có kết quả thể hiện bằng con số.
                {'\n'} • Kinh nghiệm làm việc chưa sắp xếp từ gần nhất đến xa nhất.
              </Text>
            </View>
          </View>
          {/* Xác nhận ứng tuyển */}
          <View
            style={{
              marginTop: 30,
              width: '100%',
              height: 1,
              borderTopWidth: 1,
              borderStyle: 'dashed',
              borderColor: colors.secondary,
            }}
          />
          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 50,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.secondary,
              width: '100%',
              paddingHorizontal: 15,
            }}
            onPress={toggleConfirmCVModal}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
              Xác nhận ứng tuyển
            </Text>
          </TouchableOpacity>
          <ConfirmCVModal
            userInfo={userInfo}
            jobID={itemId}
            handleToggleConfirmCVModal={toggleConfirmCVModal}
            isConfirmCVModal={isConfirmCVModal}
          />
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </View>
  );
};

export default Recruitment;
