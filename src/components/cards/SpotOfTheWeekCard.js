import {Avatar, Box, HStack, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FlatButton from '../buttons/FlatButton';

const SpotOfTheWeekCard = () => {
  return (
    <Box
    my="$2"
      p="$4"
      bg="$inputBackground"
      position="relative"
      //   h={verticalScale(280)}
      borderRadius={moderateScale(16)}>
      <VStack>
        <HStack w="$full">
          <VStack w="73%" position="relative">
            <Box
              bg="$primary"
              borderRadius={moderateScale(50)}
              position="absolute"
              top={0}
              left={0}>
              <Text px="$3" py="$0.5" fontSize="$xs" fontWeight="$bold">
                #1 Spot
              </Text>
            </Box>
            <Text
              mt="$9"
              //   w="70%"
              //   bg="$primary"
              color="$textPrimary"
              fontSize={moderateScale(18)}
              fontWeight="700"
              lineHeight={scale(25)}>
              The place nightclub and rooftop lounge
            </Text>
          </VStack>
          <Box>
            <Avatar
              size="xl"
              bg="$textDark500"
              borderRadius={moderateScale(8)}
            />
          </Box>
        </HStack>
        <Box mt="$5">
          <Text
            color="$textPrimary"
            fontSize={moderateScale(14)}
            lineHeight={scale(20)}>
            TPNRL is the number one spot of the week for its vibrant atmosphere,
            excellent service, and standout experiences, making it a top choice
            for both locals and visitors seeking a great night out.
          </Text>
        </Box>
        <Box mt="$3">
          <FlatButton title="Spot details" h={verticalScale(35)} />
        </Box>
      </VStack>
    </Box>
  );
};

export default SpotOfTheWeekCard;
