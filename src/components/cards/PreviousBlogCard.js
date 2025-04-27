import { StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Box, Text, VStack} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';

const PreviousBlogCard = ({title, imageUrl, imageDescription}) => {
  const navigation = useNavigation();

  return (
    <Box>
      <Box>
        <HStack mt="$4" gap="$2.5" w="$full">
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
            borderRadius="$xl"
            alt="Blog image"
          />
          <VStack flex={1} justifyContent="space-around">
            <HStack
              justifyContent="space-between"
              alignItems="center"
              w="$full">
              <Text fontWeight="$bold" color="$textPrimary">
                {title}
              </Text>
              <Text fontSize="$sm">Oct 19, 2023</Text>
            </HStack>
            <HStack alignItems="center" gap="$2">
              <Avatar size="sm" />
              <Text fontSize="$sm">iexplore weekly | 10 min read</Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default PreviousBlogCard;

const styles = StyleSheet.create({});