import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {apiPut} from '../api/api-service';
import {url} from '../api/url';

export const useProfileData = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [profileInitialValues, setProfileInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const userData = await api.getUserProfile();
      setProfileData(userData);
      setProfileInitialValues({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
      });
      return userData;
    } catch (error) {
      Alert.alert('Error', 'Failed to load profile data. Please try again.', [
        {text: 'OK'},
      ]);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (values, {setSubmitting, resetForm}) => {
    const changedValues = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== profileInitialValues[key] && values[key] !== '') {
        acc[key] = values[key];
      }
      return acc;
    }, {});

    if (Object.keys(changedValues).length === 0) {
      Alert.alert('No Changes', 'No changes detected');
      setSubmitting(false);
      return;
    }

    try {
      const response = await apiPut(url.updateUserProfile, changedValues);

      setProfileInitialValues(prevValues => ({
        ...prevValues,
        ...changedValues,
      }));

      Alert.alert('Success', response.message);

      resetForm({values: {...values}});
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to update profile');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return {
    loading,
    profileData,
    profileInitialValues,
    fetchUserProfile,
    updateProfile,
  };
};
