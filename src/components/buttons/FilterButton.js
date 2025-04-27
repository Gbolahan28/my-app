/* eslint-disable prettier/prettier */
import {
  Button,
  ButtonIcon,
  ButtonText,
  ChevronDownIcon,
} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const FilterButton = ({
  width = '$full',
  title = 'Button Text',
  icon,
  onPress = () => {},
  active,
}) => {
  return (
    <Button
      flex={1}
      w={width}
      px={moderateScale(37)}
      py={moderateScale(8)}
      variant="solid"
      action="primary"
      $active-bg="$primary"
      borderRadius={'$4xl'}
      onPress={onPress}
      backgroundColor={active ? '$primary' : '$inputBackground'}>
      <ButtonText
        color={'$tertiary'}
        fontSize={moderateScale(16)}
        fontWeight="500">
        {title}
      </ButtonText>
      <ButtonIcon as={ChevronDownIcon} ml={'$4'} color="$tertiary" />
    </Button>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
