import React, {useState, useEffect} from 'react';
import {Box, Image, Text, ScrollView, Spinner} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import CustomInput from '../../../components/inputs/CustomInput';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CustomShowAndHidePasswordInput from '../../../components/inputs/CustomShowAndHidePasswordInput';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import FlatButton from '../../../components/buttons/FlatButton';
import {
  profileInfoValidationSchema,
  conditionalPasswordValidationSchema,
} from '../../../schema/userSchema';
import {useProfileData} from '../../../hooks/useProfileData';
import {usePasswordUpdate} from '../../../hooks/usePasswordUpdate';
import {useProfileImage} from '../../../hooks/useProfileImage';

const EditProfilePage = () => {
  const navigation = useNavigation();

  const {loading, profileData, profileInitialValues, updateProfile} =
    useProfileData();

  const {
    showCurrentPassword,
    setShowCurrentPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordInitialValues,
    updatePassword,
  } = usePasswordUpdate();

  const {asset, uploadingImage, changeProfileImage, updateImageFromProfile} =
    useProfileImage();

  useEffect(() => {
    if (profileData?.profileImage) {
      updateImageFromProfile(profileData.profileImage);
    }
  }, [profileData]);

  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader title="Edit Account" color="#FFD700" />
      <ScrollView>
        <Box w="$full" flex={1} alignItems="center" bg="$background">
          {uploadingImage ? (
            <Box
              width={100}
              height={100}
              borderRadius={100}
              borderColor="grey"
              borderWidth={2}
              marginTop={40}
              justifyContent="center"
              alignItems="center"
              bg="$backgroundMuted">
              <Spinner size="small" color="$primary" />
            </Box>
          ) : (
            <Image
              source={{
                uri:
                  asset.length > 0
                    ? asset[0].uri
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BayI556gLkxJOQiauojOgcj6hqQAv34WCQ&usqp=CAU',
              }}
              alt="Profile Image"
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                borderColor: 'grey',
                borderWidth: 2,
                marginTop: 40,
              }}
            />
          )}

          <TouchableOpacity onPress={changeProfileImage}>
            <Text
              mt="$3"
              fontSize="$lg"
              color="$textSecondary"
              textDecorationLine="underline">
              Change Photo
            </Text>
          </TouchableOpacity>

          {/* Profile Information Form */}
          <Formik
            enableReinitialize
            initialValues={profileInitialValues}
            validationSchema={profileInfoValidationSchema}
            onSubmit={updateProfile}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              dirty,
            }) => (
              <Box px="$4" w="$full">
                <CustomInput
                  label="First name"
                  labelColor="$textPrimary"
                  color="$textPrimary"
                  borderRadius="$xl"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  error={touched.firstName && errors.firstName}
                  errorMessage={errors.firstName}
                  placeholder="Enter new first name (optional)"
                />
                <CustomInput
                  label="Last name"
                  labelColor="$textPrimary"
                  color="$textPrimary"
                  borderRadius="$xl"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  error={touched.lastName && errors.lastName}
                  errorMessage={errors.lastName}
                  placeholder="Enter new last name (optional)"
                />
                <CustomInput
                  label="Email address"
                  labelColor="$textPrimary"
                  color="$textPrimary"
                  borderRadius="$xl"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email}
                  errorMessage={errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Enter new email (optional)"
                />
                <Box mt="$6" mb="$4" px="$16">
                  <FlatButton
                    title={isSubmitting ? 'Saving...' : 'Save Profile'}
                    onPress={handleSubmit}
                    disabled={isSubmitting || !dirty}
                  />
                </Box>
              </Box>
            )}
          </Formik>

          <Box bg="$secondary" h="$10" w={'$full'}>
            <Text
              px={'$5'}
              paddingTop={'$2'}
              color="$textSecondary"
              style={styles.headerText}>
              Change password
            </Text>
          </Box>

          {/* Password Change Form */}
          <Formik
            initialValues={passwordInitialValues}
            validationSchema={conditionalPasswordValidationSchema}
            onSubmit={updatePassword}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              dirty,
            }) => (
              <>
                <Box px="$4" w="$full">
                  <CustomShowAndHidePasswordInput
                    label="Current Password"
                    labelColor="$textPrimary"
                    showPassword={showCurrentPassword}
                    togglePasswdShowHideState={setShowCurrentPassword}
                    value={values.currentPassword}
                    onChangeText={handleChange('currentPassword')}
                    onBlur={handleBlur('currentPassword')}
                    error={touched.currentPassword && errors.currentPassword}
                    errorMessage={errors.currentPassword}
                    placeholder="Enter current password"
                  />
                  <CustomShowAndHidePasswordInput
                    label="New Password"
                    labelColor="$textPrimary"
                    showPassword={showNewPassword}
                    togglePasswdShowHideState={setShowNewPassword}
                    value={values.newPassword}
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    error={touched.newPassword && errors.newPassword}
                    errorMessage={errors.newPassword}
                    placeholder="Enter new password"
                  />
                  <CustomShowAndHidePasswordInput
                    label="Confirm Password"
                    labelColor="$textPrimary"
                    showPassword={showConfirmPassword}
                    togglePasswdShowHideState={setShowConfirmPassword}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={touched.confirmPassword && errors.confirmPassword}
                    errorMessage={errors.confirmPassword}
                    placeholder="Confirm new password"
                  />
                </Box>
                <Box mt="$6" mb="$4" px="$16" w="$full">
                  <FlatButton
                    title={isSubmitting ? 'Updating...' : 'Update Password'}
                    onPress={handleSubmit}
                    disabled={isSubmitting || !dirty}
                  />
                </Box>
              </>
            )}
          </Formik>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default EditProfilePage;

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 16,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
    color: 'white',
    fontSize: 16,
  },
  container: {
    alignItems: 'left',
  },
  headerText: {
    fontSize: 18,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'left',
    padding: 15,
  },
  settingText: {
    fontSize: 16,
    paddingLeft: 20,
  },
  toggleContainer: {},
  arrowContainer: {},
  resources: {
    padding: 15,
  },
  resourcesText: {
    fontSize: 16,
  },
});
