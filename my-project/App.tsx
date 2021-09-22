import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useCachedResources from './hooks/useCachedResources';

import { HomeScreen } from "./components/HomeScreen"
import { CheckInScreen } from "./components/CheckInScreen"
import { CheckOutScreen } from './components/CheckOutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Check-in" component={CheckInScreen} />
          <Stack.Screen name="Check-Out" component={CheckOutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
