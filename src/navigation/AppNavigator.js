import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screenNames';
import OnboardNavigator from './OnboardNavigator';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREENS.navigators.onboard}
        component={OnboardNavigator}
      />
      <Stack.Screen name={SCREENS.navigators.auth} component={AuthNavigator} />
      <Stack.Screen name={SCREENS.navigators.home} component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
