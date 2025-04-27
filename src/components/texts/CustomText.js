import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@gluestack-ui/themed';

const CustomText = () => {
  return (
    <View>
      <Text size="2xl" color="$textPrimary" fontWeight="$bold">
        Connecting you to the best of nightlife made for you.
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
