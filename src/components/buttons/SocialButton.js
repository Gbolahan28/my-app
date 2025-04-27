import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const SocialButton = ({
  isLoading = false,
  width = scale(198),
  height = verticalScale(33),
  title = 'Button Text',
  icon,
  onPress = () => {},
}) => {
  return (
    <Button
      variant="solid"
      action="primary"
      w={width}
      h={height}
      alignSelf="center"
      backgroundColor="$white"
      borderRadius={'$lg'}
      marginVertical={'$2'}
      $active-bg="#f2f2f2"
      onPress={onPress}>
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <>
          <ButtonIcon as={icon} mr={'$2'} />
          <ButtonText
            color="#685740"
            fontSize={moderateScale(14)}
            fontWeight="500">
            {title}
          </ButtonText>
        </>
      )}
    </Button>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});
