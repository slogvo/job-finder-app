import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import colors from '../../assets/colors/colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('../../assets/images/banner/banner1.png'),
  image2: require('../../assets/images/banner/banner2.png'),
  image3: require('../../assets/images/banner/banner3.png'),
  image4: require('../../assets/images/banner/banner4.png'),
  image5: require('../../assets/images/banner/banner5.png'),
  image6: require('../../assets/images/banner/banner6.png'),
};

const Explore = () => {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 },
  ]);
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
              justifyContent: 'center',
              paddingHorizontal: 25,
              paddingTop: 15,
              width: '100%',
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  height: 40,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: 'bold',
              }}
            >
              Khám phá
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 30,
          }}
        >
          <View style={{ flex: 1 / 2, marginTop: 20 }}>
            <Carousel
              layout="default"
              data={images}
              sliderWidth={width}
              itemWidth={width}
              renderItem={({ item, index }) => (
                <Image
                  key={index}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="contain"
                  source={item.image}
                />
              )}
            />
          </View>
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default Explore;
