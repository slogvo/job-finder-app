import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from "../../assets/colors/colors"

const CustomDrawer = ({...props}) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{
        marginTop:-5,
       }}>
        <ImageBackground
          resizeMode ='cover'
          style={{
            padding: 20,
          }}
          source={require('../../assets/images/menu-background.jpg')}
        >
          <View style={{backgroundColor:colors.secondary, borderRadius:100, alignItems:'center', width:70, height:70, marginBottom:10}}>
          <Image source={require('../../assets/images/avatar.png')} resizeMode='cover'
          style={{
            width:'100%',
            height:'100%',
            borderRadius:100
          }}
         />
          </View>
          <Text style={{
              color: 'white',
              fontSize:20,
              fontWeight: 'bold'}}>
              Perpetio
          </Text>
          <Text style={{
              color: 'white',
              fontSize:15, 
              fontWeight: "600"}}>
              Hồ sơ
          </Text>
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10,
        paddingHorizontal: 10,
        }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
        <TouchableOpacity
        onPress={() =>{
          props.navigation.navigate("SignIn");
        }}
        >
          <Text
          style={{
            color:colors.secondary,
            fontSize:16,
          }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer