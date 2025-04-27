import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../lib/screenUtils';
import {CongratsIcon} from '../../../assets/svg/CongratsIcon';
import FlatButton from '../../../components/buttons/FlatButton';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../navigation/screenNames';

const confetti = require('../../../assets/images/confetti.png');
const backDrop = require('../../../assets/images/backDrop.png');

const DrinkClaimedCongratulationsScreen = () => {
  const navigation = useNavigation();
  return (
    <Box
      bg="$textTertiary"
      flex={1}
      px={'$6'}
      alignItems="center"
      justifyContent="center">
      <ImageBackground source={backDrop} style={styles.imageBackground} />
      <ImageBackground source={confetti} style={styles.imageBackground} />
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
            Drink Claimed!
          </Text>
          <Text
            textAlign="center"
            color="$textSecondary"
            fontSize={'$md'}
            mb={'$10'}>
            Thank you for choosing iexplore. Do have a great time and enjoy your
            drink.
          </Text>
        </Box>
        <FlatButton
          title="Return home"
          onPress={() => navigation.navigate(SCREENS.home.dashboard)}
        />
      </Box>
    </Box>
  );
};

export default DrinkClaimedCongratulationsScreen;

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
