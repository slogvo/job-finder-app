import React from 'react'
import { Image, Text, View } from 'react-native'
import colors from '../../assets/colors/colors'

const CardCategory = ({img, companyName, desc, salary, location}) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'row'
    }}>
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 8,
        elevation: 1,
        backgroundColor: 'white',
        alignItems:"center",
        justifyContent: 'center',
        marginRight: 10,
        }}>
        {img}
      </View>
      <View style={{height:'100%', width:'100%'}}>
        <Text
        style={{
          fontSize: 14,
          color: colors.text,
          marginBottom: 5,
          fontWeight:"700"
        }}
        numberOfLines = {2}
        >{desc}</Text>
        <Text
          style={{
            marginTop:-4,
            fontWeight:"500",
            color: colors.text,
            width: 220,
         }}
          numberOfLines = {1}
        >
        {companyName}
        </Text>

        <View style={{
          marginTop:"auto",
          flexDirection:'row',
          alignItems:'center',
          }}>
          <Image 
          source={require("../../assets/images/location.png")}
          style={{
            width: 18,
            height: 18,
            marginRight: 5,
          }}
          ></Image>
          <Text
          numberOfLines = {2}
          style={{
          fontWeight:'400',
          marginRight: 10,
           }}
          >{location}
          </Text>
          <Text
          numberOfLines = {2}
          style={{
          color: colors.secondary,
          fontWeight:'500'
           }}
          >{salary}
          </Text>
        </View>
      </View>
      <Image 
      source={require("../../assets/images/heart_un.png")}
      style={{ 
        elevation:1,
        borderWidth:1,
        marginLeft: "auto",
        width: 25, 
        height: 25 }}
      resizeMode="cover"
      ></Image>
    </View>
  )
}

export default CardCategory