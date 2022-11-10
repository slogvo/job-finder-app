import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import SignIn from './src/views/SignIn';
import GlobalStyles from './GlobalStyles';
import GetStarted from './src/views/GetStarted';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/component/CustomDrawer';
import { Image, Text } from 'react-native';
import colors from './assets/colors/colors';
import FindJobs from './src/views/FindJobs';
import Notifications from './src/views/Notifications';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeDrawer ({navigation}) {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
      drawerStyle:{
        width: 320,
      },
      headerShown:false, 
      drawerActiveBackgroundColor:colors.lightGreen,
      drawerActiveTintColor: colors.primary,
      drawerInactiveTintColor: colors.text,
      drawerLabelStyle:{
        marginLeft: -15, 
        fontSize:16,
        fontWeight: '400'
        // color: colors.primary,
        }
    }}>
          <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon:({color}) =>(<Image source={require("./assets/images/search-drawer.png")} style={{fontSize:30, width:18, height:18}}/>)
          }}/>
          
          <Drawer.Screen name="Việc làm" component={FindJobs} options={{
            drawerIcon:({color}) =>(<Image source={require("./assets/images/search-drawer.png")} style={{fontSize:30, width:18, height:18}}/>)
          }}/>
           <Drawer.Screen name="Thông báo" component={Notifications} options={{
            drawerIcon:({color}) =>(<Image source={require("./assets/images/search-drawer.png")} style={{fontSize:30, width:18, height:18}}/>)
          }}/>
    </Drawer.Navigator>
    )  
}

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