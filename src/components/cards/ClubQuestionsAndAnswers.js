import {Image, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {Avatar, Box, Divider, Text, VStack} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {AvatarImage} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import { moderateScale } from 'react-native-size-matters';

const ClubQuestionsAndAnswers = ({modalState}) => {
  // const [modalState, setModalState] = ();
  return (
    <Box my={25} px="$4">
      <HStack alignItems="center" my="$2" justifyContent="space-between">
        <HStack space="lg" alignItems="center">
          <Avatar size="md">
            <AvatarImage
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
              }}
              alt="Avatar"
            />
          </Avatar>
          <VStack>
            <Text color="$coolGray200" fontWeight="$bold" fontSize="$md">
              Max Smith
            </Text>
            <Text fontSize={moderateScale(12)} color="$textGrey">
              12 Sept 2023
            </Text>
          </VStack>
        </HStack>
        <Text
          w={85}
          fontSize="$sm"
          color="$textGrey"
          alignSelf="flex-start"
          textAlign="right">
          21 answers contributed
        </Text>
      </HStack>
      <Text fontSize={moderateScale(14)} color="$coolGray200">
        For guys who have been there a lot what is the price range for having a
        good time here? is it for rich folks or can a average joe have a nice
        time there also?
      </Text>
      <Box
        my="$3"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Button
          size="md"
          bg="$background"
          borderColor="$primary"
          borderWidth={1}
          borderRadius="$2xl"
          action="primary"
          onPress={() => modalState(true)}>
          <ButtonText color="$textSecondary">Answer question</ButtonText>
        </Button>
        <Text color="$textSecondary" underline>
          Read all answers
        </Text>
      </Box>
    </Box>
  );
};

export default ClubQuestionsAndAnswers;

const styles = StyleSheet.create({});
