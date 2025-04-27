import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AgeConfirmationScreen from '../screens/auth/AgeConfirmationScreen';
import CheckInboxScreen from '../screens/auth/CheckInboxScreen';
import CongratulationsScreen from '../screens/auth/CongratulationsScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OtpConfirmationScreen from '../screens/auth/OtpConfirmationScreen';
import PasswordChangedScreen from '../screens/auth/PasswordChangedScreen';
import ResetPasswordOtpScreen from '../screens/auth/ResetPasswordOtpScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import {SCREENS} from './screenNames';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.auth.login} component={LoginScreen} />
      <Stack.Screen name={SCREENS.auth.signUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREENS.auth.ageConfirmation}
        component={AgeConfirmationScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.changedPassword}
        component={PasswordChangedScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.checkInbox}
        component={CheckInboxScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.confirmOTP}
        component={OtpConfirmationScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.congrats}
        component={CongratulationsScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.forgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.resetPassword}
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.resetPasswordOtp}
        component={ResetPasswordOtpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
