import { useState } from "react";
import {Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../assets/colors/colors";
// const windowHeight = Dimensions.get('window').height;

const Signin = ({navigation}) => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  return (
    <View style={{
      flex:1, 
      backgroundColor:'#fff'
      }}>
     <StatusBar 
     backgroundColor="#fff" 
     barStyle='dark-content' />
     
     <View style={{
      flexDirection:'column', 
      paddingHorizontal: 35 
      }}>
      <Text style={{
        fontWeight:'bold', 
        fontSize:20, 
        color:colors.primary, 
        textAlign:'center'}}> Đăng Nhập
      </Text>

       <View style={{ 
        width:'100%', 
        marginTop: 30, 
        flexDirection:'row',
        justifyContent: 'center', 
        alignItems: 'center'
        }}>
       
         <Text style ={{
          fontSize:24, 
          fontWeight:'bold', 
          letterSpacing:0.5,
          color: colors.secondary
          }}>Welcome to <Text style ={{color: colors.orange}}>FoxinDob!</Text></Text> 
       </View>
          <Text style={{
            textAlign:'center', 
            marginTop:10, 
            fontSize:15, 
            fontWeight:'400',
            lineHeight:22,
            color: colors.primary
            }}>Tạo ra một tương lai tốt đẹp hơn cho chính bạn!</Text>
       <View style={{
        alignItems: "flex-start", 
        justifyContent: "flex-start", 
        marginTop:30
        }}>
         <Text style={{
          fontSize:15
          }}>Email</Text>
         <TextInput 
         style={{
          marginTop:8, 
          borderWidth:1, 
          width:'100%', 
          borderRadius:5, 
          height: 50, 
          borderColor: activeEmail ? colors.secondary : '#ccc',
          paddingLeft:15
          }}
          placeholder ="Nhập email"
          onFocus={() => setActiveEmail(true)} 
          onBlur={() => setActiveEmail(false)}
          />
       </View>
       <View style={{
        alignItems:"flex-start", 
        justifyContent: "flex-start", 
        marginTop:20
        }}>
         <Text style={{
          fontSize:15
          }}>Mật khẩu</Text>
         <TextInput 
         style={{
          marginTop:8, 
          borderWidth:1, 
          width:'100%', 
          borderRadius:5, 
          height: 50,
          borderColor: activePassword? colors.secondary : '#ccc',
          paddingLeft:15}}
         placeholder ="Nhập password"
         secureTextEntry={true}
         onFocus={() => setActivePassword(true)} 
         onBlur={() => setActivePassword(false)}

         />
       </View>
       <View style={{
        flexDirection: 'row',
        justifyContent:'space-between', 
        marginTop:20, }}>
        <Text style={{
          color:colors.secondary, 
          fontSize:15, 
          fontWeight:'600', 
          letterSpacing:0.2
          }}>Đăng Ký </Text>
        <Text style={{
          color:colors.secondary, 
          fontSize:15, 
          fontWeight:'600',
          letterSpacing:0.2
          }}>Quên Mật Khẩu </Text>
       </View>
       
       <TouchableOpacity style={{
        width:'100%', 
        height:50, 
        backgroundColor:colors.orange, 
        borderRadius:50, 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:25}}
        onPress={()=>{
          navigation.navigate("Home")
        }}
        >
         <Text style={{
          color: 'white', 
          fontSize:18}}>
          Đăng Nhập</Text>
       </TouchableOpacity>

       <View style={{
        width: '100%', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        marginTop: 20}}>
           <View style={{
            width:'40%', 
            height:1, 
            backgroundColor: colors.border,
            }}/>
           <Text>Hoặc</Text>
           <View style={{
            width:'40%', 
            height:1, 
            backgroundColor: colors.border
            }}/>
       </View>
       <TouchableOpacity style={{
        borderWidth:1, 
        borderColor:'#eee',
        width:'100%', 
        height:50, 
        borderRadius:50, 
        alignItems:'center', 
        flexDirection: 'row', 
        marginTop:25, 
        paddingHorizontal:30}}>
       <Image 
        source={require('../../assets/images/google.png')}
        style={{
          width:22,
          height:22,
          }}
        resizeMode='cover'
       />
      
       <Text style={{
        color: 'white', 
        fontSize:17, 
        color:'#292524',
        marginLeft:20 
        }}>Đăng nhập bằng Google</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default Signin