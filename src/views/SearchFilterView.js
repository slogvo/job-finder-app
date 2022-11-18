import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, ActivityIndicator } from 'react-native'
import CardCategory from '../layout/CardCategory'
import GoBackFilter from '../layout/GoBackSearch'
import Title from "../layout/Title"
import useProduct from '../hooks/useProduct'
import colors from '../../assets/colors/colors'
import useCategory from '../hooks/useCategory'

const SearchFilterView = ({ navigation }) => {
  const [products, isLoading, fetchProducts] = useProduct();
  const [searchTerm, setSearchTerm] = useState("");
  const categoryList = useCategory();
  const [type, setType] = useState(0);
  useEffect(() => {
    fetchProducts(type);
  }, [type, fetchProducts])
  return (
    <View style={{
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
      paddingTop: 10,
    }}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: "#fff",
          position: "relative",
        }}
        stickyHeaderIndices={[0]}
      >
        {categoryList.length > 0 &&
          <GoBackFilter
            categories={categoryList}
            onChange={setType}
            currentType={type}
            value={searchTerm}
            onChangeText={setSearchTerm}
            navigation={navigation} />}
        <Title title="Tất cả kết quả" marginTopCustom viewAll=""></Title>
        {isLoading ?
          <View style={{ marginTop: 10 }}>
            <ActivityIndicator size="large" color={colors.primary}></ActivityIndicator>
          </View> :
          <View style={{
            marginTop: 10,
            width: '100%',
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} >
            {products?.map((item) =>
              <View
                key={item.id}
                style={{
                  marginTop: 15,
                  width: '100%',
                  height: 90,
                  backgroundColor: 'red',
                  borderRadius: 16,
                  backgroundColor: "#fff",
                  padding: 10,
                  elevation: 2,
                }}>
                <CardCategory
                  navigation={navigation}
                  img={item.companyLogo}
                  companyName={item.companyName}
                  desc={item.companyDescription}
                  salary={item.salary}
                  location={item.companyLocation}
                >
                </CardCategory>
              </View>
            )}
          </View>
        }
        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
    </View>
  )
}

export default SearchFilterView