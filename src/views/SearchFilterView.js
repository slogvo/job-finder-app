import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import CardCategory from '../layout/CardCategory';
import GoBackFilter from '../layout/GoBackSearch';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import useRemoveTones from '../hooks/useRemoveTones';

const SearchFilterView = ({ navigation }) => {
  const removeVNeTones = useRemoveTones();
  const [queryText, setQueryText] = useState('');
  const [type, setType] = useState(0);
  const [categoriesList, setCategoriesList] = useState([]);
  const [catsList, setCatsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeText = (text) => {
    setQueryText(text);
  };

  useEffect(() => {
    setIsLoading(true);
    firestore()
      .collection('posts')
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log('posts: ', posts);
        const list = posts.filter((item) => {
          const addressRef = removeVNeTones(item.address).toLowerCase();
          const careerRef = removeVNeTones(item.career).toLowerCase();
          const name_companyRef = removeVNeTones(item.name_company).toLowerCase();
          const queryTextRef = removeVNeTones(queryText).toLowerCase();
          if (
            addressRef.includes(queryTextRef) ||
            careerRef.includes(queryTextRef) ||
            name_companyRef.includes(queryTextRef)
          )
            return item;
        });
        setCatsList(list);
        setIsLoading(false);
      });
  }, [queryText]);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 10,
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
        <GoBackFilter
          categories={categoriesList}
          onChange={setType}
          currentType={type}
          value={queryText}
          onChangeText={onChangeText}
          navigation={navigation}
        />

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 25,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 14,
              fontFamily: 'Inter-Medium',
            }}
          >
            {/* {type != 0 || query?.length > 0
              ? `${products.length}+ kết quả tìm thấy`
              : 'Tất cả kết quả'} */}
            {queryText?.length > 0 ? `+${catsList.length} kết quả tìm thấy` : 'Tất cả kết quả'}
          </Text>
        </View>
        {isLoading ? (
          <View style={{ marginTop: 10 }}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <View
            style={{
              marginTop: 10,
              width: '100%',
              paddingHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {catsList?.map((item) => (
              <CardCategory
                // toggleFavorite={toggleFavorite}
                // isFavorite={item.isFavorite}
                key={item.id}
                id={item.id}
                companyLogo={item.image}
                companyName={item.name_company}
                companyAddress={item.address}
                wage={item.wage}
                career={item.career}
                title={item.title}
              />
            ))}
          </View>
        )}

        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
    </View>
  );
};

export default SearchFilterView;
