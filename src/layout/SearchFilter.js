import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import CardCategory from './CardCategory'
import GoBackFilter from './GoBackSearch'
import SearchLayout from './SearchLayout'
import Title from './Title'
import AllJobs from "../../assets/data/AllJobs"

const SearchFilter = ({ navigation }) => {
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
        <GoBackFilter navigation={navigation}></GoBackFilter>
        <Title title="Tất cả công việc" marginTopCustom viewAll=""></Title>
        <View style={{
          marginTop: 10,
          width: '100%',
          paddingHorizontal: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          {AllJobs?.map((item) =>
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
        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
    </View>
  )
}

export default SearchFilter