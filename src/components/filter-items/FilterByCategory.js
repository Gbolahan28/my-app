/* eslint-disable prettier/prettier */
import {Box, HStack} from '@gluestack-ui/themed';
import React from 'react';
import CategoryButton from '../buttons/CategoryButton';
import CustomInput from '../inputs/CustomInput';

const FilterByCategory = () => {
  return (
    <Box
      px={'$5'}
      bg="$secondary"
      mx={'$4'}
      flexDirection="row"
      borderRadius={'$md'}
      mt={'$2'}
      py={'$5'}>
      <Box>
        <HStack flexWrap="wrap" gap={'$1.5'}>
          <CategoryButton />
          <CategoryButton title="Club" />
          <CategoryButton title="Beach" />
          <CategoryButton title="Restaurants" />
          <CategoryButton title="Bars" />
          <CategoryButton title="Lounge" />
        </HStack>
      </Box>
    </Box>
  );
};

export default FilterByCategory;
