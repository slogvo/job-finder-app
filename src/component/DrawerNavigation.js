import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/colors/colors'
import SalaryReport from '../views/SalaryReport';
import CustomDrawer from './CustomDrawer';
import MyJobs from '../views/Myjob';
import FindJobs from '../views/FindJobs';
import Notifications from '../views/Notifications';
import Home from '../views/Home';


const Drawer = createDrawerNavigator();

function DrawerNavigation ({navigation}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
      
      drawerStyle:{
        width: 320,
      },
      headerShown:false, 
      drawerActiveBackgroundColor: colors.lightGreen,
      drawerActiveTintColor: colors.primary,
      drawerInactiveTintColor: "#424244",
      drawerLabelStyle:{
        marginLeft: -15, 
        fontSize:16,
        fontWeight: '400',
        alignItems:'center',
        justifyContent:'center',
        }
    }}>
          <Drawer.Screen 
          name="Home" component={Home} options={{
            drawerIcon:({color}) =>(<Ionicons name="home" color={color} 
            style={{
              fontSize:22,
              top:2,
              left:0,
              width:22, 
              height:30}}/>)
          }}/>
          
          <Drawer.Screen name="Việc làm" component={FindJobs} options={{
            drawerIcon:({color}) =>(<Ionicons name="search" color={color} style={{
              fontSize:22,
              top:2,
              left:0,
              width:22, 
              height:30}}/>)
          }}/>
           <Drawer.Screen name="Thông báo" component={Notifications} options={{
             drawerIcon:({color}) =>(<Ionicons name="notifications" color={color} style={{
              fontSize:22,
              top:2,
              left:0,
              width:22, 
              height:30}}/>)
          }}/>

          <Drawer.Screen name="Báo cáo lương" component={SalaryReport} options={{
             drawerIcon:({color}) =>(<FontAwesome5 name="money-check" color={color} style={{
              fontSize:22,
              top:2,
              left:0,
              width:22, 
              height:30
              }}/>)
          }}/>

          <Drawer.Screen name="Việc làm của tôi" component={MyJobs} options={{
             drawerIcon:({color}) =>(<FontAwesome5 name="shopping-bag" color={color} style={{
              fontSize:22,
              top:2,
              left:0,
              width:22, 
              height:30
              }}/>)
          }}/>
    </Drawer.Navigator>
    )  
}
export default DrawerNavigation