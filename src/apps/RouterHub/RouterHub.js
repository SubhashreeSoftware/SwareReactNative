import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoot from '../DrawerRoot/DrawerRoot';

const Stack = createStackNavigator();

const RouterHub = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerRoot">
        <Stack.Screen 
        name="DrawerRoot" 
        component={DrawerRoot} 
        options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterHub;
