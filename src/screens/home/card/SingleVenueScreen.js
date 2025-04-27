import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Heading,
  Image,
  ScrollView,
  Text,
  TextareaInput,
} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';

import {ButtonText, FormControl, Textarea} from '@gluestack-ui/themed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import SectionHeader from '../../../components/headers/SectionHeader';

import {Center} from '@gluestack-ui/themed';
import {Bike, Car, Footprints, Star} from 'lucide-react-native';
import {LocationIcon} from '../../../assets/svg/LocationIcon';
import CategoryButton from '../../../components/buttons/CategoryButton';
import FlatButton from '../../../components/buttons/FlatButton';
import ClubReviews from '../../../components/cards/ClubReviews';
import VenueCard from '../../../components/cards/VenueCard';
import GlobalHeader from '../../../components/headers/GlobalHeader';
import CustomBottomSheet from '../../../components/modals/CustomBottomSheet';
import ImageSwiper from '../../../components/others/CustomImageSwiper';
import {SCREENS} from '../../../navigation/screenNames';
import { useSpot } from '../../../hooks/useSpot';
import { useReview } from '../../../hooks/useReview';
import { ActivityIndicator } from 'react-native-paper';

const mapImg = require('../../../assets/images/Map.png');

const CLUB_ONE = require('../../../assets/images/club1.jpeg');
const CLUB_TWO = require('../../../assets/images/club2.jpeg');
const CLUB_THREE = require('../../../assets/images/club3.jpeg');
const HOTEL_ONE = require('../../../assets/images/hotel1.jpeg');
const HOTEL_TWO = require('../../../assets/images/hotel2.jpeg');
const RESTAURANT_ONE = require('../../../assets/images/restaurant1.jpeg');
const RESTAURANT_TWO = require('../../../assets/images/restaurant2.jpeg');

const images = [
  HOTEL_ONE,
  HOTEL_TWO,
  CLUB_TWO,
  CLUB_ONE,
  CLUB_THREE,
  RESTAURANT_ONE,
  RESTAURANT_TWO,
];

