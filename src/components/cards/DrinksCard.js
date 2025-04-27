import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  FavouriteIcon,
  Icon,
  Text,
} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import { BookmarkIcon } from '../../assets/svg/BookmarkIcon';

const DrinksCard = ({mr, discount = false}) => {
  const navigation = useNavigation();

  return (
    <Box
      minHeight={verticalScale(170)}
      w={scale(154)}
      bg="$secondary"
      mr={mr || 0}
      borderWidth="$1"
      borderRadius={moderateScale(12)}
      borderColor="$borderColor"
      position="relative">
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
        }}
        borderTopLeftRadius={moderateScale(12)}
        borderTopRightRadius={moderateScale(12)}></ImageBackground>
      {/* discount and price tags */}
      <Box
        position="absolute"
        top="$2"
        left="$0"
        flexDirection="row"
        w="$full"
        px="$2"
        alignItems="center"
        justifyContent="$flex-end">
        {/* <Box
          bg="$textSecondary"
          px="$3"
          borderRadius="$xl"
          borderWidth="$1"
          borderColor="$secondary">
          <Text color="$secondary" fontSize="$sm">
            Free
          </Text>
        </Box> */}
      </Box>
      {/* end discount and price tags */}
      <Box px={'$2'} py={'$1.5'} pb="$4">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text
            fontWeight="700"
            color="$textPrimary"
            fontSize={moderateScale(14)}
            lineHeight={moderateScale(18)}
            flex={1}>
            Johnnie Walker Black Label
          </Text>
          <Icon as={BookmarkIcon} ml="$2" />
        </Box>
        <Text
          fontWeight="200"
          color="$textPrimary"
          flex={1}
          fontSize={moderateScale(10)}
          >
          Available at Club Quilox
        </Text>
        <Text
          fontWeight="200"
          color="$textPrimary"
          flex={1}
          fontSize={moderateScale(10)}
          marginBottom={verticalScale(10)}>
          12 hours left
        </Text>
        <Box my="$1" flexDirection="row" gap="$1.5" alignItems="center">
          {/* <Text
            fontWeight="bold"
            color="$textPrimary"
            fontSize={discount ? moderateScale(20) : moderateScale(18)}>
            {discount ? 'N232,000' : 'NGN 232, 000.00'}
          </Text>
          {discount && (
            <Text
              color="$textPrimary"
              fontSize={moderateScale(10)}
              textDecorationLine="line-through">
              N232,000
            </Text>
          )} */}
        </Box>
        <Button
          variant="solid"
          action="primary"
          w={'80%'}
          h={verticalScale(28)}
          alignSelf="center"
          backgroundColor="$primary"
          borderRadius={'$xl'}
          mt={'$1'}
          $active-bg="$orange200"
          onPress={() => navigation.navigate(SCREENS.drinks.singleDrink)}>
          <ButtonText color="$textTertiary" fontSize={moderateScale(11)}>
            Redeem drink
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default DrinksCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: '100%',
  },
});
