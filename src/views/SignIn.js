import { ImageBackground, SafeAreaView, StatusBar, Text } from "react-native"

const SignIn = () => {
  return (
    <SafeAreaView>
      <ImageBackground
      // source={require('')}
      resizeMode="cover"
        >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Text>Sign In </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SignIn