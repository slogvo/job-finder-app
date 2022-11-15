import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/colors/colors'

const GoBackFilter = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f7", paddingHorizontal: 25, }}>
      <View style={{
        width: "100%",
        paddingBottom: 10,
        backgroundColor: "#f7f7f7",
        position: "relative",
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#e2e2e2",
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/images/close.png')}
            style={{
              width: 21,
              height: 21,
              resizeMode: "contain",
            }} />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/search-symbol.png')}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: 60,
            zIndex: 10,
            top: 16,
          }} />
        <TextInput
          style={{
            paddingVertical: 12,
            paddingHorizontal: 15,
            paddingLeft: 50,
            borderRadius: 8,
            marginLeft: 20,
            width: '70%',
            color: colors.text,
            backgroundColor: "#FFF",
            fontSize: 16,
          }}
          placeholder="Nhập chức danh"
        />
        <View style={{
          backgroundColor: colors.primary, 
          width: 40,
          height: 40,
          justifyContent:'center',
          alignItems: 'center',
          marginLeft: 20,
          borderRadius: 8
        }}>
          <Image
            source={require('../../assets/images/filter.png')}
            style={{
              width: 30,
              height: 30,
              zIndex: 100,
            }} />
        </View>
      </View>
    </View>
  )
}

export default GoBackFilter