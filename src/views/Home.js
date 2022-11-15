import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHome from '../layout/MainHome';
import SearchFilter from '../layout/SearchFilter';
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainHome"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainHome" component={MainHome} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
    </Stack.Navigator>
  )
}

export default Home