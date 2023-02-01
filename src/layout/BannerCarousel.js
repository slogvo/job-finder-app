import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import ImageBanner from './ImageBanner';

const { width: screenWidth } = Dimensions.get('window');

const BannerCarousel = ({ navigation }) => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef(null);
  useEffect(() => {
    firestore()
      .collection('posts')
      .where('typePost', '==', 1)
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setImageList(posts);
      });
  }, []);

  let interval = 3000;
  useEffect(() => {
    if (!imageList) return;
    if (imageList?.length > 0) {
      let index = 0;
      setInterval(() => {
        stepCarousel?.current?.scrollTo({ x: index * screenWidth, y: 0, animated: true });
        if (index === imageList.length - 1) {
          index = 0;
          interval = 0;
        } else {
          index += 1;
          interval = 3000;
        }
      }, interval);
    }
  }, [imageList]);

  const handleScroll = (e) => {
    if (!e) return;
    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
      }
      setCurrentImage(imageIndex);
    }
  };
  return (
    <View style={{ borderRadius: 8, paddingHorizontal: 25, marginTop: 20 }}>
      {imageList?.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // pagingEnabled
          scrollEventThrottle={16}
          contentContainerStyle={{ width: screenWidth * imageList.length - 50, height: 200 }}
          onScroll={handleScroll}
          ref={stepCarousel}
        >
          {imageList?.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('JobDetail', { itemId: item.id });
              }}
              activeOpacity={0.8}
              key={item.id}
              style={{ width: screenWidth }}
            >
              <ImageBanner src={item.image} />
              <View
                style={{
                  position: 'absolute',
                  left: 15,
                  right: 15,
                  bottom: 15,
                  width: '75%',
                  overflow: 'hidden',
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'white',
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'white',
                  }}
                >
                  {item.name_company}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {imageList?.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          {imageList?.map((item, index) => (
            <View
              key={item.id}
              style={{
                width: 15,
                height: 6,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 3,
                borderRadius: 3,
                backgroundColor: currentImage === index ? colors.primary : '#EDEDED',
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default BannerCarousel;
