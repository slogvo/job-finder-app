import { Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../../assets/colors/colors";
const windowHeight = Dimensions.get('window').height;

const GetStarted = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
      <ImageBackground source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{
          flex: 1,
          paddingHorizontal: 30
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: 40,
                height: 40,
                marginTop: 25,
                marginRight: 5,
              }}
              resizeMode="cover" />
            <Text style={{
              marginTop: 30,
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 0.5,
              color: "white",
            }}>CatinDob</Text>

          </View>
          <Text style={{
            marginTop: 150,
            fontSize: 25,
            fontWeight: "bold",
            color: 'white',
            lineHeight: 35,
            letterSpacing: 0.5,
          }}>Tìm Kiếm Công Việc{'\n'}Mà Bạn Hằng{'\n'}Mong Ước</Text>
          <Text style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "400",
            lineHeight: 35,
            color: 'white',
          }}>Khám phá các công ty. Đọc và tìm hiểu về các công ty. Lưu các công việc mà bạn yêu thích với {""}
            <Text style={{
              fontWeight: '700',
              fontSize: 20,
              color: colors.primary,
              letterSpacing: 0.5,
            }}>CatinDob</Text></Text>
          <View style={{
            marginTop: 200,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity style={styles.button}
              onPress={() => {
                navigation.navigate("SignIn")
              }}>
              <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600',
              }}>Bắt đầu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>


  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    elevation: 2,
  }
})

export default GetStarted