const CardScreen = () => {
  const {loading, error, clearError, fetchSingleSpot, fetchSpotMedia} =
    useSpot();

  const route = useRoute();
  const {slug, venueName, location} = route.params;
  const navigation = useNavigation();

  const [openQuestionBottomSheet, setOpenQuestionBottomSheet] = useState(false);
  const [spot, setSpot] = useState(null);
  const [media, setMedia] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);


  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);
  const {getSingleReview} = useReview();

  const [reviewIds, setReviewIds] = useState([]);

  useEffect(() => {
    clearError();

    if (!slug) {
      navigation.goBack();
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      try {
        const [spotData, mediaData] = await Promise.all([
          fetchSingleSpot(slug),
          // fetchSpotMedia(slug),
        ]);

        if (isMounted) {
          if (spotData) {
            setSpot(spotData);
            setIsDataLoaded(true);
               if (spotData.reviews && spotData.reviews.length > 0) {
                 setReviewIds(spotData.reviews.map(review => review.id));
               }
          }

          if (mediaData) {
            setMedia(mediaData);
          }
        }
      } catch (err) {
        console.error('Error in component:', err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [slug, fetchSingleSpot, fetchSpotMedia, clearError, navigation]);

useEffect(() => {
  if (!spot || !spot.reviews || spot.reviews.length === 0) {
    setReviewLoading(false);
    return;
  }

  let isMounted = true;

  const fetchReviews = async () => {
    try {
      const reviewsToFetch = spot.reviews.slice(0, 3);
      const fetchedReviews = await Promise.all(
        reviewsToFetch.map(getSingleReview),
      );

      if (isMounted) {
        setReviews(fetchedReviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      if (isMounted) {
        setReviews([]); // Ensure reviews is an empty array on error
      }
    } finally {
      if (isMounted) {
        setReviewLoading(false);
      }
    }
  };

  fetchReviews();

  return () => {
    isMounted = false;
  };
}, [spot, getSingleReview]);

  const handleReservation = () => {
    navigation.navigate(SCREENS.drinks.reserve);
  };

  if (loading && !isDataLoaded) {
    return (
      <Box
        flex={1}
        bg="$background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size="large" color="#FFC000" />
        <Text color="$textPrimary" mt="$4">
          Loading spot details...
        </Text>
      </Box>
    );
  }

  // Show error state with retry option
  if (error && !isDataLoaded) {
    return (
      <Box
        flex={1}
        bg="$background"
        justifyContent="center"
        alignItems="center"
        px="$4">
        <Text color="$textPrimary" fontSize="$lg" textAlign="center" mb="$4">
          {error}
        </Text>
        <FlatButton
          title="Try Again"
          onPress={() => {
            clearError();
            // Re-trigger the effect by changing a dependency
            navigation.setParams({...route.params});
          }}
        />
        <Button variant="outline" mt="$4" onPress={() => navigation.goBack()}>
          <ButtonText>Go Back</ButtonText>
        </Button>
      </Box>
    );
  }

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <GlobalHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box mt="$4">
          <ScrollView>
            <Box px={'$3'}>
              <Box>
                <ImageSwiper
                  images={images}
                  height={200}
                  thumbnailSize={40}
                  activeColor="#FFC000"
                  inactiveColor="#808080"
                />
              </Box>
            </Box>

            <Box px="$4" mt="$8">
              <HStack justifyContent="space-between" alignItems="center">
                <Heading
                  size="xl"
                  color="$textPrimary"
                  textTransform="capitalize">
                  {spot?.name || venueName}
                </Heading>
                <HStack
                  px="$4"
                  py="$1"
                  gap="$1.5"
                  flexDirection="row"
                  alignItems="center"
                  borderWidth={1}
                  borderColor="$primary"
                  borderRadius="$full">
                  <Star color="#FFC000" size="16" />
                  <Text color="$primary" fontSize="$xs">
                    {spot?.rating || '4.5'}
                  </Text>
                </HStack>
              </HStack>
              <HStack alignItems="flex-start" gap="$2" my="$1">
                <Box pt="$1">
                  <Image
                    alt="Location icon"
                    source={require('../../../assets/images/location-star-01.png')}
                    w={24}
                    h={24}
                  />
                </Box>
                <Text
                  fontSize={moderateScale(14)}
                  w="$60%"
                  fontWeight="700"
                  color="$textDark200">
                  {spot?.location}, {spot?.state}
                </Text>
              </HStack>

              <HStack alignItems="center" gap="$2" my="$2">
                <Image
                  w={24}
                  h={24}
                  alt="Clock icon"
                  source={require('../../../assets/images/stop-watch.png')}
                />
                <Text
                  fontSize={moderateScale(14)}
                  w="$60%"
                  fontWeight="700"
                  color="$textDark200">
                  {/* 4pm - 11am */}
                  {spot?.opening_time} - {spot?.closing_time}
                </Text>
              </HStack>
              <FlatButton
                height={46}
                title="Make Reservation"
                onPress={handleReservation}
              />
              <FlatButton icon={LocationIcon} height={46} title="Share spot" />
            </Box>

            <Divider h={1} bg="$inputBackground" mt={'$6'} />
          </ScrollView>
          <Box mt={'$4'} px={'$4'}>
            <Text
              fontSize={moderateScale(18)}
              fontWeight="700"
              color="$textPrimary"
              my="$2">
              About
            </Text>
            <Text fontSize={moderateScale(16)} color="$textDark300">
              {spot?.description || 'Description not available'}
            </Text>
          </Box>
        </Box>
        {/* MAPS */}

        {/* <Box my="$8">
          <Text
            px="$4"
            fontSize={moderateScale(18)}
            fontWeight="700"
            color="$textPrimary"
            my="$2">
            Get direction with maps
          </Text>
          <ImageBackground source={mapImg} style={styles.mapBg} />
          <ScrollView mx="$3" horizontal showsHorizontalScrollIndicator={false}>
            <CategoryButton
              title="33 min (14km)"
              icon={Car}
              borderRadius="$lg"
            />
            <CategoryButton
              title="25 min (14km)"
              icon={Bike}
              borderRadius="$lg"
            />
            <CategoryButton
              title="2hr 4min (9.1km)"
              icon={Footprints}
              borderRadius="$lg"
            />
            <CategoryButton
              title="4hr 16sec (18km)"
              icon={Bike}
              borderRadius="$lg"
            />
          </ScrollView>
        </Box> */}
        <Box mt={'$4'} px={'$4'}>
          <Text
            fontSize={moderateScale(18)}
            fontWeight="700"
            color="$textPrimary"
            my="$2">
            Contact
          </Text>
          <Text fontSize={moderateScale(16)} color="$textDark300">
            Website: {spot?.website || 'www.maxxabeachbar.com'}
          </Text>
          <Text mt="$1" fontSize={moderateScale(16)} color="$textDark300">
            Call:{spot?.phone || '+234 901 234 5678'}
          </Text>
        </Box>
        {/* <HStack my={5} px="$4" alignItems="center" paddingVertical="$1.5">
          <VStack mr={40} h={'$full'}>
            <Text color="$textSecondary" fontSize={'$6xl'} lineHeight={98}>
              4.8
            </Text>
            <Text fontSize={moderateScale(14)} color="$textSecondary">
              (2,109 Rating)
            </Text>
          </VStack>
          <Box w={'$full'} gap={8}>
            <Progress value={80} w="61%" h={'$1.5'} bg="$coolGray500">
              <ProgressFilledTrack h={'$1.5'} bg="$primary" />
            </Progress>
            <Progress value={60} w="61%" h={'$1.5'} bg="$coolGray500">
              <ProgressFilledTrack h={'$1.5'} bg="$primary" />
            </Progress>
            <Progress value={50} w="61%" h={'$1.5'} bg="$coolGray500">
              <ProgressFilledTrack h={'$1.5'} bg="$primary" />
            </Progress>
            <Progress value={24} w="61%" h={'$1.5'} bg="$coolGray500">
              <ProgressFilledTrack h={'$1.5'} bg="$primary" />
            </Progress>
            <Progress value={32} w="61%" h={'$1.5'} bg="$coolGray500">
              <ProgressFilledTrack h={'$1.5'} bg="$primary" />
            </Progress>
          </Box>
        </HStack> */}
        <Box px="$4" mt="$8" mb="$4">
          <Text
            fontSize={moderateScale(18)}
            fontWeight="700"
            color="$textPrimary"
            my="$2">
            Reviews & Ratings
          </Text>
          <HStack alignItems="center" gap="$2">
            <HStack
              gap="$1.5"
              flexDirection="row"
              alignItems="center"
              borderRadius="$full">
              <Star color="#FFC000" size="24" />
              <Text
                color="$primary"
                lineHeight={28}
                fontSize={moderateScale(24)}
                fontWeight="800">
                {spot?.rating || '4.5'}
              </Text>
            </HStack>
            <Text
              color="$textSecondary"
              fontSize={moderateScale(18)}
              fontWeight="700">
              ({reviewIds.length || '22'} Reviews)
            </Text>
          </HStack>
        </Box>
        {reviewLoading ? (
          <Box alignItems="center" justifyContent="center" py="$4">
            <ActivityIndicator size="small" color="#FFC000" />
            <Text color="$textPrimary" mt="$2">
              Loading reviews...
            </Text>
          </Box>
        ) : (
          <Box>
            {reviewLoading ? (
              <Box alignItems="center" justifyContent="center" py="$4">
                <ActivityIndicator size="small" color="#FFC000" />
                <Text color="$textPrimary" mt="$2">
                  Loading reviews...
                </Text>
              </Box>
            ) : reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ClubReviews
                  key={review.id || index}
                  name={review.user || `Reviewer ${index + 1}`}
                  date={
                    review.created_at
                      ? new Date(review.created_at).toLocaleDateString()
                      : undefined
                  }
                  reviewText={review.review_text}
                  rating={review.rating}
                  image={review.has_images ? 'true' : undefined}
                />
              ))
            ) : (
              <Box alignItems="center" justifyContent="center" py="$4">
                <Text color="$textPrimary" mt="$2">
                  No reviews found.
                </Text>
              </Box>
            )}
          </Box>
        )}
        <Box px="$4">
          <FlatButton
            title="Show all reviews"
            h={moderateVerticalScale(45)}
            bg="$background"
            color="$textSecondary"
            onPress={() =>
              navigation.navigate(SCREENS.review.review, {
                spotId: spot?.id,
                spotName: spot?.name || venueName,
              })
            }
          />
          <FlatButton
            title="Add a reviews"
            h={moderateVerticalScale(46)}
            bg="$inputBackground"
            borderWidth={0}
            color="$textPrimary"
            onPress={() => navigation.navigate(SCREENS.review.addReview)}
          />
        </Box>
        {/* <Box mt={20}>
          <ReviewsAndQuestionsTab
            questionModalSetter={setOpenQuestionBottomSheet}
          />
        </Box> */}
        {/* <Box px="$4" mt="$8">
          <SectionHeader title="Similar spots" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <VenueCard />
            <VenueCard />
            <VenueCard />
            <VenueCard />
          </ScrollView>
        </Box> */}
      </ScrollView>
      <CustomBottomSheet
        openModal={openQuestionBottomSheet}
        closeModal={() => setOpenQuestionBottomSheet(false)}
        modalSnapPoints={['55%']}
        enablePanDownToClose={true}>
        <Box style={styles.container} w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <FormControl px="$1">
              <Center>
                <FormControlLabel>
                  <FormControlLabelText
                    color="$textPrimary"
                    fontSize="$xl"
                    fontWeight="$bold">
                    Ask a question
                  </FormControlLabelText>
                </FormControlLabel>
              </Center>
              <Textarea
                my="$5"
                h={250}
                borderColor="$inputBackground"
                $focus={{borderColor: '$textSecondary'}}
                bg="$secondary"
                px="$4"
                py="$2">
                <TextareaInput
                  placeholder="Type question"
                  color="$textSecondary"
                />
              </Textarea>

              <HStack justifyContent="space-between">
                <FormControl>
                  <Button
                    action="secondary"
                    variant="link"
                    mr="$4"
                    onPress={() => setOpenQuestionBottomSheet(false)}>
                    <ButtonText color="$textPrimary" fontWeight="$semibold">
                      Cancel
                    </ButtonText>
                  </Button>
                </FormControl>
                <FormControl>
                  <Button action="secondary" borderRadius="$full">
                    <ButtonText>Submit</ButtonText>
                  </Button>
                </FormControl>
              </HStack>
            </FormControl>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: moderateScale(16),
  },
  mapBg: {
    height: verticalScale(180),
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(80),
  },
});
