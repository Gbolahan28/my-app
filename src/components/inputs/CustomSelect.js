import {
  ChevronDownIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const CustomSelect = ({
  label,
  options,
  onValueChange,
  value,
  error,
  labelColor = '$textPrimary',
  bgColor = '$inputBackground',
  h = verticalScale(46),
  mx,
  borderRadius,
  ...rest
}) => {
  return (
    <FormControl marginVertical={verticalScale(10)}>
      {label && (
        <FormControlLabel mb="$1.5">
          <FormControlLabelText color={labelColor}>
            {label}
          </FormControlLabelText>
        </FormControlLabel>
      )}
      <Select onValueChange={onValueChange} selectedValue={value}>
        <SelectTrigger
          variant="underlined"
          size="md"
          borderColor="$textSecondary"
          bg={bgColor}
          h={h}>
          <SelectInput color="$textPrimary" px="$4" mt="$1" {...rest} />
          <SelectIcon mr="$5" mt="$1">
            <Icon as={ChevronDownIcon} color="$primary" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options.map(option => (
              <SelectItem
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
      {error && <Text color="$red500">{error}</Text>}
    </FormControl>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({});
