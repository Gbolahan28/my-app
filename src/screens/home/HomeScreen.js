import {Box, Divider, HStack, ScrollView, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import FilterButton from '../../components/buttons/FilterButton';
import EventCard from '../../components/cards/EventCard';
import TopSpotCard from '../../components/cards/TopSpotCard';
import VenueCard from '../../components/cards/VenueCard';
import FilterByCategory from '../../components/filter-items/FilterByCategory';
import FilterByRating from '../../components/filter-items/FilterByRating';
import DashboardHeader from '../../components/headers/DashboardHeader';
import SectionHeader from '../../components/headers/SectionHeader';
import CustomSearchInput from '../../components/inputs/CustomSearchInput';
import {apiGet} from '../../api/api-service';
import {url} from '../../api/url';

const CLUB_ONE = require('../../assets/images/club1.jpeg');
const CLUB_TWO = require('../../assets/images/club2.jpeg');
const CLUB_THREE = require('../../assets/images/club3.jpeg');
const HOTEL_ONE = require('../../assets/images/hotel1.jpeg');
const HOTEL_TWO = require('../../assets/images/hotel2.jpeg');
const RESTAURANT_ONE = require('../../assets/images/restaurant1.jpeg');
const RESTAURANT_TWO = require('../../assets/images/restaurant2.jpeg');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await apiGet(url.getSpots);
        console.log('API Response:', response);

        const processedVenues = response.map(venue => ({
          ...venue,
          primary_image: venue.primary_image || '',
        }));

        setVenues(processedVenues);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSpots();
  }, []);

  console.log('Venues: ', venues);

  const defaultState = {
    category: false,
    rating: false,
  };

  const [isActive, setIsActive] = useState(defaultState);

  const handleCategoryPress = () => {
    setIsActive({...defaultState, category: !isActive.category});
  };

  const handleRatingPress = () => {
    setIsActive({...defaultState, rating: !isActive.rating});
  };

  return (
    <Box bg="$background" flex={1}>
      <DashboardHeader />
      <Box px="$4">
        <CustomSearchInput placeholder="Search for..." />
      </Box>
      <ScrollView>
        <Box
          mt="$1"
          px="$4"
          gap="$2"
          flexDirection="row"
          justifyContent="space-between">
          <FilterButton
            title="Category"
            active={isActive.category}
            onPress={handleCategoryPress}
          />
          <FilterButton
            title="Rating"
            active={isActive.rating}
            onPress={handleRatingPress}
          />
        </Box>
        {isActive.category && <FilterByCategory />}
        {isActive.rating && <FilterByRating />}
        <Box px="$6">
          <Box>
            <SectionHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
              {venues && venues.length > 0 ? (
                venues.map((venue, index) => (
                  <VenueCard key={`${venue?.name}-${index}`} data={venue} />
                ))
              ) : (
                <Text color="$textSecondary">No venue found</Text>
              )}
            </ScrollView>
          </Box>
          <Divider h={1} bg="$secondary" mt="$6" />
        </Box>

        <Box px="$4">
          <Text
            mb="$2"
            fontSize="$xl"
            lineHeight="$2xl"
            color="$textSecondary"
            fontWeight="800">
            Recommended events
          </Text>
          <Box>
            <ScrollView showsVerticalScrollIndicator={false}>
              <EventCard image={CLUB_THREE} />
              <EventCard title="MC party jump off" location="Club Quilox" />
              <EventCard image={CLUB_ONE} />
            </ScrollView>
          </Box>
          <Divider h={1} bg="$secondary" mt="$6" />
        </Box>

        <Box px="$4">
          <Text
            fontSize="$xl"
            lineHeight="$2xl"
            color="$textSecondary"
            fontWeight="900">
            Iexplore spots this week
          </Text>
          <Box my="$5">
            <HStack
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              width="100%">
              <Box width="48%" marginBottom="$3">
                <TopSpotCard number="1" />
              </Box>
              <Box width="48%" marginBottom="$3">
                <TopSpotCard number="2" image={HOTEL_TWO} />
              </Box>
              <Box width="48%" marginBottom="$3">
                <TopSpotCard number="3" image={RESTAURANT_TWO} />
              </Box>
              <Box width="48%" marginBottom="$3">
                <TopSpotCard number="4" image={CLUB_ONE} />
              </Box>
              <Box width="48%" marginBottom="$3">
                <TopSpotCard number="5" image={RESTAURANT_TWO} />
              </Box>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
