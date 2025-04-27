import React from 'react';
import {Box, FormControl, HStack, ScrollView, Text} from '@gluestack-ui/themed';

import {verticalScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrinkHeader from '../../../components/headers/DrinkHeader';
import CategoryButton from '../../../components/buttons/CategoryButton';
import CustomInput from '../../../components/inputs/CustomInput';
import {Textarea} from '@gluestack-ui/themed';
import {TextareaInput} from '@gluestack-ui/themed';
import {FormControlLabel} from '@gluestack-ui/themed';
import {FormControlLabelText} from '@gluestack-ui/themed';
import FlatButton from '../../../components/buttons/FlatButton';
import {SCREENS} from '../../../navigation/screenNames';

const AddLocation = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <DrinkHeader title="Add a location" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box my="$4" px="$4">
          <Text fontWeight="$bold" my="$3" color="$textPrimary">
            Add a location to iexplore
          </Text>
          <Text fontSize="$sm" color="$textPrimary">
            Thank you for helping us to grow the iexplore community by telling
            us about a new place to list on iexplore. Kindly tell us more about
            this cool spot.
          </Text>

          <Box mt="$6">
            <Text fontWeight="$bold" my="$3" color="$textPrimary">
              Spot category
            </Text>
            <HStack flexWrap="wrap" gap="$2">
              <CategoryButton title="Club" />
              <CategoryButton title="Restaurants" />
              <CategoryButton title="Bars" />
              <CategoryButton title="Beach" />
              <CategoryButton title="Lounge" />
              <CategoryButton title="Hotel" />
            </HStack>
            <Text fontSize="$sm" color="$textPrimary" my="$3">
              Are you the proud owner, one of the awesome team members, or the
              official ambassador for this location?
            </Text>
            <Text fontSize="$xs" color="$textSecondary">
              This field is required
            </Text>
            <HStack gap="$2">
              <CategoryButton title="Yes" />
              <CategoryButton title="No" />
            </HStack>
            <Text fontWeight="$bold" my="$3" color="$textPrimary">
              What is your role?
            </Text>
            <HStack flexWrap="wrap" gap="$2">
              <CategoryButton title="Owner" />
              <CategoryButton title="Manager" />
              <CategoryButton title="Guest" />
              <CategoryButton title="Sales/Marketing" />
              <CategoryButton title="Other" />
            </HStack>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText
                  fontWeight="$bold"
                  my="$3"
                  color="$textPrimary">
                  Official name of spot
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInput h={verticalScale(48)} />
              {/* <Text fontWeight='$bold' my="$3" color="$textPrimary">Operation time</Text>
                    <HStack>
                        <CustomInput type="time" />
                    </HStack> */}
              <FormControlLabel>
                <FormControlLabelText
                  fontWeight="$bold"
                  my="$3"
                  color="$textPrimary">
                  Brief description about spot
                </FormControlLabelText>
              </FormControlLabel>
              <Textarea
                my="$4"
                h={150}
                borderColor="$inputBackground"
                borderRadius="$xl"
                $focus={{borderColor: '$textSecondary'}}
                bg="$secondary"
                px="$4"
                py="$2">
                <TextareaInput color="$textPrimary" />
              </Textarea>
              <FormControlLabel>
                <FormControlLabelText
                  fontWeight="$bold"
                  my="$3"
                  color="$textPrimary">
                  Address of spot
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInput h={verticalScale(48)} />
              <FormControlLabel>
                <FormControlLabelText
                  fontWeight="$bold"
                  my="$3"
                  color="$textPrimary">
                  Contact information
                </FormControlLabelText>
              </FormControlLabel>
              <FormControlLabel>
                <FormControlLabelText
                  color="$textDark600"
                  fontSize="$sm"
                  ml="$2">
                  Telephone
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInput h={verticalScale(48)} />
              <FormControlLabel>
                <FormControlLabelText
                  color="$textDark600"
                  fontSize="$sm"
                  ml="$2"
                  my="$2">
                  Email Address (Optional)
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInput h={verticalScale(48)} />
              <FormControlLabel>
                <FormControlLabelText
                  color="$textDark600"
                  fontSize="$sm"
                  ml="$2">
                  Website (Optional)
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInput h={verticalScale(48)} />

              <Box mt="$10" px="$6">
                <FlatButton
                  title="Submit"
                  onPress={() => {
                    navigation.navigate(SCREENS.home.locationCongrats);
                  }}
                />
              </Box>
            </FormControl>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default AddLocation;

const styles = StyleSheet.create({});
