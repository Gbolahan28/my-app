import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  ClockIcon,
  HStack,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import FlatButton from '../buttons/FlatButton';
import {MapPinIcon} from 'lucide-react-native';
import {ButtonGroup} from '@gluestack-ui/themed';

const ClaimDrinkAtCard = ({openSheet}) => {
  const navigation = useNavigation();

  return (
    <Box
      bg="$secondary"
      py="$4"
      borderRadius={moderateScale(12)}
      overflow="hidden">
      <Box px="$8">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$sm" color="$textSecondary" fontWeight="$normal">
            Sailors Lounge
          </Text>
          <FlatButton
            fontSize="$sm"
            title="Free"
            width="45"
            height={25}
            borderRadius="$lg"
          />
        </HStack>
        <VStack gap="$2" my="$1">
          <HStack gap="$3">
            <Icon as={ClockIcon} color="$textPrimary" />
            <Text fontSize="$sm" color="$textPrimary">
              7:00pm - 4:00am
            </Text>
          </HStack>
          <HStack gap="$3">
            <Icon as={MapPinIcon} color="$textPrimary" />
            <Text fontSize="$sm" color="$textPrimary">
              Admirality road, Lekki phase 1
            </Text>
          </HStack>
        </VStack>
        <ButtonGroup
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          gap="$3">
          <Button
            flex={1}
            bg="$textDark900"
            borderWidth="$2"
            borderColor="$textPrimary"
            borderRadius="$xl"
            onPress={() => navigation.navigate(SCREENS.drinks.map)}
            w="$full">
            <ButtonText fontSize="$sm">Get Direction</ButtonText>
          </Button>
          <Button
            flex={1}
            action="secondary"
            borderRadius="$xl"
            bg="$textPrimary"
            onPress={() => openSheet(true)}
            w="$full">
            <ButtonText fontSize="$sm" color="$textDark900">
              Claim here
            </ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ClaimDrinkAtCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: '100%',
  },
});
