import {Box, Image, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {LogoIconSmall} from '../../assets/svg/LogoIconSmall';
import {SCREENS} from '../../navigation/screenNames';
import OutlinedText from '../texts/OutlinedText';

const LOGO = require('../../assets/svg/iexplore_small_logo.svg');
const VENUE = require('../../assets/images/club2.jpeg');

const TopSpotCard = ({number, image}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.home.spotOfTheWeek)}
      style={{width: '100%'}}>
      <Box width="100%">
        <Box
          width="100%"
          height={moderateVerticalScale(200)}
          position="relative"
          overflow="hidden"
          borderTopRightRadius={moderateScale(8)}
          borderBottomRightRadius={moderateScale(8)}>
          <Box justifyContent="space-between">
            <Box>
              <LogoIconSmall />
            </Box>

            <Box>
              <OutlinedText fontSize={180}>{number}</OutlinedText>
            </Box>
          </Box>
          <Box
            position="absolute"
            top={0}
            right={-78}
            h="$full"
            w="$full"
            zIndex={2}>
            <Image source={image || VENUE} style={styles.image} alt="" />
            <Box
              bg="$primary"
              position="absolute"
              right={82}
              bottom={14}
              borderRadius={moderateScale(4)}
              px={moderateScale(16)}
              py={moderateScale(4)}>
              <Text color="$textDark900" fontWeight="700" fontSize="$xs">
                Top spot
              </Text>
            </Box>
          </Box>
        </Box>
        <Box my="$2" bg="$background">
          <Text textAlign="center" color="$textPrimary" fontWeight="700">
            Lagoon Restaurant
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default TopSpotCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
