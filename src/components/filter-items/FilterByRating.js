/* eslint-disable prettier/prettier */
import {Divider, HStack, Text} from '@gluestack-ui/themed';
import {Box, VStack} from '@gluestack-ui/themed';
import React, {useMemo, useState} from 'react';
import {LocationIcon} from '../../assets/svg/LocationIcon';
import PopularLocationItem from '../PopularLocationItem';
import {Button} from '@gluestack-ui/themed';
import {StarIcon} from '@gluestack-ui/themed';
import RatingsItem from '../RatingsItem';
import {FiveStar} from '../../assets/svg/FiveStar';
import {OneStar} from '../../assets/svg/OneStar';
import {TwoStar} from '../../assets/svg/TwoStar';
import {ThreeStar} from '../../assets/svg/ThreeStar';
import {FourStar} from '../../assets/svg/FourStar';
import {RadioGroup} from '@gluestack-ui/themed';

const FilterByRating = () => {
  const [rating, setRating] = useState(5);
  const [active, setActive] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleRating = value => {
    setRating(value);
  };

  const items = [
    {id: '1', count: 5, value: <FiveStar color={active && '$primary'} />},
    {id: '2', count: 4, value: <FourStar color={active && '$primary'} />},
    {id: '3', count: 3, value: <ThreeStar color={active && '$primary'} />},
    {id: '4', count: 2, value: <TwoStar color={active && '$primary'} />},
    {id: '5', count: 1, value: <OneStar color={active && '$primary'} />},
  ];

  return (
    <Box
      // mx={'$5'}
      bg="$secondary"
      mx={'$4'}
      flexDirection="row"
      borderRadius={'$md'}
      mt={'$2'}
      py={'$5'}>
      <Box w={'$full'}>
        <VStack gap={'$1.5'} w={'$full'} px={'$4'}>
          <RadioGroup>
            {items.map((item, i) => {
              return (
                <Box>
                  <RatingsItem stars={item} index={i} />
                  {i !== 2 && <Divider w={'$full'} bgColor="$secondary600" />}
                </Box>
              );
            })}
          </RadioGroup>
        </VStack>
      </Box>
    </Box>
  );
};

export default FilterByRating;
