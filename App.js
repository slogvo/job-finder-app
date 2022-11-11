import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import SignIn from './src/views/SignIn';
import GlobalStyles from './GlobalStyles';
import GetStarted from './src/views/GetStarted';
import HomeDrawer from './src/component/HomeDrawer';
const Stack = createNativeStackNavigator();


function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='GetStated' screenOptions={{headerShown:false}}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;