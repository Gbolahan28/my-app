import {Box, Text, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {verticalScale} from 'react-native-size-matters';

const CustomDateAgePicker = ({label = 'Age', setUserAge, setDate}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setselectedDate] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateConfirm = date => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const formattedDate = formatDate(date);
    setselectedDate(formattedDate);
    setSelectedAge(age);
    setUserAge(age);
    setDate(date);
    toggleDatePicker();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleDatePicker} >
      <Box my="$1.5">
        <Text color="$textPrimary">
          {label} {selectedAge && `(${selectedAge} years old)`}
        </Text>
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
            {selectedDate}
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

export default CustomDateAgePicker;

const styles = StyleSheet.create({});

export const formatDate = date => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(date).toLocaleDateString('en-US', options);
};
