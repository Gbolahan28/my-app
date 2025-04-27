import {Box, HStack, Icon, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {BookmarkIcon} from '../../assets/svg/BookmarkIcon';
import {SCREENS} from '../../navigation/screenNames';

const VenueCard = ({data}) => {
  const navigation = useNavigation();

  // Log the image prop for debugging
  console.log('IMAGE:', data?.image, 'Type:', typeof data?.image);

  // const imageSource = data?.image
  //   ? data?.image
  //   : require('../../assets/images/club1.jpeg');

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(SCREENS.home.card, {
          slug: data?.slug,
          venueName: data?.name,
          location: data?.location,
        })
      }>
      <Box
        bg="$secondary"
        w={"$full"}
        m={'$1'}
        p="$4"
        borderRadius={moderateScale(16)}>
        {/* Image Section */}
        <Image
          source={data?.image || require('../../assets/images/club1.jpeg')}
          borderTopRightRadius={moderateScale(8)}
          borderTopLeftRadius={moderateScale(8)}
          style={styles.image}
        />

        {/* Venue Name and Bookmark Icon */}
        <HStack mt={'$4'} alignItems="center" justifyContent="space-between">
          <Text
            fontSize={moderateScale(16)}
            fontWeight="700"
            color="$textPrimary">
            {data?.name}
          </Text>
          <Icon as={BookmarkIcon} />
        </HStack>

        {/* Location and Time */}
        <Box my="$2" w="100%" bg="$primary" borderRadius={moderateScale(16)}>
          <Text
            py={moderateScale(4)}
            px={moderateScale(16)}
            fontSize="$sm"
            fontWeight="700"
            color="$textDark900">
            {data?.location} {'  '}
            <Text fontSize="$xs" fontWeight="400" color="$textDark900">
              {data?.time}
            </Text>
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default VenueCard;

// Styles
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(150),
  },
});
