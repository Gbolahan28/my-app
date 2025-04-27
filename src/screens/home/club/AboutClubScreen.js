import {
  Box,
  ClockIcon,
  Divider,
  GlobeIcon,
  HStack,
  PhoneIcon,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';

import {Icon} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {MapPinIcon} from 'lucide-react-native';
import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CardHeader from '../../../components/headers/CardHeader';

const AboutClubScreen = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <CardHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box my="$4" px="$4">
          <Box>
            <Text
              fontSize="$xl"
              lineHeight="$3xl"
              fontWeight="$bold"
              color="$textPrimary">
              About
            </Text>
            <Text fontSize="$sm" mt="$4" color="$textPrimary">
              Located at the heart of Lagos is the King of entertainment and
              nightlife in the city. Experience the thrill of Lagos nightlife
              here. Club Quilox is one of the most popular bars/clubs in Lagos,
              Nigeria. Few people also know that it has a restaurant too. While
              many assume Club Quilox is in Lekki, it is more accurate to place
              its location in Victoria Island.
            </Text>
          </Box>

          <Divider mt="$6" mb="$3" bgColor="$inputBackground" h={1.5} />

          <VStack mt="$4">
            <HStack gap="$5" marginRight="$4" my="$2" alignItems="center">
              {/* <LocationIcon /> */}
              <Icon as={MapPinIcon} color="$textSecondary" />
              <Text
                color="$textPrimary"
                fontWeight="$semibold"
                fontSize="$sm"
                marginRight="$4">
                873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos state.
                Nigeria.
              </Text>
            </HStack>
            <HStack gap="$6" my="$2" alignItems="center">
              <PhoneIcon color="$textSecondary" />
              <Text
                color="$textPrimary"
                fontWeight="$semibold"
                fontSize="$sm"
                marginRight="$4">
                01 978 7288
              </Text>
            </HStack>
            <HStack gap="$6" my="$2" alignItems="center">
              <ClockIcon color="$textSecondary" />
              <VStack>
                <Text
                  color="$textPrimary"
                  fontWeight="$semibold"
                  fontSize="$sm"
                  marginRight="$4">
                  Open time: 6:00pm
                </Text>
                <Text
                  color="$textPrimary"
                  fontWeight="$semibold"
                  fontSize="$sm"
                  marginRight="$4">
                  Close time: 4:00am
                </Text>
              </VStack>
            </HStack>
            <HStack gap="$6" my="$2" alignItems="center">
              <GlobeIcon color="$textSecondary" />
              <Text
                color="$textPrimary"
                fontWeight="$semibold"
                fontSize="$sm"
                marginRight="$4">
                www.clubquilox.com
              </Text>
            </HStack>
          </VStack>

          <Divider mt="$6" mb="$3" bgColor="$inputBackground" h={1.5} />

          <Box mt="$4">
            <Text
              fontSize="$xl"
              lineHeight="$3xl"
              fontWeight="$bold"
              color="$textPrimary">
              Features
            </Text>
            <VStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Sounds
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Card & Transfer Payment
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Strippers
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Wheelchair accessible lift
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Reservation
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Wheelchair accessible toilet
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Security
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Live music
                </Text>
              </HStack>
              <HStack fontSize="$sm" mt="$4">
                <Text color="$textPrimary" flex={1}>
                  Dinning
                </Text>
                <Text color="$textPrimary" flex={1}>
                  Takeaway
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Delivery
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Organized fun
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Outdoor seating
                </Text>
              </HStack>
            </VStack>
          </Box>

          <Divider mt="$6" mb="$3" bgColor="$inputBackground" h={1.5} />

          <Box mt="$4">
            <Text
              fontSize="$xl"
              lineHeight="$3xl"
              fontWeight="$bold"
              color="$textPrimary">
              Offers
            </Text>
            <VStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Alcohol
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Beer
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Killer cocktail
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Foods
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Food at bar
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Spirits
                </Text>
              </HStack>
              <HStack mt="$4">
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Wine
                </Text>
                <Text fontSize="$sm" color="$textPrimary" flex={1}>
                  Street food
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default AboutClubScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: moderateScale(16),
  },
  mapBg: {
    height: verticalScale(150),
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(80),
  },
});
