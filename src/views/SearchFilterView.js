import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import CardCategory from '../layout/CardCategory';
import GoBackFilter from '../layout/GoBackSearch';
import useProduct from '../hooks/useProduct';
import colors from '../../assets/colors/colors';
import useCategory from '../hooks/useCategory';
import { useGallery } from '../contexts/gallery-context';

const SearchFilterView = ({ navigation }) => {
  const [products, isLoading, fetchProducts, resetList] = useProduct();
  const [searchTerm, setSearchTerm] = useState('');
  const categoryList = useCategory();
  const [type, setType] = useState(0);

  const onChangeText = (text) => {
    if (text.length === 0) {
      setSearchTerm('');
      resetList();
    } else {
      setSearchTerm(text);
      fetchProducts(0, text);
    }
  };

  useEffect(() => {
    fetchProducts(type);
  }, [type, fetchProducts]);

  const { catList, setCatList, toggleFavorite } = useGallery();
  useEffect(() => {
    setCatList(products);
  }, [products]);

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
        {categoryList.length > 0 && (
          <GoBackFilter
            categories={categoryList}
            onChange={setType}
            currentType={type}
            value={searchTerm}
            onChangeText={onChangeText}
            navigation={navigation}
          />
        )}
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
            {type != 0 || searchTerm?.length > 0
              ? `${products.length}+ kết quả tìm thấy`
              : 'Tất cả kết quả'}
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
            {catList?.map((item) => (
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
        )}
        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
    </View>
  );
};

export default SearchFilterView;
