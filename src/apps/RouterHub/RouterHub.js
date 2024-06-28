import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoot from '../DrawerRoot/DrawerRoot';
import TestScreen from '../../libs/screenComponents/sware-home-component/organisms/TestScreen/TestScreen';
import EReceiptScreen from '../../libs/screenComponents/sware-home-component/organisms/EReceiptScreen/EReceiptScreen';
import FirstCardScreen from '../../libs/screenComponents/sware-home-component/organisms/FirstCardScreen/FirstCardScreen';
import FlatListScreen from '../../libs/screenComponents/sware-home-component/organisms/FlatListScreen/FlatListScreen';
import FormScreenA from '../../libs/screenComponents/sware-home-component/organisms/FormScreenA/FormScreenA';
import HelpCenterScreen from '../../libs/screenComponents/sware-home-component/organisms/HelpCenterScreen/HelpCenterScreen';
import CustomFormHeader from '../../libs/atoms/CustomFormHeader';
import ChatScreenA from '../../libs/screenComponents/sware-home-component/organisms/ChatSCreenA/ChatScreenA';

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
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EReceiptScreen"
          component={EReceiptScreen}
          options={({ navigation }) => ({
            headerShown: true,
            header: () => <CustomFormHeader
              heading="EReceipt"
              imageleft={require("../../../assets/common/backicon.png")}
              imageright={require("../../../assets/common/more.png")}
              onPressright={() => { navigation.navigate('NotificationPage') }}
              onPressleft={() => navigation.goBack()}
              drawer={false}
              navigation={navigation}
            />
          })}
        />
        <Stack.Screen
          name="FirstCardScreen"
          component={FirstCardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlatListScreen"
          component={FlatListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormScreenA"
          component={FormScreenA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={({ navigation }) => ({
            headerShown: true,
            header: () => (
              <CustomFormHeader
                heading="Help Center"
                imageleft={require("../../../assets/common/backicon.png")}
                imageright={require("../../../assets/common/more.png")}
                onPressright={() => { navigation.navigate('NotificationPage') }}
                onPressleft={() => navigation.goBack()}
                drawer={false}
                navigation={navigation}
              />
            ),
          })}
        />

        <Stack.Screen
          name="ChatScreenA"
          component={ChatScreenA}
          options={(props) => ({
            headerShown: true,
            header: () => (
              <CustomFormHeader
                heading="Customer Service"
                imageleft={require("../../../assets/common/backicon.png")}
                imageright={require("../../../assets/common/Phone.png")}
                onPressright={() => { props.navigation.navigate('NotificationPage') }}
                onPressleft={() => props.navigation.goBack()} 
                drawer={false}
              />
            ),
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterHub;
