import {Box, Text, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {verticalScale} from 'react-native-size-matters';

const CustomDatePicker = ({label = 'Select Date', setDate}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateConfirm = date => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    setDate(date);
    toggleDatePicker();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleDatePicker}>
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
            {selectedDate || 'MM/DD'}
          </Text>
        </VStack>
        <DateTimePickerModal
          display="spinner"
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={toggleDatePicker}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({});

export const formatDate = date => {
  const options = {month: 'long', day: 'numeric'};
  return new Date(date).toLocaleDateString('en-US', options);
};
