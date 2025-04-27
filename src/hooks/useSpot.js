import {useState, useCallback} from 'react';
import {url} from '../api/url';
import {apiGet} from '../api/api-service';
import {Alert} from 'react-native';

export const useSpot = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper function to handle errors consistently
  const handleError = useCallback((err, customMessage) => {
    const errorMessage = err?.message || customMessage || 'An error occurred';
    console.error(errorMessage, err);
    setError(errorMessage);

    Alert.alert('Error', errorMessage, [{text: 'OK'}]);

    return null;
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const fetchSpots = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state before new request

    try {
      const response = await apiGet(url.getSpots);

      if (!response) {
        throw new Error('No data received from server');
      }

      const processedVenues = response.map(venue => ({
        ...venue,
        primary_image: venue.primary_image || '',
      }));

      return processedVenues;
    } catch (err) {
      return handleError(err, 'Failed to load spots. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const fetchSingleSpot = useCallback(
    async slug => {
      if (!slug) {
        return handleError(
          {message: 'Missing slug parameter'},
          'Invalid spot ID',
        );
      }

      setLoading(true);
      setError(null);

      try {
        const endpoint = url.getSingleSpot.replace('{slug}', slug);
        const response = await apiGet(endpoint);

        if (!response) {
          throw new Error('No spot data found');
        }

        return response;
      } catch (err) {
        return handleError(
          err,
          'Failed to load spot details. Please try again.',
        );
      } finally {
        setLoading(false);
      }
    },
    [handleError],
  );

  const fetchSpotMedia = useCallback(
    async slug => {
      if (!slug) {
        return handleError(
          {message: 'Missing slug parameter'},
          'Invalid spot ID',
        );
      }

      setLoading(true);
      setError(null);

      try {
        const endpoint = url.getSpotMedia.replace('{slug}', slug);
        const response = await apiGet(endpoint);

        // Media might be empty but that's not an error
        return response || [];
      } catch (err) {
        return handleError(err, 'Failed to load spot media. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [handleError],
  );

  return {
    error,
    loading,
    clearError,
    fetchSpots,
    fetchSingleSpot,
    fetchSpotMedia,
  };
};
