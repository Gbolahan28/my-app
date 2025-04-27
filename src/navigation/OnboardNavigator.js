import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screenNames';
import SplashScreen from '../screens/onboarding/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';

const Stack = createNativeStackNavigator();

const OnboardNavigator = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {showSplash && (
        <Stack.Screen name={SCREENS.onBoard.splash} component={SplashScreen} />
      )}
      <Stack.Screen
        name={SCREENS.onBoard.onboarding}
        component={OnboardingScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardNavigator;
