import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import colors from "../../assets/colors/colors"

const SearchLayout = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:"#fff", paddingHorizontal:25,}}>
     <View style={{
      width: "100%",
      paddingBottom: 10,
      backgroundColor: "white",
      position: "relative",
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth: 1,
      borderBottomColor: "#ededed",
      justifyContent:'space-between'}}>
       <TouchableOpacity
       onPress={()=> navigation.openDrawer()}
       >
         <Image
               source={require('../../assets/images/menu.png')}
               style={{
          width: 25,
          height: 25,
          resizeMode: "contain",
               }}/>
       </TouchableOpacity>
      <Image
      source={require('../../assets/images/search-symbol.png')}
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        left: 52,
        zIndex:10,
        top:15,

      }}/>
      <TextInput
       style={{
        paddingVertical:10,
        paddingHorizontal:15,
        paddingLeft:40,
        borderRadius:8,
        width:'88%',
        color: colors.text,
        backgroundColor:"#F9F9FA",
        fontSize: 15,
        }}
        placeholder="Tìm kiếm công việc, công ty,..."
      />
    </View>
  </View>
  )
}

export default SearchLayout