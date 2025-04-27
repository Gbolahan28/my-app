import {Box, Text, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {verticalScale} from 'react-native-size-matters';

const CustomTimePicker = ({label = 'Select Time', setTime}) => {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const toggleTimePicker = () => {
    setTimePickerVisible(!isTimePickerVisible);
  };

  const handleTimeConfirm = time => {
    const formattedTime = formatTime(time);
    setSelectedTime(formattedTime);
    setTime(time);
    toggleTimePicker();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleTimePicker}>
      <Box my="$1.5">
        <Text color="$textPrimary">{label}</Text>
      </Box>
      <Box
        borderColor="$textSecondary"
        variant="underlined"
        borderStyle="solid"
        borderBottomWidth={1}
        borderBottomColor="$primary"
        justifyContent="center"
        h={verticalScale(46)}
        mb="$1.5"
        bg="$inputBackground">
        <VStack w="100%">
          <Text color="$textPrimary" pl={'$4'}>
            {selectedTime || 'HH:MM AM/PM'}
          </Text>
        </VStack>
        <DateTimePickerModal
          display="spinner"
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={toggleTimePicker}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default CustomTimePicker;

const styles = StyleSheet.create({});

export const formatTime = time => {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};
