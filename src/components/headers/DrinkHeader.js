import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {Box} from '@gluestack-ui/themed';
import {BackIcon} from '../../assets/svg/BackIcon';
import {HStack} from '@gluestack-ui/themed';

const DrinkHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <Box h={'$16'} bg="$background">
      <Box
        position="absolute"
        bottom={'$2'}
        px={'$4'}
        flexDirection="row"
        justifyContent="space-between"
        w={'100%'}
        alignItems="center">
        <TouchableOpacity flex={1} onPress={() => navigation.goBack()}>
          <Box mb={'$2'}>
            <BackIcon />
          </Box>
        </TouchableOpacity>
        <Text
          color="$textPrimary"
          fontSize={'$xl'}
          w="$3/5"
          textAlign="center">
          {title}
        </Text>
        <HStack gap={'$4'}></HStack>
      </Box>
    </Box>
  );
};

export default DrinkHeader;

const styles = StyleSheet.create({});
