import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import { useGallery } from '../contexts/gallery-context';
import useProduct from '../hooks/useProduct';
import CardCategory from '../layout/CardCategory';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Bookmark = ({ navigation }) => {
  const { catList, toggleFavorite } = useGallery();
  // console.log(catList);

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
              Công việc yêu thích
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          {catList?.length > 0 &&
            catList
              .filter((item) => item.isFavorite === true)
              .map((item) => (
                <CardCategory
                  toggleFavorite={toggleFavorite}
                  key={item.id}
                  id={item.id}
                  isFavorite={item.isFavorite}
                  img={item.companyLogo}
                  companyName={item.companyName}
                  desc={item.companyDescription}
                  salary={item.salary}
                  location={item.companyLocation}
                />
              ))}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default Bookmark;
