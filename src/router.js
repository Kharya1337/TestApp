import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoList from './containers/PhotoList';
import PhotoPage from './containers/Photo';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="PhotoList"
        component={PhotoList}
      />
      <Stack.Screen
        name="Photo"
        component={PhotoPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
