/* eslint-disable prettier/prettier */
import {Divider, HStack, Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {LocationIcon} from '../assets/svg/LocationIcon';

const PopularLocationItem = () => {
  return (
    <Box py={'$2'}>
      <HStack flexDirection={'row'} alignItems="center" gap={'$2'}>
        <LocationIcon />
        <Box>
          <Text color={'$secondary100'} fontWeight="$semibold" fontSize={'$md'}>
            Lagos night club
          </Text>
          <Text color="$secondary400">Ikoyi, Lagos.</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default PopularLocationItem;
