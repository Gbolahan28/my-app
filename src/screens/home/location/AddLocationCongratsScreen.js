import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../lib/screenUtils';
import {CongratsIcon} from '../../../assets/svg/CongratsIcon';
import FlatButton from '../../../components/buttons/FlatButton';
import {useNavigation} from '@react-navigation/native';
import { SCREENS } from '../../../navigation/screenNames';

const backDrop = require('../../../assets/images/backDrop.png');

const AddLocationCongratsScreen = () => {
  const navigation = useNavigation();
  return (
    <Box
      bg="$textTertiary"
      flex={1}
      px={'$6'}
      alignItems="center"
      justifyContent="center">
      <ImageBackground source={backDrop} style={styles.imageBackground} />
      <Box
        bg="$background"
        alignItems="center"
        justifyContent="center"
        w={'$full'}
        py={'$10'}
        px={'$9'}
        borderRadius={'$5xl'}>
        <CongratsIcon />
        <Box mt={'$2'}>
          <Text
            my={'$5'}
            fontWeight="$bold"
            color="$textSecondary"
            fontSize={'$3xl'}
            lineHeight={'$2xl'}
            textAlign="center">
            Spot submitted
          </Text>
          <Text
            textAlign="center"
            color="$textSecondary"
            fontSize={'$md'}
            mb={'$10'}>
            Thank you again, we’ll have our team verify spot details and have location on iexplore very soon          </Text>
        </Box>
        <FlatButton
          title="Go home"
          onPress={() =>navigation.navigate(SCREENS.home.dashboard)}
        />
      </Box>
    </Box>
  );
};

export default AddLocationCongratsScreen;

const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});