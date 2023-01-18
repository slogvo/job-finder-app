import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import firestore from '@react-native-firebase/firestore';

const { width } = Dimensions.get('window');
const THUMB_SIZE = 60;

const ExploreScreen = ({ route, navigation }) => {
  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef();
  const flatListRef = useRef();
  const [news, setNews] = useState([]);
  const [handbooks, setHandbooks] = useState([]);

  useEffect(() => {
    firestore()
      .collection('blogs')
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        const news = posts.filter((post) => post.type === 'news');
        const handbooks = posts.filter((post) => post.type === 'handbooks');
        setNews(news);
        setHandbooks(handbooks);
      });
  }, []);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true,
    });
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
      >
        <ImageBackground
          source={require('../../assets/images/abstract.png')}
          style={{
            height: 180,
            resizeMode: 'cover',
          }}
        >
          <View style={{ width: '100%', height: '100%', paddingHorizontal: 25, marginTop: 40 }}>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                fontFamily: 'Poppins-Bold',
              }}
            >
              Explore
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                lineHeight: 23,
                fontWeight: '400',
              }}
            >
              Đội ngũ Catindob luôn {'\n'}muốn đem đến cho bạn những giá trị bổ ích
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            zIndex: 10,
            borderRadius: 28,
            transform: [{ translateY: -25 }],
          }}
        >
          <View style={{ marginTop: 30 }}>
            <View style={{ position: 'relative' }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: 5,
                  height: 22,
                  borderRadius: 10,
                  transform: [{ translateX: 25 }],
                  backgroundColor: colors.primary,
                }}
              />
              <Text
                style={{
                  paddingHorizontal: 38,
                  fontSize: 18,
                  color: colors.text,
                  fontWeight: '700',
                }}
              >
                Tin tức
              </Text>
            </View>

            <View style={{ height: 280, marginTop: 25 }}>
              <Carousel
                ref={carouselRef}
                onSnapToItem={(index) => onSelect(index)}
                layout={'stack'}
                data={news}
                sliderWidth={width}
                itemWidth={width}
                slideStyle={{ paddingHorizontal: 25 }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('BlogDetail', { itemId: item.id });
                    }}
                    activeOpacity={0.7}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Image
                      key={index}
                      style={{
                        width: '100%',
                        height: '50%',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                    <View
                      style={{
                        width: '100%',
                        height: '50%',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: colors.background,
                        padding: 15,
                      }}
                    >
                      <Text
                        style={{ fontWeight: '700', fontSize: 16, color: colors.text }}
                        numberOfLines={2}
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={3}
                        style={{ marginTop: 5, lineHeight: 20, color: colors.text2 }}
                      >
                        {item.content}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Pagination
              inactiveDotColor={'gray'}
              dotColor={colors.primary}
              activeDotIndex={indexSelected}
              dotsLength={news.length}
              animatedDuration={150}
              inactiveDotScale={0.7}
              dotStyle={{ width: 10, height: 10, borderRadius: 100 }}
              containerStyle={{ marginTop: -10 }}
            />
          </View>

          <View style={{ position: 'relative' }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: 5,
                height: 22,
                borderRadius: 10,
                transform: [{ translateX: 25 }],
                backgroundColor: colors.primary,
              }}
            />
            <Text
              style={{
                paddingHorizontal: 38,
                fontSize: 18,
                color: colors.text,
                fontWeight: '700',
              }}
            >
              Cẩm nang
            </Text>
          </View>
          <View style={{ marginTop: 15, paddingHorizontal: 25 }}>
            {handbooks.length > 0 &&
              handbooks.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate('BlogDetail', { itemId: item.id });
                  }}
                  style={{
                    width: '100%',
                    height: 110,
                    backgroundColor: colors.background,
                    borderRadius: 8,
                    flexDirection: 'row',
                    padding: 15,
                    justifyContent: 'space-between',
                    marginBottom: 15,
                  }}
                >
                  <View style={{ width: '70%' }}>
                    <Text style={{ color: colors.secondary, fontWeight: '600' }}>
                      Phát triển bản thân
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ marginTop: 2, fontWeight: '700', fontSize: 16, color: colors.text2 }}
                    >
                      {item?.title}
                    </Text>
                    <Text numberOfLines={2} style={{ marginTop: 1 }}>
                      {item?.content}
                    </Text>
                  </View>
                  <View style={{ height: '100%' }}>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: 80,
                        height: '100%',
                        borderRadius: 8,
                      }}
                    ></Image>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
          <View style={{ marginBottom: 80 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
