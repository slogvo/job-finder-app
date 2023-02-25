import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';
import UploadLogo from '../component/image/UploadLogo';
import useUploadImage from '../hooks/useUploadImage';
import { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const PostView = ({ navigation }) => {
  const typeJobs = ['Full-time', 'Part-time'];
  const [typeJob, setTypeJob] = useState('');
  const [checked, setChecked] = useState('');
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

  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { fileData, setFileData, handleFileUpload, setUrl, url } = useUploadImage();
  const onSubmit = async (data) => {
    console.log('data: ', data);
    firestore()
      .collection('posts')
      .add({
        ...data,
        image: url,
        createdAt: firestore.FieldValue.serverTimestamp(),
        user_id: userInfo.user_id,
        wage: data.wage || 'Thương lượng',
        type_job: typeJob || 'Full-time',
      })
      .then(() => {
        reset({
          title: '',
          wage: '',
          type_job: '',
          description: '',
          requirement: '',
          address: '',
          career: '',
          name_company: '',
        });
        setUrl(null);
        setFileData(null);
        console.log('Posts added!');
      })
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
              Đăng tuyển việc làm
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 25,
          }}
        >
          <Text style={{ color: colors.text, fontWeight: '600', lineHeight: 21 }}>
            Đăng đầy đủ chi tiết các thông tin để ứng cử viên có thể nắm rõ đầy đủ các thông tin về
            công ty của bạn!
          </Text>
          {/* Logo công ty */}
          <View
            style={{
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
              <Image
                source={require('../../assets/images/form/buildings.png')}
                style={{ width: 20, height: 20 }}
              />
              {'   '}
              Logo công ty
            </Text>
            <UploadLogo fileData={fileData} handleFileUpload={handleFileUpload}></UploadLogo>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                color: colors.text,
                fontWeight: '500',
                fontSize: 14,
              }}
            >
              <Image
                source={require('../../assets/images/form/price-tag.png')}
                style={{ width: 20, height: 20 }}
              />
              {'  '}
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
                    marginTop: 8,
                    borderWidth: 1,
                    width: '100%',
                    borderRadius: 5,
                    height: 50,
                    borderColor: colors.border,
                    fontWeight: '400',
                    paddingLeft: 15,
                  }}
                  placeholder="Tên chức danh"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="title"
            />
            {/* Mức lương*/}
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
                <Image
                  source={require('../../assets/images/form/salary.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'   '}
                Mức lương
              </Text>
              <View
                style={{
                  marginLeft: -8,
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  color={colors.primary}
                  uncheckedColor={colors.border}
                  value="Thương lượng"
                  status={checked === 'Thương lượng' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Thương lượng')}
                />
                <Text style={{ marginRight: 20 }}>Thương lượng</Text>

                <RadioButton
                  color={colors.primary}
                  uncheckedColor={colors.border}
                  value="Nam"
                  status={checked === 'Nhập mức lương' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Nhập mức lương')}
                />
                <Text style={{ marginRight: 20 }}>Nhập mức lương</Text>
              </View>
              {checked === 'Nhập mức lương' ? (
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
                        // borderColor: colors.secondary,
                        fontWeight: '400',
                        paddingLeft: 15,
                      }}
                      placeholder="Nhập mức lương"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="wage"
                />
              ) : (
                <Controller
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={{
                        display: 'none',
                        marginTop: 8,
                        borderWidth: 1,
                        width: '100%',
                        borderRadius: 5,
                        height: 50,
                        fontWeight: '400',
                        paddingLeft: 15,
                      }}
                      placeholder="Thương lượng"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={'Thương lượng'}
                    />
                  )}
                  name="wage"
                />
              )}
            </View>
            {/* Vị trí hiện tại */}
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
                <Image
                  source={require('../../assets/images/form/full-time.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'  '}
                Loại việc làm
              </Text>
              {/* <Controller
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
                    placeholder="Full-time hay part-time"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="type_job"
              /> */}
              <View style={{ width: '100%', marginTop: 10 }}>
                <SelectDropdown
                  data={typeJobs}
                  rowTextStyle={{ textAlign: 'left', fontSize: 14 }}
                  buttonTextStyle={{ textAlign: 'left', fontSize: 14 }}
                  buttonStyle={{
                    borderRadius: 5,
                    width: '100%',
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setTypeJob(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
            </View>
            {/* Ngành nghề */}
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
                <Image
                  source={require('../../assets/images/accountImage/brief.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'   '}
                Ngành nghề
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
                    placeholder="Chọn ngành nghề"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="career"
              />
            </View>
            {/* Mô tả */}
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
                <Image
                  source={require('../../assets/images/form/description.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'  '}
                Mô tả công việc
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    multiline={true}
                    blurOnSubmit={true}
                    style={{
                      marginTop: 10,
                      width: '100%',
                      borderRadius: 8,
                      height: 150,
                      textAlignVertical: 'top',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      backgroundColor: '#f9fafe',
                      paddingHorizontal: 20,
                      padding: 25,
                      lineHeight: 30,
                    }}
                    placeholder="Thêm những mô tả về công việc..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="description"
              />
            </View>
            {/* Kinh nghiệm làm việc */}
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
                <Image
                  source={require('../../assets/images/form/requirement.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'  '}
                Yêu cầu công việc
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    multiline={true}
                    blurOnSubmit={true}
                    style={{
                      marginTop: 10,
                      width: '100%',
                      borderRadius: 8,
                      height: 150,
                      textAlignVertical: 'top',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      backgroundColor: '#f9fafe',
                      paddingHorizontal: 20,
                      padding: 25,
                      lineHeight: 30,
                    }}
                    placeholder="Những yêu cầu cần có cho công việc ..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="requirement"
              />
            </View>
            {/* Tên công ty */}
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
                <Image
                  source={require('../../assets/images/form/office-building.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'   '}
                Tên công ty
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
                    placeholder="Tên công ty của bạn"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="name_company"
              />
            </View>
            {/* Địa chỉ */}
            <View
              style={{
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
                <Image
                  source={require('../../assets/images/form/address.png')}
                  style={{ width: 20, height: 20 }}
                />
                {'   '}
                Địa chỉ
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
                    placeholder="Địa chỉ làm việc"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="address"
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
              paddingVertical: 15,
              borderRadius: 8,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={{ color: '#fff' }}>Xác nhận đăng tuyển</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default PostView;

const styles = StyleSheet.create({});
