import React, { useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MainHome from './MainHome';
import SearchFilterView from './SearchFilterView';
import JobDetail from './JobDetail';
import Recruitment from './Recruitment';
import ExploreScreen from './ExploreScreen';
import BlogDetail from './BlogDetail';

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
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  );
};

export default Home;
