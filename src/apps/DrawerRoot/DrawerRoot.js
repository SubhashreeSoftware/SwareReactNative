import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../libs/screenComponents/sware-home-component/organisms/HomeScreen';
import ProfileScreen from '../../libs/screenComponents/sware-home-component/organisms/ProfileScreen';
import CustomFormHeader from '../../libs/atoms/CustomFormHeader';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Custom Drawer Content
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Help" onPress={() => alert('Link to help')} />
  </DrawerContentScrollView>
);

// Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={(props) => ({
        headerShown: true,
        header: () => <CustomFormHeader
          heading="SWARE TEST"
          imageleft={require("../../../assets/common/group2.png")}
          imageright={require("../../../assets/Home/notification-bell.png")}
          onPressright={() => { navigation.navigate('NotificationPage') }}
          drawer
          />,
        })}
      />
      <Tab.Screen 
      name="Profile"
      component={ProfileScreen} 
      />
    </Tab.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
      name="Tabs" 
      component={TabNavigator} 
      options={(props) => ({
        headerShown: false,
      })}
      />
    </Drawer.Navigator>
  );
};

// Stack Navigator (if needed)
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

// Exporting the Drawer Navigator directly
export default DrawerNavigator;
