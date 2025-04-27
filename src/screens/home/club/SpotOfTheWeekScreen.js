import {Box, ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import SpotOfTheWeekCard from '../../../components/cards/SpotOfTheWeekCard';
import DrinkHeader from '../../../components/headers/DrinkHeader';

const SpotOfTheWeekScreen = () => {
  return (
    <Box bg="$background" flex={1}>
      <DrinkHeader title="Spots of the week" />
      <ScrollView>
        <Box m="$4">
          <SpotOfTheWeekCard />
          <SpotOfTheWeekCard />
          <SpotOfTheWeekCard />
          <SpotOfTheWeekCard />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SpotOfTheWeekScreen;
