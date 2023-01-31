import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import useUploadImage from '../hooks/useUploadImage';
import { Modal, Portal, Provider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MainViewAccount = ({ navigation }) => {
  const [checked, setChecked] = useState('');
  const [isNoCVModal, setNoCVModal] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const toggleNoCVModal = () => {
    setNoCVModal(!isNoCVModal);
  };
  const { fileData, setUrl, url, setFileData, handleFileUpload } = useUploadImage();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setFileData([]);
    setUrl(null);
    setVisible(false);
  };
  const containerStyle = {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: -60,
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
        if (user[0]?.gender) {
          setChecked(user[0]?.gender);
        }
      });
  }, [userAuth]);

  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const updateAvatar = () => {
    hideModal();
    firestore()
      .collection('users')
      .doc(userInfo.id)
      .update({
        avatar: url,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    firestore()
      .collection('users')
      .doc(userInfo.id)
      .update({
        job: data?.job || userInfo?.job || '',
        job_position: data?.job_position || userInfo?.job_position || '',
        experience: data?.experience || userInfo?.experience || '',
        dateOfBirth: data?.dateOfBirth || userInfo?.dateOfBirth || '',
        gender: checked || '',
      });
    reset({
      job: '',
      job_position: '',
      experience: '',
      dateOfBirth: '',
    });
    setEditInfo(false);
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Cập nhật thành công!',
      text2: 'Thông tin cá nhân đã được cập nhật',
      topOffset: 0,
      visibilityTime: 2500,
    });
  };
  return (
    <Provider>
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
                }}
              >
                <Image
                  source={{
                    uri: userInfo?.avatar,
                  }}
                  style={{ width: 75, height: 75, borderRadius: 100 }}
                />

                {fileData?.length <= 0 ? (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      handleFileUpload();
                      showModal();
                    }}
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
                  </TouchableOpacity>
                ) : (
                  <Portal>
                    <View
                      style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                      }}
                    >
                      <Modal
                        visible={visible}
                        onDismiss={hideModal}
                        contentContainerStyle={containerStyle}
                      >
                        {url ? (
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={updateAvatar}
                            style={{
                              width: 80,
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: 50,
                              position: 'absolute',
                              backgroundColor: '#fff',
                              bottom: -80,
                              right: 10,
                              borderRadius: 8,
                            }}
                          >
                            <Text style={{ fontSize: 16, fontWeight: '500', color: colors.text }}>
                              Lưu
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <Text
                            style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'absolute',
                              bottom: -60,
                              right: 25,
                              borderRadius: 8,
                              fontSize: 14,
                              fontWeight: '400',
                              color: '#fff',
                            }}
                          >
                            Đang chờ xử lý...
                          </Text>
                        )}
                        <Image
                          source={{ uri: fileData?.uri }}
                          style={{
                            height: SCREEN_WIDTH,
                            width: SCREEN_WIDTH,
                            borderRadius: 200,
                            resizeMode: 'cover',
                            position: 'relative',
                            zIndex: 2,
                          }}
                        />
                        <View
                          style={{
                            height: SCREEN_WIDTH,
                            width: SCREEN_WIDTH,
                            zIndex: 1,
                            top: '50%',
                            left: '50%',
                            backgroundColor: colors.text,
                            opacity: 0.5,
                            transform: [{ translateY: -SCREEN_WIDTH / 2 }, { translateX: -205 }],
                            position: 'absolute',
                            resizeMode: 'cover',
                          }}
                        ></View>
                        <Image
                          source={{ uri: fileData?.uri }}
                          style={{
                            height: SCREEN_WIDTH,
                            width: SCREEN_WIDTH,
                            zIndex: 0,
                            top: '50%',
                            left: '50%',
                            transform: [{ translateY: -SCREEN_WIDTH / 2 }, { translateX: -205 }],
                            position: 'absolute',
                            resizeMode: 'cover',
                          }}
                        />
                      </Modal>
                    </View>
                  </Portal>
                )}
              </View>
              <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>0</Text>
                <Text style={{ textAlign: 'center', color: '#7f879d' }}>Lượt xem hồ sơ</Text>
              </View>
              <View style={{ width: 70, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>0</Text>
                <Text style={{ textAlign: 'center', color: '#7f879d' }}>Thông báo việc làm</Text>
              </View>
              <View style={{ width: 70, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>0</Text>
                <Text style={{ textAlign: 'center', color: '#7f879d' }}>Việc làm ứng tuyển</Text>
              </View>
            </View>
            <Text style={{ marginTop: 15, fontSize: 16, color: colors.text, fontWeight: '700' }}>
              {userAuth.displayName}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <MaterialIcons name="email" size={18} color="#7f879d" />
              <Text style={{ marginLeft: 5, color: '#7f879d' }}>{userAuth?.email}</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <AntDesign name="pluscircle" size={17} color="#7f879d" />
              <Text style={{ marginLeft: 5, color: '#7f879d' }}>Thêm số điện thoại</Text>
            </View> */}
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: colors.text,
                  fontWeight: '500',
                  fontSize: 16,
                }}
              >
                <Image
                  source={require('../../assets/images/accountImage/file.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'   '}
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
              {/* Thông tin khác */}
              <View
                style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: '500',
                    fontSize: 16,
                  }}
                >
                  <Image
                    source={require('../../assets/images/accountImage/profile.png')}
                    style={{ width: 20, height: 20 }}
                  />
                  {'   '}
                  Về bản thân tôi {'  '}
                </Text>
                <Pressable
                  onPress={() => setEditInfo(!editInfo)}
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <AntDesign name="edit" size={16} color={colors.secondary} />

                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 14,
                      fontWeight: '600',
                      color: colors.secondary,
                    }}
                  >
                    Chỉnh sửa
                  </Text>
                </Pressable>
              </View>
              {/* Nghề nghiệp */}
              <View
                style={{
                  marginTop: 25,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                  <Image
                    source={require('../../assets/images/accountImage/brief.png')}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 14,
                      color: colors.text,
                      fontWeight: '500',
                    }}
                  >
                    Nghề nghiệp:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 14,
                      color: colors.text2,
                      fontWeight: '400',
                      width: 250,
                    }}
                  >
                    {userInfo?.job}
                  </Text>
                </View>
                {editInfo && (
                  <Controller
                    control={control}
                    rules={{
                      required: false,
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
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                      />
                    )}
                    name="job"
                  />
                )}
              </View>
              {/* Vị trí hiện tại */}
              <View
                style={{
                  marginTop: 25,
                }}
              >
                <View
                  style={{
                    alignItems: 'stretch',
                    flexDirection: 'row',
                  }}
                >
                  <Image
                    source={require('../../assets/images/accountImage/office-chair.png')}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 10,
                      color: colors.text,
                      fontWeight: '500',
                    }}
                  >
                    Vị trí:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 14,
                      color: colors.text2,
                      fontWeight: '400',
                      width: 250,
                    }}
                  >
                    {userInfo?.job_position}
                  </Text>
                </View>
                {editInfo && (
                  <Controller
                    control={control}
                    rules={{
                      required: false,
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
                        placeholder="VD: Trưởng phòng nhân sự"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                      />
                    )}
                    name="job_position"
                  />
                )}
              </View>
              {/* Kinh nghiệm làm việc */}
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 25,
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <Image
                    source={require('../../assets/images/accountImage/rating.png')}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.text,
                      fontWeight: '500',
                      marginLeft: 10,
                    }}
                  >
                    Kinh nghiệm:
                  </Text>
                </View>
                <Text
                  style={{
                    marginLeft: 30,
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 22,
                    color: colors.text2,
                    fontWeight: '400',
                  }}
                >
                  {userInfo?.experience}
                </Text>
                {editInfo && (
                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        multiline={true}
                        blurOnSubmit={true}
                        style={{
                          marginTop: 10,
                          width: '100%',
                          borderRadius: 8,
                          height: 130,
                          textAlignVertical: 'top',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          backgroundColor: '#f9fafe',
                          paddingHorizontal: 20,
                          padding: 25,
                          lineHeight: 30,
                        }}
                        placeholder="Mô tả kinh nghiệm làm việc, những gì đạt được trong quá trình làm việc,..."
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                      />
                    )}
                    name="experience"
                  />
                )}
              </View>
              {/* Ngày sinh */}
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 25,
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <Image
                    source={require('../../assets/images/accountImage/date.png')}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.text,
                      fontWeight: '500',
                      marginLeft: 10,
                    }}
                  >
                    Ngày sinh:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 14,
                      color: colors.text2,
                      fontWeight: '400',
                    }}
                  >
                    {userInfo?.dateOfBirth}
                  </Text>
                </View>
                {editInfo && (
                  <Controller
                    control={control}
                    rules={{
                      required: false,
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
                        placeholder="VD: 19-5-1890"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                      />
                    )}
                    name="dateOfBirth"
                  />
                )}
              </View>
              {/* Checkbox */}
              <View
                style={{
                  marginTop: 25,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <Image
                      source={require('../../assets/images/accountImage/female.png')}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.text,
                        marginLeft: 10,
                        fontWeight: '500',
                      }}
                    >
                      Giới tính:
                    </Text>
                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 14,
                        color: colors.text2,
                        fontWeight: '400',
                      }}
                    >
                      {userInfo?.gender}
                    </Text>
                  </View>
                  {editInfo && (
                    <View
                      style={{
                        marginLeft: 22,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <RadioButton
                        color={colors.primary}
                        uncheckedColor={colors.border}
                        value="Nam"
                        status={checked === 'Nam' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Nam')}
                      />
                      <Text style={{ marginRight: 20 }}>Nam</Text>
                      <RadioButton
                        color={colors.primary}
                        uncheckedColor={colors.border}
                        value="Nữ"
                        status={checked === 'Nữ' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Nữ')}
                      />
                      <Text>Nữ</Text>
                    </View>
                  )}
                </View>
              </View>
              {editInfo && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleSubmit(onSubmit)}
                  style={{
                    marginTop: 20,
                    backgroundColor: colors.primary,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 90,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: '#fff' }}>Cập nhật</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{ marginBottom: 100 }} />
        </ScrollView>
        {/* <Toast /> */}
      </View>
    </Provider>
  );
};

export default MainViewAccount;
