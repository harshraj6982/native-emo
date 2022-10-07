import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

import Header from '../shared/header';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home" 
         component={Home} 
         options={{
          headerTitle: () => <Header />,
        }}
         />
        <Stack.Screen 
          name="ReviewDetails" 
          component={ReviewDetails} 
          options={{
          title: 'Review Details',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
          />

      </Stack.Navigator>
    </>
  );
}

export default HomeStack;