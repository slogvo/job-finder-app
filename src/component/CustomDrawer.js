import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from "../../assets/colors/colors"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"

const CustomDrawer = ({ ...props }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{
        marginTop: -5,
      }}>
        <ImageBackground
          resizeMode='cover'
          style={{
            padding: 20,
          }}
          source={require('../../assets/images/drawer-image.png')}
        >
          <View style={{ backgroundColor: colors.secondary, borderRadius: 100, alignItems: 'center', width: 70, height: 70, marginBottom: 10 }}>
            <Image 
            source={require('../../assets/images/avatar.png')} 
            resizeMode='cover'
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 100
              }}
            />
          </View>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: -5
          }}>
            Long Vo
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 15,
            fontWeight: "600",
            // marginTop: 5,
          }}>
            Hồ sơ {" "}
            <AntDesign name="edit" size={15}/>
          </Text>
        </ImageBackground>
        <View style={{
          flex: 1, backgroundColor: '#fff', paddingTop: 10,
          paddingHorizontal: 3,
        }}>
          <DrawerItemList {...props} />

        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 10, borderRadius: 8, }}
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        >
          <Ionicons name="ios-settings-sharp" size={22} color={colors.darkGray} />
          <Text
            style={{
              marginLeft: 20,
              color: colors.darkGray,
              fontWeight: '500',
              fontSize: 16,
            }}>Cài đặt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 10, borderRadius: 8, }}
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        >
          <AntDesign name="logout" size={22} color={colors.darkGray} />
          <Text
            style={{
              marginLeft: 20,
              color: colors.darkGray,
              fontWeight: '500',
              fontSize: 16,
            }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer