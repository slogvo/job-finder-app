import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useGallery } from '../contexts/gallery-context';

const CardCategory = ({ id, img, companyName, desc, salary, location, navigation, isFavorite }) => {
  const { toggleFavorite } = useGallery();
  return (
    <View
      onPress={() => navigation.navigate('JobDetail')}
      style={{
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        height: 90,
        borderRadius: 16,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 2,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 8,
          elevation: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}
      >
        <Image style={{ width: 60, height: 60 }} resizeMode="contain" source={img} />
      </View>
      <View style={{ height: '100%', width: '100%' }}>
        <Text
          style={{
            fontSize: 14,
            color: colors.text,
            marginBottom: 5,
            fontWeight: '700',
            width: 220,
          }}
          numberOfLines={1}
        >
          {desc}
        </Text>
        <Text
          style={{
            marginTop: -4,
            fontWeight: '500',
            color: colors.text,
            width: 220,
          }}
          numberOfLines={1}
        >
          {companyName}
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
          ></Image>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: 'SanFranciscoDisplay-Medium',
              marginRight: 10,
            }}
          >
            {location}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: colors.secondary,
              fontWeight: '500',
            }}
          >
            {salary}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => toggleFavorite(id)}>
        <AntDesign
          name="heart"
          size={20}
          color={isFavorite === true ? colors.redColor : colors.border}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardCategory;
