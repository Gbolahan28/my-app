/* eslint-disable prettier/prettier */
import {HStack, RadioIndicator, RadioLabel, Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React, {useRef} from 'react';
// import {RadioGroup} from '@gluestack-ui/themed';
import {Radio} from '@gluestack-ui/themed';
import {RadioIcon} from '@gluestack-ui/themed';
import {CircleIcon} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';

const RatingsItem = ({stars, index, values, setValues}) => {
  const radioRef = useRef(null);
  const handleRadioChange = e => {
    e.preventDefault();
    const checkboxValue = radioRef.current.checked;
  };
  return (
    <Box py={'$3'}>
      <HStack flexDirection={'row'} alignItems="center" gap={'$2'}>
        <Radio
          value={stars.count + 'stars'}
          ref={radioRef}
          onChange={handleRadioChange}
          size="md"
          isInvalid={false}
          isDisabled={false}
          color={'$primary'}>
          <RadioIndicator mr="$2">
            <RadioIcon
              as={CircleIcon}
              strokeWidth={1}
              color="$primary"
              bg="$primary"
            />
          </RadioIndicator>
          <RadioLabel>{stars.count} Stars</RadioLabel>
        </Radio>
        <HStack gap={'$2'}>
          <HStack flexDirection={'row'} alignItems="center" gap={'$2'}>
            {stars.value}
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default RatingsItem;

const styles = StyleSheet.create({
  radio: {
    accentColor: 'red',
  },
});
