import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/colors/colors';
import FirebaseApp from '../firebase/FirebaseApp';
const windowHeight = Dimensions.get('window').height;

const GetStarted = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 30,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: 40,
                height: 40,
                marginTop: 25,
                marginRight: 5,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                marginTop: 30,
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                letterSpacing: 0.5,
                color: 'white',
              }}
            >
              CatinDob
            </Text>
          </View>
          <Text
            style={{
              marginTop: 70,
              fontSize: 32,
              color: 'white',
              lineHeight: 40,
              textAlign: 'center',
              letterSpacing: 0.2,
              fontFamily: 'Poppins-Bold',
            }}
          >
            Let's Find Your Dream Jobs!
          </Text>
          <Text
            style={{
              marginTop: 340,
              fontSize: 17,
              paddingHorizontal: 10,
              fontWeight: '400',
              lineHeight: 27,
              textAlign: 'center',
              color: colors.darkGray,
            }}
          >
            Khám phá các công ty. Đọc và tìm hiểu về các công ty. Lưu các công việc mà bạn yêu thích
            với {''}
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                color: colors.primary,
                letterSpacing: 0.5,
              }}
            >
              CatinDob
            </Text>
          </Text>
          <View
            style={{
              marginTop: 50,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 19,
                  fontWeight: 'bold',
                }}
              >
                Bắt đầu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    elevation: 2,
  },
});

export default GetStarted;
