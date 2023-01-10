import React, { useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MainHome from './MainHome';
import SearchFilterView from './SearchFilterView';
import JobDetail from './JobDetail';
import Recruitment from './Recruitment';
import ReceivingListScreen from './ReceivingListScreen';
import ReceivingDetailScreen from './ReceivingDetailScreen';
import CandidateDetail from './CandidateDetail';
import PDFView from './PDFView';

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

const ReceivingScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReceivingListScreen"
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="ReceivingListScreen" component={ReceivingListScreen} />
      <Stack.Screen name="ReceivingDetailScreen" component={ReceivingDetailScreen} />
      <Stack.Screen name="CandidateDetail" component={CandidateDetail} />
      <Stack.Screen name="PDFView" component={PDFView} />
    </Stack.Navigator>
  );
};

export default ReceivingScreen;
