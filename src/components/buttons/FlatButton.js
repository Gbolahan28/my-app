import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const FlatButton = ({
  isLoading = false,
  width = '100%',
  color = '$textTertiary',
  borderColor = '$primary',
  borderWidth = 1,
  borderRadius = '$4xl',
  bgColor = '$primary',
  height = verticalScale(49),
  title = 'Button Text',
  icon,
  onPress = () => {},
  fontSize = moderateScale(16),
  iconRight,
  variant = 'solid',
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      action="primary"
      w={width}
      h={height}
      alignSelf="center"
      borderWidth={borderWidth}
      borderColor={borderColor}
      backgroundColor={bgColor}
      borderRadius={borderRadius}
      marginVertical={'$2'}
      $active-bg="$orange200"
      onPress={onPress}
      {...rest}>
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <>
          {icon && <ButtonIcon as={icon} mr={'$2'} color={color} />}
          <ButtonText color={color} fontSize={fontSize} fontWeight="500">
            {title}
          </ButtonText>
          {iconRight && <ButtonIcon as={iconRight} ml={'$1'} color={color} />}
        </>
      )}
    </Button>
  );
};

export default FlatButton;

const styles = StyleSheet.create({});
