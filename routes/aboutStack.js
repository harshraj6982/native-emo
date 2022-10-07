import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';


const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
         name="About" 
         component={About} 
         options={{
          headerTitle: () => <Header />,
        }}
         />
        

      </Stack.Navigator>
    </>
  );
}

export default AboutStack;