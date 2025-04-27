import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {config} from './config/gluestack-ui.config';
import {store} from './src/app/store';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <GluestackUIProvider config={config}>
          <SafeAreaProvider>
            <NavigationContainer>
              <AppNavigator />
              <Toast
                topOffset={verticalScale(50)}
                visibilityTime={6000}
                config={toastConfig}
              />
            </NavigationContainer>
          </SafeAreaProvider>
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green', backgroundColor: '#3C3C3C'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: '#F7D098',
      }}
      text2Style={{color: '#F7D098', fontSize: moderateScale(15)}}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red', backgroundColor: '#3C3C3C'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: 'tomato',
      }}
      text2Style={{color: 'tomato', fontSize: moderateScale(15)}}
    />
  ),

  info: props => (
    <InfoToast
      {...props}
      style={{borderLeftColor: '#F7D098', backgroundColor: '#3C3C3C'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: '#f7e19b',
      }}
      text2Style={{color: '#f7e19b', fontSize: moderateScale(15)}}
    />
  ),
};
