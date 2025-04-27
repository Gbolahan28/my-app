import {Divider, HStack, Text} from '@gluestack-ui/themed';
import {Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import PopularLocationItem from '../PopularLocationItem';
import CustomSearchInput from '../inputs/CustomSearchInput';

const FilterByLocation = () => {
  return (
    <Box bg="$background">
      <CustomSearchInput mx="$4" />
      <Box
        bg="$secondary"
        mx={'$4'}
        flexDirection="row"
        borderRadius={'$md'}
        mt={'$0.5'}
        py={'$5'}>
        <Box w={'$full'}>
          <VStack gap={'$1.5'} w={'$full'} px={'$4'}>
            <PopularLocationItem />
            <Divider w={'$full'} bgColor="$secondary600" />
            <PopularLocationItem />
            <Divider w={'$full'} bgColor="$secondary600" />
            <PopularLocationItem />
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterByLocation;
