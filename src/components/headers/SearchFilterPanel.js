import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, Button, ButtonIcon} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {ListFilterIcon} from 'lucide-react-native';
import {Icon} from '@gluestack-ui/themed';
import CustomInput from '../inputs/CustomInput';
import {verticalScale} from 'react-native-size-matters';
import {Text} from '@gluestack-ui/themed';

const SearchFilterPanel = ({openBottomSheet}) => {
  const navigation = useNavigation();
  return (
    <Box w="100%" bg="$secondary">
      <Text fontSize="$sm" color="$textSecondary" textAlign="center">
        Claim drinks waiting for you now!
      </Text>
      <HStack
        px="$12"
        py="$3"
        w="100%"
        gap="$20"
        alignItems="center"
        justifyContent="space-around">
        <CustomInput
          placeholder="Search"
          w="100%"
          fontSize="$md"
          h={verticalScale(40)}
          borderRadius="$full"
          bgColor="$textTertiary"
        />
        <Button
          bg="$textTertiary"
          borderRadius="$lg"
          onPress={() => openBottomSheet(true)}>
          <ButtonIcon
            as={ListFilterIcon}
            color="$backgroundLight600"></ButtonIcon>
        </Button>
      </HStack>
    </Box>
  );
};

export default SearchFilterPanel;

const styles = StyleSheet.create({});
