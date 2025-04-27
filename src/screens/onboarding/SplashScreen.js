import {Box, StatusBar, Text} from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {LogoIcon} from '../../assets/svg/LogoIcon';

const image = require('../../assets/images/rect.png');

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      const token = await AsyncStorage.getItem('@auth_token');
      const user = await AsyncStorage.getItem('@auth_user');

      if (token && user) {
        await dispatch(setUserAuth(JSON.parse(user)));
        navigation.navigate(SCREENS.navigators.home, {
          screen: SCREENS.home.favoriteCategory,
        });
      }
    };

    // checkTokenAndNavigate();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
        <Box justifyContent="flex-start" width="$full">
          <LogoIcon />
          <Box mt="$6">
            <Text
              fontSize={'$5xl'}
              lineHeight={'$5xl'}
              fontWeight="$bold"
              color="$textSecondary">
              Welcome to iexplore
            </Text>
            <Text color="$textPrimary" width={'80%'} mt={verticalScale(10)}>
              Connecting you to the best of nightlife made for you.
            </Text>
          </Box>
        </Box>
        <Box position="absolute" bottom={verticalScale(64)}>
          <ActivityIndicator size={'large'} color={'#F7D098'} />
        </Box>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(16),
  },
});
