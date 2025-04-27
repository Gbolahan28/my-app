import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
// import {ButtonText} from '@gluestack-ui/config/build/theme';

const ClubReviews = ({ name = 'Victor Adewale', date, reviewText, image, rating }) => {
  return (
    <Box my={8} px="$4">
      <HStack space="xl" alignItems="center" my="$2">
        <Avatar size="md">
          <AvatarImage
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
            }}
            alt="Avatar"
          />
        </Avatar>
        <VStack>
          <Text
            color="$coolGray200"
            fontWeight="$semibold"
            fontSize={moderateScale(18)}>
            {name}
          </Text>
          <Text fontSize={moderateScale(12)} fontWeight="400" color="$textGrey">
            {date || '12 Sept 2023'}
          </Text>
        </VStack>
      </HStack>
      <Text
        ml={scale(58)}
        fontSize={moderateScale(16)}
        lineHeight={moderateScale(22)}
        color="$textDark300">
        {reviewText || 'Best place to enjoy nightlife in Lagos. Sound is perfect security is on point and there was no problem with finding a parking space. Got to see and had some premium drinks there, definitely can not wait to be back here.'}
      </Text>
      {image ? (
        <Box ml={scale(50)} mt={scale(10)}>
          <ScrollView
            mx="$3"
            gap="$3"
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Image
              source={require('../../assets/images/club1.jpeg')}
              alt=""
              mr="$3"
              w={scale(130)}
              h={verticalScale(120)}
              borderRadius={moderateScale(8)}
            />
            <Image
              source={require('../../assets/images/hotel1.jpeg')}
              alt=""
              mr="$3"
              w={scale(130)}
              h={verticalScale(120)}
              borderRadius={moderateScale(8)}
            />
            <Image
              source={require('../../assets/images/club2.jpeg')}
              alt=""
              w={scale(130)}
              h={verticalScale(120)}
              borderRadius={moderateScale(8)}
            />
          </ScrollView>
        </Box>
      ) : (
        ''
      )}
      <Box
        ml={scale(58)}
        my="$3"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text color="$textDark600" fontSize="$sm">
          Was this really helpful?
        </Text>
        <HStack space="md">
          <Button
            size="sm"
            bg="$textDark600"
            borderColor="$textDark600"
            borderWidth={1}
            action="primary">
            <ButtonText color="$textPrimary">No</ButtonText>
          </Button>
          <Button size="sm" bg="$primary" action="primary">
            <ButtonText color="$coolGray900">Yes</ButtonText>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ClubReviews;

const styles = StyleSheet.create({});
