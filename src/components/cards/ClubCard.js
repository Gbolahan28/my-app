import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Divider, Text} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ClubCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(SCREENS.home.card)}>
      <Box
        bg="$secondary"
        h={verticalScale(210)}
        w={scale(158)}
        m={'$1'}
        p="$1"
        borderRadius={moderateScale(16)}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
          }}
          style={styles.image}
        />
        <Box mt={'$3'} ml={'$2'}>
          <Text
            fontSize={moderateScale(18)}
            fontWeight="500"
            color="$textPrimary">
            Club Quilox
          </Text>
        </Box>
        <Box flexDirection="row" gap={'$2'} alignItems="center" ml={'$2'}>
          <Text fontSize={moderateScale(12)} color="$textGrey">
            Club & Bar
          </Text>
          <Divider orientation="vertical" bg="$textGrey" h={'70%'} />
          <Text fontSize={moderateScale(12)} color="$textGrey">
            7pm - 4am
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ClubCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(150),
    borderRadius: moderateScale(16),
  },
});
