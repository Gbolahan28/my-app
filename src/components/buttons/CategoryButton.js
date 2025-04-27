import {Button, ButtonIcon, ButtonText} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const CategoryButton = ({
  title = 'All',
  active = false,
  icon,
  borderRadius = '$full',
  onPress = () => {},
}) => {
  return (
    <Button
      p={'$1.5'}
      mr="$2"
      variant="solid"
      action="primary"
      alignSelf="center"
      backgroundColor={
        active || title === 'All' ? '$primary' : '$inputBackground'
      }
      $active-bg="$primary"
      borderRadius={borderRadius}
      marginVertical={'$2'}
      onPress={onPress}>
      {icon && <ButtonIcon as={icon} mr="$2" color="$tertiary" />}

      <ButtonText
        color={active || title === 'All' ? '$textDark400' : '$tertiary'}
        fontSize={moderateScale(15)}
        fontWeight="500">
        {title}
      </ButtonText>
    </Button>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({});
