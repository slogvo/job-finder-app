import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/views/SignIn';
import GetStarted from './src/views/GetStarted';
import DrawerNavigation from './src/component/DrawerNavigation';
import SignUp from './src/views/SignUp';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStated" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStated" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
