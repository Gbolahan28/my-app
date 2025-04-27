import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {ShareIcon} from '../../assets/svg/ShareIcon';
import {BookmarkIcon} from '../../assets/svg/BookmarkIcon';
import {Box} from '@gluestack-ui/themed';
import {BackIcon} from '../../assets/svg/BackIcon';
import {HStack} from '@gluestack-ui/themed';
import { SCREENS } from '../../navigation/screenNames';

const AccountHeader = () => {
  const navigation = useNavigation();
  return (
    <Box h={'$16'} bg="$secondary">
      <Box
        position="absolute"
        bottom={'$2'}
        px={'$4'}
        flexDirection="row"
        justifyContent="space-between"
        w={'100%'}
        alignItems="center">
        <TouchableOpacity onPress={() => navigation.goBack()} flex={1}>
          <Box mb={'$2'}>
            <BackIcon />
          </Box>
        </TouchableOpacity>

        <Text color="$textSecondary" fontSize={'$xl'}>
          Club Quilox
        </Text>
        <HStack gap={'$4'}>
          <ShareIcon />
          <BookmarkIcon />
        </HStack>
      </Box>
    </Box>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({});
