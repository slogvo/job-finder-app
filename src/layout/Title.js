import React from 'react'
import { Text, View } from 'react-native'
import colors from '../../assets/colors/colors'

const Title = ({title="Đề xuất cho bạn", viewAll ="Xem tất cả"}) => {
  return (
    <View style={{
      paddingHorizontal:25,
      flexDirection:"row", 
      justifyContent:"space-between", 
      alignItems:"center"}}>
      <Text style={{
          color: colors.text,
          fontSize:20,
          fontWeight: "500",
      }}>
         {title}
      </Text>
      <Text style={{
          color: colors.text,
          fontSize: 15,
          fontWeight: "500",
          color: colors.primary,
      }}>
         {viewAll}
      </Text>
  </View>
  )
}

export default Title