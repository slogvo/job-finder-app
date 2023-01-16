import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/colors/colors';
import CustomDrawer from './CustomDrawer';
import Notifications from '../views/Notifications';
import TabsNavigation from './TabsNavigation';
import ReceivingScreen from '../views/ReceivingScreen';
import MyJobsScreen from '../views/MyJobsScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 320,
        },
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.darkGray,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
          fontFamily: 'Inter-Medium',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabsNavigation}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome
              name="dashboard"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      />

      {/* <Drawer.Screen
        name="Thông báo"
        component={Notifications}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name="notifications"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      /> */}

      <Drawer.Screen
        name="Tiếp nhận hồ sơ"
        component={ReceivingScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-document-text"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Việc làm của tôi"
        component={MyJobsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5
              name="shopping-bag"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Đăng tuyển dụng"
        component={MyJobsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons
              name="post-add"
              color={color}
              style={{
                fontSize: 25,
                top: 2,
                left: 0,
                width: 25,
                height: 30,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
