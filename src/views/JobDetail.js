import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const windowWidth = Dimensions.get('window').width;

const JobDetail = ({ route, navigation }) => {
  const [defaultRating, setDefaultRating] = useState(4);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const [offComment, setOffComment] = useState(false);
  const commentRef = useRef('');
  const { itemId } = route.params;
  const [job, setJob] = useState();
  const [userInfo, setUserInfo] = useState();
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Xóa thành công!',
      text2: 'Bài tuyển dụng của bạn đã được xóa!',
      topOffset: 0,
      visibilityTime: 2500,
    });
  };

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

  // Get posts
  useEffect(() => {
    firestore()
      .collection('posts')
      .doc(itemId)
      .onSnapshot((snapshot) => {
        setJob(snapshot.data());
      });
  }, []);

  const handleComment = (text) => {
    commentRef.current = text;
  };

  const feedbacksClone = job?.feedbacks || [];
  var currentdate = new Date();
  const handleSubmitFeedback = () => {
    feedbacksClone.push({
      jobId: itemId,
      star: defaultRating,
      user_id: userInfo?.user_id,
      feedback: commentRef.current,
      userName: userInfo?.username,
      createdAt:
        currentdate.getDate() +
        '-' +
        (currentdate.getMonth() + 1) +
        '-' +
        currentdate.getFullYear(),
    });
    firestore()
      .collection('posts')
      .doc(itemId)
      .update({
        feedbacks: feedbacksClone,
      })
      .then(() => {
        setOffComment(true);
      })
      .catch((err) => console.log(err));
  };

  let sumStar = 0,
    count = 0;
  if (job?.feedbacks) {
    job?.feedbacks.forEach((feedback) => {
      count++;
      sumStar += feedback.star;
    });
  }

  const favoritesClone = userInfo?.favorites || [];
  const [isFavorite] = favoritesClone
    .filter((item) => item.id === itemId)
    .map((item) => item.isFavorite);

  const handleToggleFavorite = (ID) => {
    const hasPost = favoritesClone?.find((favorite) => favorite.id === ID);
    if (hasPost === undefined) {
      favoritesClone.push({
        id: ID,
        isFavorite: false,
      });
    }
    const updatedArray = favoritesClone?.map((favorite) => {
      if (favorite.id === ID)
        return {
          ...favorite,
          isFavorite: !favorite.isFavorite,
        };
      return favorite;
    });
    firestore()
      .collection('users')
      .doc(userInfo.id)
      .update({
        favorites: updatedArray,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // Delete Post
  const handleDeletePost = () => {
    firestore()
      .collection('posts')
      .doc(itemId)
      .delete()
      .then(() => {});
  };

  return (
    <View
      style={{
        flex: 1,
        width: windowWidth,
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
          width: windowWidth,
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
              Chi tiết công việc
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View style={{ marginTop: 25, paddingHorizontal: 25 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                elevation: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
              }}
            >
              <Image
                source={{ uri: job?.image }}
                style={{ width: 75, height: 75, resizeMode: 'contain' }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 18,
                  width: windowWidth - 150,
                  fontWeight: '600',
                }}
              >
                {job?.title}
              </Text>
              <Text
                style={{
                  color: colors.secondary,
                  marginTop: 4,
                  width: windowWidth - 150,
                  fontSize: 14,
                  fontWeight: '500',
                }}
              >
                {job?.career}
              </Text>
            </View>
          </View>
          <Text style={{ marginTop: 10, fontSize: 15, color: colors.text, fontWeight: '700' }}>
            Công ty:<Text style={{ fontWeight: '500', lineHeight: 25 }}> {job?.name_company}</Text>
          </Text>
          {/* Star Wage Type-job */}
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: colors.text,
                  marginRight: 5,
                }}
              >
                Vote: {sumStar ? parseFloat(sumStar / count).toFixed(1) : ''}
              </Text>
              <AntDesign name="star" size={18} color={colors.yellowStar} />
            </View>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: colors.lightGray,
              }}
            />
            <Text
              style={{
                color: colors.text,
                marginTop: 5,
                fontSize: 15,
                fontWeight: '700',
                color: '#14213d',
              }}
            >
              {job?.wage || 'Thương lượng'}
            </Text>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: colors.lightGray,
              }}
            />
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 5,
                height: 40,
                backgroundColor: '#ecedee',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: colors.text2,
                }}
              >
                {job?.type_job}
              </Text>
            </View>
          </View>
          {/* Button */}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {job?.user_id === userInfo?.user_id ? (
              <TouchableOpacity
                style={{
                  width: '65%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  borderRadius: 8,
                  backgroundColor: colors.redColor,
                  height: 50,
                }}
                onPress={() => {
                  showToast();
                  setTimeout(() => {
                    navigation.goBack();
                  }, 1000);
                  setTimeout(() => {
                    handleDeletePost();
                  }, 1100);
                }}
              >
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: 'white',
                  }}
                >
                  Xóa bài tuyển dụng
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  width: '65%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  borderRadius: 8,
                  backgroundColor: colors.primary,
                  height: 50,
                }}
                onPress={() => {
                  navigation.navigate('Recruitment', {
                    itemId: itemId,
                    userAuth: userAuth,
                    userInfo: userInfo,
                  });
                }}
              >
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: 'white',
                  }}
                >
                  Ứng tuyển
                </Text>
              </TouchableOpacity>
            )}
            {isFavorite === true ? (
              <TouchableOpacity
                onPress={() => handleToggleFavorite(itemId)}
                style={{
                  width: '30%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  borderRadius: 8,
                  height: 50,
                  backgroundColor: colors.border,
                  flexDirection: 'row',
                }}
              >
                <AntDesign
                  name="plus"
                  size={18}
                  color={colors.text}
                  style={{ transform: [{ rotate: '45deg' }] }}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 16,
                    color: colors.text,
                  }}
                >
                  Huỷ
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => handleToggleFavorite(itemId)}
                style={{
                  width: '30%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  borderRadius: 8,
                  height: 50,
                  backgroundColor: colors.secondary,
                  flexDirection: 'row',
                }}
              >
                <AntDesign name="heart" size={18} color="#fff" />
                <Text
                  style={{
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 16,
                    color: '#fff',
                  }}
                >
                  Lưu
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* Detail */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>
              Mô tả công việc:
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '500', lineHeight: 25 }}>
              {job?.description.replace(' -', '\n-').replace(' - ', '\n- ')}
            </Text>
          </View>

          <Text style={{ marginTop: 20, fontSize: 16, color: colors.text, fontWeight: '700' }}>
            Yêu cầu công việc:
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '500', lineHeight: 25 }}>
            {job?.requirement.replace(' -', '\n-')}
          </Text>

          <Text style={{ marginTop: 20, fontSize: 16, color: colors.text, fontWeight: '700' }}>
            Địa chỉ công ty:
          </Text>
          <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/icons/location.png')}
              style={{
                width: 18,
                height: 18,
                marginRight: 5,
              }}
            ></Image>
            <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 25 }}>{job?.address}</Text>
          </View>

          {offComment === false && job?.user_id !== userInfo?.user_id ? (
            <View style={{ marginTop: 20 }}>
              {/* FeedBacks */}
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: colors.text,
                  fontWeight: '700',
                  marginTop: 20,
                }}
              >
                Đánh giá công việc này
              </Text>
              <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      key={index}
                      onPress={() => setDefaultRating(item)}
                    >
                      {item <= defaultRating ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 9999,
                            backgroundColor: '#FEFCE8',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <AntDesign name="star" size={30} color={colors.yellowStar} />
                        </View>
                      ) : (
                        <View
                          style={{
                            borderRadius: 100,
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <AntDesign name="staro" size={30} color={colors.yellowStar} />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={{ position: 'relative', marginTop: 15, marginBottom: 30 }}>
                <TextInput
                  multiline={true}
                  blurOnSubmit={true}
                  onChangeText={handleComment}
                  placeholder="Bạn thấy công việc này như thế nào..."
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
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleSubmitFeedback}
                  style={{
                    position: 'absolute',
                    width: 55,
                    height: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e5effa',
                    borderRadius: 100,
                    bottom: -20,
                    left: '50%',
                    transform: [{ translateX: -40 }],
                  }}
                >
                  {/* <Text style={{ color: '#fff' }}>Gửi</Text> */}
                  <FontAwesome name="send" size={20} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {/* Comment */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: colors.text, fontWeight: '700' }}>
              Các đánh giá khác:
            </Text>
            {job?.feedbacks?.length > 0 &&
              job?.feedbacks.reverse().map((item, index) => (
                <View key={`${item.id}${index}`} style={{ marginTop: 25, flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/icons/user-image.png')}
                    style={{ marginRight: 10, width: 45, height: 45, resizeMode: 'cover' }}
                  />
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: '700', color: colors.text }}>
                        {item?.userName}
                      </Text>
                      {Array(item?.star)
                        .fill(0)
                        .map((starItem, index) => (
                          <View key={index}>
                            <AntDesign
                              name="star"
                              size={15}
                              color={colors.yellowStar}
                              style={{ marginLeft: 4 }}
                            />
                          </View>
                        ))}
                    </View>
                    <Text
                      style={{ marginTop: 3, color: colors.primary, width: 320, lineHeight: 20 }}
                    >
                      {item?.feedback || 'Người dùng không để lại bình luận.'}
                    </Text>
                    <Text style={{ marginTop: 5, fontSize: 12 }}>{item?.createdAt}</Text>
                  </View>
                </View>
              ))}
            {job?.feedbacks?.length <= 0 && (
              <Text style={{ marginTop: 10 }}>Chưa có bất kỳ nhận xét nào.</Text>
            )}
          </View>
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
  },
  customRatingBarStyle: {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default JobDetail;
