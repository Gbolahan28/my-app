import {Box, Text} from '@gluestack-ui/themed';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const EventCard = ({
  title = 'Omah Lay live at Hotbox',
  location = 'Hotbox, Oniru',
  date = '',
  image
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={image || {
        uri: 'https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2017/05/59240064682c4_5924001331ee1_801124285.jpg',
      }}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.08)', 'rgba(0, 0, 0, 0.80)']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Box flexDirection="row" justifyContent="flex-end">
        <Box
          bg="$primary"
          gap="$1"
          flexDirection="row"
          px={moderateScale(12)}
          py={moderateScale(4)}
          alignItems="center"
          justifyContent="center"
          borderRadius={moderateScale(24)}
          w={scale(59)}
          h={verticalScale(25)}>
          <Text
            color="$textTertiary"
            fontSize={moderateScale(14)}
            fontWeight="700">
            Hot
          </Text>
          <Text fontSize={moderateScale(14)} fontWeight="700">
            🔥
          </Text>
        </Box>
      </Box>
      <Box mt="$40">
        <Text
          fontSize={moderateScale(20)}
          fontWeight="700"
          color="$textPrimary">
          {title}
        </Text>
        <Text fontWeight="700" fontSize={moderateScale(16)} color="#B0B0B0">
          {location}. {date || '12th Dec 2023'}.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  background: {
    // height: verticalScale(210),
    height: 'auto',
    width: 'auto',
    marginVertical: scale(8),
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    padding: moderateScale(16),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
