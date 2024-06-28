import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoot from '../DrawerRoot/DrawerRoot';
import TestScreen from '../../libs/screenComponents/sware-home-component/organisms/TestScreen/TestScreen';
import FlatlistJ from '../../libs/screenComponents/sware-home-component/organisms/FlatlistJ/FlatlistJ';
import CustomFormHeader from '../../libs/atoms/CustomFormHeader';
import ReviewScreenJ from '../../libs/screenComponents/sware-home-component/organisms/ReviewScreenJ/ReviewScreenJ';
import ProfileHeaderJ from '../../libs/atoms/ProfileHeaderJ/ProfileHeaderJ';
import CardscreenJ from '../../libs/screenComponents/sware-home-component/organisms/CardScreenJ/CardscreenJ';
import FormScreenJ from '../../libs/screenComponents/sware-home-component/organisms/FormScreenJ/FormScreenJ';
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
        name="CardscreenJ" 
        component={CardscreenJ} 
        options={(props) => ({
          headerShown: true,
          header: () => <ProfileHeaderJ
          image={require('../../../assets/ReviewScreenJ/leftarrow.png')}
          title= "CardScreen"
          imageOne={require('../../../assets/ReviewScreenJ/more.png')}
          
          onPressright={() => { navigation.navigate('NotificationPage') }}
          drawer
          />,
        })} 
        />
        <Stack.Screen 
        name="FlatlistJ" 
        component={FlatlistJ} 
        options={(props) => ({
          headerShown: true,
          header: () => <ProfileHeaderJ
          image={require('../../../assets/ReviewScreenJ/leftarrow.png')}
          title= "Flatlist"
          imageOne={require('../../../assets/ReviewScreenJ/more.png')}
          
          onPressright={() => { navigation.navigate('NotificationPage') }}
          drawer
          />,
        })}
      />
          <Stack.Screen 
        name="ReviewScreenJ" 
        component={ReviewScreenJ}
        options={(props) => ({
          headerShown: true,
          header: () => <ProfileHeaderJ
          image={require('../../../assets/ReviewScreenJ/leftarrow.png')}

          title= "4.8 (1.275 reviews)"
          imageOne={require('../../../assets/ReviewScreenJ/more.png')}
           onPressleft={() => navigation.goBack()}
          onPressright={() => { navigation.navigate('NotificationPage') }}
          
          />,
        })}
      
        />

<Stack.Screen 
        name="FormScreenJ" 
        component={FormScreenJ}
        options={(props) => ({
          headerShown: true,
          header: () => <ProfileHeaderJ
          image={require('../../../assets/ReviewScreenJ/leftarrow.png')}

          title= "4.8 (1.275 reviews)"
          imageOne={require('../../../assets/ReviewScreenJ/more.png')}
           onPressleft={() => navigation.goBack()}
          onPressright={() => { navigation.navigate('NotificationPage') }}
          
          />,
        })}
      
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterHub;
