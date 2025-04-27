import {StyleSheet} from 'react-native';
import React from 'react';
import {Box} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import FlatButton from '../../components/buttons/FlatButton';
import {ShieldIcon} from '../../assets/svg/ShieldIcon';
import {SCREENS} from '../../navigation/screenNames';

const PasswordChangedScreen = ({navigation}) => {
  return (
    <Box justifyContent="center" alignItems="center" flex={1} bg="$background">
      <Box px={'$10'} pb={'$7'} justifyContent="center" alignItems="center">
        <ShieldIcon />
        <Text
          my={'$5'}
          fontWeight="$semibold"
          color="$textSecondary"
          fontSize={'$3xl'}
          lineHeight={'$2xl'}
          textAlign="center">
          Password changed
        </Text>
        <Text
          textAlign="center"
          color="$textSecondary"
          fontSize={'$md'}
          mb={'$10'}>
          Your password has been changed successfully
        </Text>
      </Box>
      <FlatButton
        width="80%"
        title="Back to Login"
        onPress={() => {
          navigation.navigate(SCREENS.auth.login);
        }}
      />
    </Box>
  );
};

export default PasswordChangedScreen;

const styles = StyleSheet.create({});
