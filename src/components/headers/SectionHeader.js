import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, ChevronRightIcon, Text} from '@gluestack-ui/themed';
import FlatButton from '../buttons/FlatButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';

const SectionHeader = ({title = 'Spots', titleColor}) => {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      my={'$3'}>
      <Text
        fontSize={'$xl'}
        lineHeight={'$2xl'}
        color={titleColor || '$textPrimary'}
        fontWeight="800">
        {title}
      </Text>
      <FlatButton
        width={scale(69)}
        height={verticalScale(26)}
        fontSize={moderateScale(10)}
        onPress={() => navigation.navigate(SCREENS.home.allCards)}
        title="See all"
        iconRight={ChevronRightIcon}
      />
    </Box>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
