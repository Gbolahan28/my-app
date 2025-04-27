
import {useState, useEffect} from 'react';
import { getSingleReview } from '../api/api-service';


export const useReview = reviewId => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchReview = async () => {
      try {
        setLoading(true);
        const data = await getSingleReview(reviewId);
        if (isMounted) {
          setReview(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch review');
          console.error('Error in fetchReview:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (reviewId) {
      fetchReview();
    }

    return () => {
      isMounted = false;
    };
  }, [reviewId]);

  return {review, loading, error};
};
