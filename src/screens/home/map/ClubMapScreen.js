import React from 'react';
import {
  Box,
  ScrollView,
} from '@gluestack-ui/themed';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CardHeader from '../../../components/headers/CardHeader';
import {ImageBackground, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mapImg from "../../../assets/images/maps.png"

const ClubMapScreen = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <CardHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
            <ImageBackground source={mapImg} style={styles.mapBg}>
            </ImageBackground>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ClubMapScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: moderateScale(16),
  },
  mapBg: {
    height: verticalScale(620),
  },
});