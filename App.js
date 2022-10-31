import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import GlobalStyles from './GlobalStyles';
import Signin from './src/views/Signin';
import GetStated from './src/views/GetStated';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <SafeAreaView style={GlobalStyles.droidSafeArea}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStated' screenOptions={{headerShown:false}}>
      <Stack.Screen name="GetStated" component={GetStated} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
//  </SafeAreaView>
  );
}

export default App;