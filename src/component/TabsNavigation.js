import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import FindJobs from '../views/Bookmark';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Explore from '../views/Explore';
import { GalleryProvider } from '../contexts/gallery-context';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <GalleryProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.darkGray,
          tabBarLabelStyle: {},
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            bottom: 12,
            right: 20,
            left: 20,
            borderRadius: 10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabelStyle: {
              fontSize: 11,
              marginTop: -15,
              marginBottom: 5,
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="home"
                color={color}
                style={{
                  marginTop: -10,
                  fontSize: 22,
                  width: 22,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Yêu thích"
          component={FindJobs}
          options={{
            tabBarLabelStyle: {
              fontSize: 11,
              marginTop: -10,
              marginBottom: 5,
            },
            tabBarLabel: 'Yêu thích',
            tabBarIcon: ({ color }) => (
              <FontAwesome
                name="bookmark"
                color={color}
                style={{
                  fontSize: 22,
                  width: 22,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Khám phá"
          component={Explore}
          options={{
            tabBarLabelStyle: {
              fontSize: 11,
              marginTop: -10,
              marginBottom: 5,
            },
            tabBarLabel: 'Khám phá',
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="explore"
                color={color}
                style={{
                  fontSize: 25,
                  width: 25,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Tài khoản"
          component={Explore}
          options={{
            tabBarLabelStyle: {
              fontSize: 11,
              marginTop: -10,
              marginBottom: 5,
            },
            tabBarLabel: 'Tài khoản',
            tabBarIcon: ({ color }) => (
              <FontAwesome
                name="user"
                color={color}
                style={{
                  fontSize: 22,
                  width: 22,
                }}
              />
            ),
          }}
        />
        {/* <Tab.Screen name="SalaryReport" component={SalaryReport}></Tab.Screen> */}
      </Tab.Navigator>
    </GalleryProvider>
  );
};

export default TabsNavigation;
