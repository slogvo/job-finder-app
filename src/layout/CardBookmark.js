import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/colors/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import firestore from '@react-native-firebase/firestore';
import { SwipeListView } from 'react-native-swipe-list-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CardBookmark = ({
  id,
  companyLogo,
  companyName,
  companyAddress,
  wage,
  title,
  career,
  idPost,
  handleRemove,
  navigation,
  ...props
}) => {
  const companyAddressArr = companyAddress?.split(',');
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={handleRemove} activeOpacity={0.6}>
        <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            <FontAwesome name="trash-o" size={22} color={colors.redColor} />
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={leftSwipe}>
      <Pressable
        // onPress={() => {
        //   navigation.navigate('JobDetail', { itemId: idPost });
        // }}
        style={{
          flex: 1,
          alignItems: 'flex-start',
          flexDirection: 'row',
          width: '100%',
          height: 100,
          borderRadius: 16,
          backgroundColor: colors.background,
          padding: 10,
          // elevation: 2,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 8,
            elevation: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}
        >
          <Image
            source={{ uri: companyLogo }}
            style={{ width: 58, height: 58, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ height: '100%', width: '100%' }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.text,
              marginBottom: 5,
              fontWeight: '700',
              width: 240,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            style={{
              marginTop: -4,
              fontWeight: '500',
              color: colors.text,
              width: 240,
              fontSize: 13,
            }}
            numberOfLines={1}
          >
            {companyName}
          </Text>
          <Text style={{ marginTop: 4, width: 240, fontSize: 13 }} numberOfLines={1}>
            {career}
          </Text>
          <View
            style={{
              marginTop: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/location.png')}
              style={{
                width: 18,
                height: 18,
                marginRight: 5,
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontWeight: '500',
                marginRight: 10,
                fontSize: 13,
              }}
            >
              {companyAddressArr && companyAddressArr[companyAddressArr?.length - 1]}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: colors.secondary,
                fontWeight: '500',
                fontSize: 13,
              }}
            >
              {wage}
            </Text>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
};

export default CardBookmark;
