import { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from "../../assets/colors/colors"

const SearchLayout = ({ navigation }) => {

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
          onPress={() => navigation.openDrawer()}
        >
          <Image
            source={require('../../assets/images/menu.png')}
            style={{
              width: 25,
              height: 25,
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
            width: '88%',
            color: colors.text,
            backgroundColor: "#FFF",
            fontSize: 15,
          }}
          placeholder="Tìm kiếm công việc, công ty,..."
          onFocus={() => {
            navigation.navigate("SearchFilter")
          }}
        />
      </View>
    </View>
  )
}

export default SearchLayout