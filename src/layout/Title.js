import React from 'react'
import { Text, View } from 'react-native'
import colors from '../../assets/colors/colors'

const Title = ({title="Đề xuất cho bạn", marginTopCustom, viewAll ="Xem tất cả"}) => {
  return (
    <View style={{
      paddingHorizontal:25,
      flexDirection:"row", 
      justifyContent:"space-between", 
      marginTop: marginTopCustom ? 20 : 0,
      alignItems:"center"}}>
      <Text style={{
          color: colors.text,
          fontSize:20,
          fontFamily: 'SanFranciscoDisplay-Bold',
      }}>
         {title}
      </Text>
      <Text style={{
          color: colors.text,
          fontSize: 16,
          fontFamily: 'SanFranciscoDisplay-Medium',
          color: colors.primary,
      }}>
         {viewAll}
      </Text>
  </View>
  )
}

export default Title