import React, { useState } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MainHome from '../layout/MainHome';
import SearchFilter from '../layout/SearchFilter';

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

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainHome"
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="MainHome" component={MainHome} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
    </Stack.Navigator>
  )
}

export default Home