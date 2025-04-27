import React, {useState} from 'react';
import {
  Box,
  CopyIcon,
  FavouriteIcon,
  HStack,
  Icon,
  ScrollView,
} from '@gluestack-ui/themed';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DrinkHeader from '../../../components/headers/DrinkHeader';
import {Divider} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import ClaimDrinkAtCard from '../../../components/cards/ClaimDrinkAtCard';
import {VStack} from '@gluestack-ui/themed';

import CustomBottomSheet from '../../../components/modals/CustomBottomSheet';
import FlatButton from '../../../components/buttons/FlatButton';
import {SCREENS} from '../../../navigation/screenNames';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import SectionHeader from '../../../components/headers/SectionHeader';
import DrinksCard from '../../../components/cards/DrinksCard';

const SingleDrink = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  // const increment = () => {
  //   setCount(count++);
  // };

  // const decrement = () => {
  //   setCount(count--);
  // };

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <DrinkHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box mt="$4">
          <ScrollView>
            <Box px={'$3'}>
              <Box>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Box w={scale(290)} mr={'$3'}>
                    <Image
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
                      }}
                      alt="Drink Images"
                      style={styles.image}
                    />
                  </Box>
                  <Box w={scale(290)} mr={'$3'}>
                    <Image
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
                      }}
                      alt="Drink Images"
                      style={styles.image}
                    />
                  </Box>
                  <Box w={scale(290)} mr={'$3'}>
                    <Image
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
                      }}
                      alt="Drink Images"
                      style={styles.image}
                    />
                  </Box>
                </ScrollView>
              </Box>
            </Box>
          </ScrollView>
          <Text
            fontSize="$lg"
            fontWeight="$semibold"
            color="$textPrimary"
            mt={'$8'}
            px={'$4'}>
            Johnnie Walker Black Label Air-Ink Limited Edition
          </Text>
          <HStack
            mt="$2"
            px="$4"
            gap="$1"
            alignItems="center"
            justifyContent="space-between">
            <Box my="$1" flexDirection="row" gap="$3" alignItems="center">
              <Text
                fontWeight="bold"
                color="$primary"
                fontSize={moderateScale(20)}>
                N 232,000
              </Text>
              <Text
                color="$textPrimary"
                fontSize={moderateScale(14)}
                textDecorationLine="line-through">
                N232,000
              </Text>
            </Box>
            <Icon as={FavouriteIcon} color="$primary" />
          </HStack>
          {/* <Divider h={1} bg="$textTertiary" mt={'$4'} mx="$4" /> */}
          <HStack
            py="$3"
            m="$4"
            justifyContent="space-between"
            alignItems="center"
            borderLeftWidth={0}
            borderRightWidth={0}
            borderWidth="$1"
            borderColor="$textTertiary">
            <Button
              px="$10"
              bg="$primary"
              onPress={() => setOpenBottomSheet(true)}>
              <ButtonText color="$textTertiary" fontWeight="$semibold">
                Claim drink
              </ButtonText>
            </Button>

            <HStack gap="$2">
              <Button
                bg="$primary"
                px="$3"
                disabled={count == 0 ? true : false}
                onPress={() => setCount(count - 1)}>
                <ButtonText
                  color="$textTertiary"
                  fontWeight="$bold"
                  fontSize={moderateScale(18)}>
                  -
                </ButtonText>
              </Button>
              <Box
                px="$3"
                bg="$background"
                alignItems="center"
                borderRadius={moderateScale(6)}
                justifyContent="center"
                borderWidth="$1"
                borderColor="$primary">
                <Text color="$primary" fontWeight="$bold">
                  {count}
                </Text>
              </Box>
              <Button bg="$primary" px="$3" onPress={() => setCount(count + 1)}>
                <ButtonText
                  color="$textTertiary"
                  fontWeight="$bold"
                  fontSize={moderateScale(18)}>
                  +
                </ButtonText>
              </Button>
            </HStack>
          </HStack>
        </Box>

        <Box my="$3" px="$4">
          <Text fontWeight="$bold" color="$textPrimary">
            Product description
          </Text>
          <Text fontSize={moderateScale(15)} mt="$2" color="$textPrimary">
            The bottle designed by Victor Ehikhamenor, is inspired by the
            vibrancy of Lagos and the unbreakable spirit of its inhabitants. It
            embodies the energy that sets Lagos apart and its ability to spur
            its dwellers to Keep Walking.
          </Text>
          <Text fontSize={moderateScale(15)} color="$textPrimary">
            Enjoy this limited-edition Johnnie Walker Black Label with notes of
            sweet vanilla and warming smoky finish. It is part of the Johnnie
            Walker “Keep Walking City Collection” that features cities like
            Tokyo, Seoul, New Mexico and others.
          </Text>
        </Box>

        <Box mt="$6" px="$4">
          <SectionHeader title="Order drinks at same spot" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            gap="$4">
            <DrinksCard mr="$3" />
            <DrinksCard mr="$3" />
            <DrinksCard mr="$3" />
            <DrinksCard mr="$3" />
          </ScrollView>
        </Box>

        <Box my="$4" px="$4">
          <SectionHeader title="Similar drinks at different spots" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            gap="$4">
            <DrinksCard mr="$3" />
            <DrinksCard mr="$3" />
            <DrinksCard mr="$3" />
            <DrinksCard mr="$3" />
          </ScrollView>
        </Box>
      </ScrollView>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={['50%']}
        enablePanDownToClose={true}>
        <Box style={styles.container} w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <Box alignItems="center">
              <Text color="$textSecondary">Use coupon to claim drink</Text>

              <HStack
                p="$3"
                my="$4"
                borderWidth="$1"
                borderColor="$textTertiary"
                borderRadius="$lg"
                bg="$backgroundDark900"
                justifyContent="space-between"
                alignItems="center"
                gap="$2">
                <Text color="$textPrimary">IEXPLORE25OFF</Text>
                <Icon as={CopyIcon} color="$textPrimary" />
              </HStack>

              <Text color="$textPrimary" textAlign="center" mt="$8" mb="$16">
                Please use the provided coupon code{' '}
                <Text fontSize="$sm" color="$textSecondary">
                  'IEXPLORE25OFF'
                </Text>{' '}
                to redeem your drink offer at Club Quilox. Kindly note that this
                offer will expire 24 hours after you've claimed your drink on
                iexplore.
              </Text>

              <FlatButton
                title="Claim drink"
                onPress={() => navigation.navigate(SCREENS.drinks.congrats)}
              />
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
};

export default SingleDrink;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: moderateScale(6),
  },
  mapBg: {
    height: verticalScale(620),
  },
});
