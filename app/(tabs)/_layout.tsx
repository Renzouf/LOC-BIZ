import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from '.';
import LogIn from './LogIn';
import SignUp from './SignUp';
import ResetPass from './ResetPass';
import BusinessCategory from './BusinessCategory';
import Restaurant from './Restaurant';
import Aines from './Aines';
import Badots from './Badots';
import MenuAines from './MenuAines';
import Island_Choice from './Island_Choice';
import Pak_pak from './Pak_pak';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='ResetPass' component={ResetPass} />
        <Stack.Screen name='BusinessCategory' component={BusinessCategory} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
        <Stack.Screen name='Aines' component={Aines} />
        <Stack.Screen name='Badots' component={Badots} />
        <Stack.Screen name='MenuAines' component={MenuAines}/>
        <Stack.Screen name='Island_Choice' component={Island_Choice}/>
        <Stack.Screen name='Pak_pak' component={Pak_pak}/>
      </Stack.Navigator>
  );
}
