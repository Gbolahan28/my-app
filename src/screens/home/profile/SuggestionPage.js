import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  HStack,
  ScrollView,
  Text,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import CustomInput from '../../../components/inputs/CustomInput';
import {FormControlLabelText} from '@gluestack-ui/themed';
import {Textarea} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import FlatButton from '../../../components/buttons/FlatButton';

const SuggestionPage = () => {
  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader title="Give a suggestion" color="#fff" pb="$6" />
      <ScrollView>
        <Box m="$4">
          <CustomInput
            label="Title"
            labelColor="$textDark400"
            borderRadius="$md"
          />
          <CustomInput
            label="Email"
            labelColor="$textDark400"
            type="email"
            borderRadius="$md"
          />
          <FormControl>
            <Textarea
              my="$4"
              h={250}
              borderColor="$inputBackground"
              borderRadius="$md"
              $focus={{borderColor: '$textSecondary'}}
              bg="$inputBackground"
              px="$1"
              py="$1">
              <TextareaInput
                placeholder="Your suggestion"
                fontSize={19}
                color="$textSecondary"
              />
            </Textarea>

            <Box mt="$5" px="$8">
              <FlatButton title="Send" />
            </Box>
          </FormControl>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SuggestionPage;

const styles = StyleSheet.create({});
