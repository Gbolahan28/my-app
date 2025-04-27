import React from 'react';
import {Box, ScrollView} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import DrinkHeader from '../../../components/headers/DrinkHeader';
import ClubCard from '../../../components/cards/ClubCard';
import CustomSearchInput from '../../../components/inputs/CustomSearchInput';

const AllCards = () => {
  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <DrinkHeader title="Clubs" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomSearchInput mx="$3" />
        <Box flexDirection="row" flexWrap="wrap" m="$2">
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default AllCards;

const styles = StyleSheet.create({});
