import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MainViewAccount from './MainViewAccount';
import PDFViewAccount from './PDFViewAccount';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Account = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainViewAccount"
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="MainViewAccount" component={MainViewAccount} />
      <Stack.Screen name="PDFViewAccount" component={PDFViewAccount} />
    </Stack.Navigator>
  );
};

export default Account;
