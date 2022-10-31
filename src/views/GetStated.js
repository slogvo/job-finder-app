import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import colors from "../../assets/colors/colors";

const windowHeight = Dimensions.get('window').height;

const GetStated = ({navigation}) => {
  return (
    <View style={{
      flex: 1, 
      backgroundColor: "#fff", 
      alignItems:'center', 
      paddingHorizontal:30}}>
      <Text style={{  
        marginTop: 0.1 * windowHeight,
        fontSize:28,
        fontWeight:'bold',
        color: colors.orange,
         }}>FoxinDob</Text>
      <View style={{
        alignItems:'center', 
        justifyContent:'center', 
        marginTop: 0.1 * windowHeight, 
        }}>
        <Image
           source={require('../../assets/images/logo.png')}
           style={{
            width:150,
            height:150,   
            }}
           resizeMode="cover" />
           <View style={{
          position: "absolute",
          zIndex:-1,
          shadowColor: "#00d1ff",
          opacity:0.25,
           width:160,
           height:160,
           borderRadius:1000,
           backgroundColor: "#00d1ff",
           shadowOffset: {width: 0,height: 2,},
           shadowOpacity: 0.25,
           shadowRadius: 3.84,
           elevation: 5}}/>
      </View>
      <Text style={{
        marginTop:45,
        fontSize:20,
        fontWeight: "bold",
        color: colors.primary,
        }}>Rất vui khi bạn ở đây!</Text>
      <Text style={{
        marginTop:20,
        fontSize:16,
        fontWeight: "400",
        lineHeight:22,
        color: colors.primary,
        textAlign:'center'
        }}>Tìm kiếm công việc mơ ước một cách dễ dàng và nhanh chóng với  {""}
        <Text style={{  
        fontWeight:'600',
        color: colors.orange,
         }}>FoxinDob</Text></Text>

         <TouchableOpacity style={{
          marginTop:80,
          borderRadius:100,
          width:'100%', 
          alignItems:'center', 
          justifyContent:'center',
          backgroundColor: colors.orange,
         paddingVertical: 15
         }}
         onPress={()=>{
          navigation.navigate("Signin")
         }}>
          <Text style={{
            color: 'white',
            fontSize:20,
            fontWeight:'600',
          }}>Bắt đầu</Text>
         </TouchableOpacity>
     </View>
   
  )
}

export default GetStated