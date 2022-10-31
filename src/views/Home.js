import { FlatList, Image, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Home = () => {
  return (
    <ScrollView
     style={{
      backgroundColor: "#fff", 
      position: "relative",
      paddingHorizontal:25
      }}
      stickyHeaderIndices={[0]}
      >
      <View>
        <View style={{
          width: "100%",  
          paddingBottom: 10,
          backgroundColor: "white",
          position: "relative",
          flexDirection:'row',
          alignItems:'center',
          borderBottomWidth: 0.5,
          justifyContent:'space-between'}}>
           <Image
          source={require('../../assets/images/menu.png')}
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
          }}/> 
          <Image
          source={require('../../assets/images/search-symbol.png')}
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            left: 55,
            zIndex:10,
            top:15,
           
          }}/> 
          <TextInput
           style={{
            paddingVertical:10,
            paddingHorizontal:15,
            paddingLeft:40,
            borderRadius:8,
            width:300,
            backgroundColor:"#F9F9FA",
            fontSize: 16,
            }}
            placeholder="Tìm kiếm công việc, công ty,..."
          />
        </View>
      </View>
    <View style={{
        marginTop: 20,
        width: '100%',
        alignItems:'center'
        }}>
      <Image source={require('../../assets/images/banner-1.png')}
      style={{
        width: '100%',
        height: 200,
        borderRadius:16,
        resizeMode: "cover",
      }}
     />
    </View>
    <View>
      <Text>Đề xuất cho bạn</Text>
      <View style={{flexDirection:"row"}}>
        <View style={{
          width:250,
          height:135,
          backgroundColor:'#f5f5f5',
          marginRight: 15,
        }}></View>
         <View style={{
          width:250,
          height:135,
          backgroundColor:'red'
        }}></View>
        
      </View>
    </View>

    <View>
      <Text>Danh mục hot</Text>
      <View style={{}}>
        <View style={{
          width:'100%',
          height:100,
          backgroundColor:'#f5f5f5',
          marginRight: 15,
          marginBottom: 15,
        }}/>
        <View style={{
          width:'100%',
          height:100,
          backgroundColor:'#f5f5f5',
          marginRight: 15,
          marginBottom: 15,
        }}/>
        <View style={{
          width:'100%',
          height:100,
          backgroundColor:'#f5f5f5',
          marginRight: 15,
          marginBottom: 15,
        }}/>
        <View style={{
          width:'100%',
          height:100,
          backgroundColor:'#f5f5f5',
          marginRight: 15,
          marginBottom: 15,
        }}/>
        <View style={{
          width:'100%',
          height:100,
          backgroundColor:'#f5f5f5',
          marginRight: 15,
          marginBottom: 15,
        }}/>
      </View>
    </View>
  </ScrollView>
  )
}

export default Home