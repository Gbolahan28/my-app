import {
  Box,
  ScrollView,
} from '@gluestack-ui/themed';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import ClubReviews from '../../../components/cards/ClubReviews';
import {useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import GlobalHeader from '../../../components/headers/GlobalHeader';


const ClubReviewScreen = () => {
  const route = useRoute();
  const {spotId, spotName} = route.params;

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchAllReviews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_BASE_URL}/api/v1/spots/${spotId}/reviews/`,
        );
        const data = await response.json();

        if (isMounted) {
          setReviews(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load reviews');
          console.error('Error fetching all reviews:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAllReviews();

    return () => {
      isMounted = false;
    };
  }, [spotId]);

  return (
    <Box bg="$background" flex={1}>
      <GlobalHeader title={`${spotName} Reviews`} />

      {loading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator size="large" color="#FFC000" />
          <Text color="$textPrimary" mt="$4">
            Loading reviews...
          </Text>
        </Box>
      ) : error ? (
        <Box flex={1} justifyContent="center" alignItems="center" px="$4">
          <Text color="$textPrimary" fontSize="$lg" textAlign="center">
            {error}
          </Text>
        </Box>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box px="$4" mt="$4">
            <Text
              fontSize={moderateScale(18)}
              fontWeight="700"
              color="$textPrimary">
              All Reviews ({reviews.length})
            </Text>
          </Box>

          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <ClubReviews
                key={review.id || index}
                name={review.user}
                date={
                  review.created_at
                    ? new Date(review.created_at).toLocaleDateString()
                    : undefined
                }
                reviewText={review.review_text}
                rating={review.rating}
                image={review.has_images}
              />
            ))
          ) : (
            <Box py="$8" alignItems="center">
              <Text color="$textDark300">No reviews available</Text>
            </Box>
          )}
        </ScrollView>
      )}
    </Box>
  );
};

export default ClubReviewScreen;

const styles = StyleSheet.create({

});
