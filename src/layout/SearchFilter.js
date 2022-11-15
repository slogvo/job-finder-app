import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import GoBackFilter from './GoBackSearch'
import SearchLayout from './SearchLayout'

const SearchFilter = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      width: '100%',
      backgroundColor: "#f7f7f7",
      paddingTop: 10,
    }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: "#f7f7f7",
          position: "relative",
        }}
        stickyHeaderIndices={[0]}
      >
        <GoBackFilter navigation={navigation}></GoBackFilter>
      </ScrollView>
    </View>
  )
}

export default SearchFilter