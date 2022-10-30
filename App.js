import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import GlobalStyles from './GlobalStyles';
import SignIn from './src/views/SignIn';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <SafeAreaView style={GlobalStyles.droidSafeArea}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
//  </SafeAreaView>
  );
}

export default App;