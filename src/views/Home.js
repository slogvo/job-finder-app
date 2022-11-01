import {Image, ScrollView, StatusBar, Text, TextInput, View } from "react-native"


const Home = () => {
  return (
    <View style={{
      backgroundColor: "#fff",
      }}>
      <ScrollView
      showsVerticalScrollIndicator={true} persistentScrollbar={true}
       style={{
        backgroundColor: "#fff",
        position: "relative",
        paddingHorizontal:25,
        }}
        stickyHeaderIndices={[0]}
        >
        <View style={{}}>
          <View style={{
            width: "100%",
            paddingBottom: 10,
            backgroundColor: "white",
            position: "relative",
            flexDirection:'row',
            alignItems:'center',
            borderBottomWidth: 0.5,
            borderBottomColor:"#f0f0f0",
            justifyContent:'space-between'}}>
             <Image
            source={require('../../assets/images/menu.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}/>
            <Image
            source={require('../../assets/images/search-symbol.png')}
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              left: 50,
              zIndex:10,
              top:15,
      
            }}/>
            <TextInput
             style={{
              paddingVertical:8,
              paddingHorizontal:15,
              paddingLeft:40,
              borderRadius:8,
              width:'88%',
              backgroundColor:"#F9F9FA",
              fontSize: 15,
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
    </View>
  )
}

export default Home