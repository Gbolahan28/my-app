import {Box, HStack, Icon, Image, Text, VStack} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import FlatButton from '../buttons/FlatButton';

import {Clock1, Star} from 'lucide-react-native';
import {DrinksIcon} from '../../assets/svg/DrinksIcon';

const SpotCard = ({title, imageUrl, imageDescription}) => {
  const navigation = useNavigation();

  return (
    <Box
      bg="$inputBackground"
      w="$full"
      borderRadius="$xl"
      px={moderateScale(16)}
      pt={moderateScale(16)}
      pb={moderateScale(8)}>
      <Box gap="$4" flexDirection="row" alignItems="center">
        <Box>
          <Image
            source={require('../../assets/images/club2.jpeg')}
            alt="Spot image"
            style={styles.image}
          />
        </Box>
        <Box flex={1}>
          <VStack>
            <HStack
              w="$full"
              justifyContent="space-between"
              alignItems="flex-start">
              <Text
                color="$textPrimary"
                fontWeight="$700"
                w="70%"
                fontSize={moderateScale(18)}>
                Maxx BBQs & Bistro
              </Text>
              <HStack flexDirection="row" gap="$0.5" alignItems="center">
                <Star color="#FFC000" size="16" />
                <Text color="$primary" fontSize="$xs">
                  4.5
                </Text>
              </HStack>
            </HStack>
            <Text color="$tertiary" fontSize="$xs" fontWeight="300">
              Tejuosho Mall, Yaba
            </Text>
            <HStack gap="$2" alignItems="center" mt={scale(20)}>
              <HStack gap="$1" alignItems="center">
                <DrinksIcon size={14} color="#FFC000" />
                <Text color="$textSecondary" fontSize="$xs" fontWeight="300">
                  Bars & Pubs
                </Text>
              </HStack>
              <HStack gap="$1" alignItems="center">
                <Icon as={Clock1} color="$primary" size={14} />
                <Text color="$textSecondary" fontSize="$xs" fontWeight="300">
                  4pm - 1am
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Box mt="$2">
        <FlatButton height={verticalScale(32)} title="Spot details" />
      </Box>
    </Box>
  );
};

export default SpotCard;

const styles = StyleSheet.create({
  image: {
    width: scale(114),
    height: moderateVerticalScale(114),
    borderRadius: moderateScale(8),
  },
});
