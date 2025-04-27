import {useState} from 'react';
import {Alert} from 'react-native';
import {apiPost} from '../api/api-service';
import {url} from '../api/url';

export const usePasswordUpdate = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordInitialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const updatePassword = async (values, {setSubmitting, resetForm}) => {
    if (
      !values.currentPassword &&
      !values.newPassword &&
      !values.confirmPassword
    ) {
      Alert.alert('No Changes', 'No password changes detected');
      setSubmitting(false);
      return;
    }

    try {
      const response = await apiPost(url.changePassword, values);
      Alert.alert('Success', response.message);
      resetForm();
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to update password');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    showCurrentPassword,
    setShowCurrentPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordInitialValues,
    updatePassword,
  };
};
