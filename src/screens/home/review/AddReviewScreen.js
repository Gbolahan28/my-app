import {Box, ScrollView} from '@gluestack-ui/themed';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';


const AddReviewScreen = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <ProfileHeader title={'Add A Review'} color={'$textPrimary'} />
      <ScrollView showsVerticalScrollIndicator={false}>
      </ScrollView>
    </Box>
  );
};

export default AddReviewScreen;

const styles = StyleSheet.create({});
