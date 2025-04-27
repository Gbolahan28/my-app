import React, {useState} from 'react';
import {Box} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import {ScrollView} from '@gluestack-ui/themed';
import {FormControl} from '@gluestack-ui/themed';
import {FormControlLabelText} from '@gluestack-ui/themed';
import {Textarea} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {TextareaInput} from '@gluestack-ui/themed';
import {
  Divider,
  FormControlLabel,
  HStack,
  Icon,
  Text,
} from '@gluestack-ui/themed';
// import RadioButton from "../../../components/buttons/RadioButton";

import Checkbox from 'react-custom-checkbox';
import {Circle} from 'lucide-react-native';

const RatePage = () => {
  const radioButtonOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [selectedOption, setSelectedOption] = useState(radioButtonOptions[0]);
  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader title="Rate App" color="#fff" />
      <ScrollView>
        <Box m="$4">
          <Text color="$textPrimary">
            We appreciate your feedback. What do you think about iexplore?
          </Text>

          <Box my="$6">
            <Text color="$textPrimary" fontWeight="$bold" fontSize={24}>
              Your rating:
            </Text>
            <Text color="$textDark300" my="$3">
              4 star
            </Text>
            {/* <HStack gap="$3">
                    {radioButtonOptions.map((singleOption) => (
                        <Checkbox
                        checked={true}
                        icon={
                          <Box
                            style={{
                              display: "flex",
                              flex: 1,
                              backgroundColor: "#174A41",
                              alignSelf: "stretch",
                            }}
                          >
                            <Icon as={Circle} color="white" size={20} />
                          </Box>
                        }
                        borderColor="#174A41"
                        borderRadius={20}
                        style={{ overflow: "hidden" }}
                        size={20}
                        label="Coooool right?"
                      />
                    ))}
                    </HStack> */}
          </Box>

          <Divider bg="$textDark800" my="$4" />
          <FormControl px="$1">
            <FormControlLabel>
              <FormControlLabelText
                color="$textPrimary"
                fontSize="$xl"
                fontWeight="$bold">
                Review
              </FormControlLabelText>
            </FormControlLabel>
            <Textarea
              my="$5"
              h={250}
              borderColor="$inputBackground"
              $focus={{borderColor: '$textSecondary'}}
              bg="$secondary"
              px="$2"
              py="$2">
              <TextareaInput
                placeholder="Type your review"
                color="$textSecondary"
              />
            </Textarea>

            <HStack justifyContent="space-between">
              <FormControl>
                <Button
                  action="secondary"
                  variant="link"
                  mr="$4"
                  onPress={() => setOpenQuestionBottomSheet(false)}>
                  <ButtonText color="$textPrimary" fontWeight="$semibold">
                    Cancel
                  </ButtonText>
                </Button>
              </FormControl>
              <FormControl>
                <Button action="secondary" borderRadius="$full">
                  <ButtonText>Submit</ButtonText>
                </Button>
              </FormControl>
            </HStack>
          </FormControl>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default RatePage;

const styles = StyleSheet.create({});
