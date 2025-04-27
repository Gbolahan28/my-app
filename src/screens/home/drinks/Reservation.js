import React, {useState} from 'react';
import {Box, CopyIcon, HStack, Text} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import DashboardHeader from '../../../components/headers/DashboardHeader';
import {ScrollView} from '@gluestack-ui/themed';
import CustomInput from '../../../components/inputs/CustomInput';
import SafePageContainer from '../../../components/containers/SafePageContainer';
import FlatButton from '../../../components/buttons/FlatButton';
import CustomDatePicker from '../../../components/inputs/CustomDatePicker';
import CustomTimePicker from '../../../components/inputs/CustomTimePicker';
import CustomSelect from '../../../components/inputs/CustomSelect';
import CustomBottomSheet from '../../../components/modals/CustomBottomSheet';
import {Icon} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../navigation/screenNames';

const Reservation = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('drinks');
  const [selectedValue, setSelectedValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    numberOfGuests: null,
    date: null,
    time: null,
    budget: null,
  });

  const handleReservation = () => {
    // Handle reservation logic here
    setOpenBottomSheet(true);
  };

  return (
    <SafePageContainer>
      <Box bg="$background" flex={1} pt="$4" px="$4">
        <DashboardHeader />
        <Text
          fontSize="$xl"
          color="$textPrimary"
          fontWeight="bold"
          textAlign="center"
          mt="$2"
          mb="$4">
          Maxxa Beach bar
        </Text>
        <Text fontSize="$sm" color="$textSecondary" textAlign="center" mb="$2">
          @783 Ozumba Mbadiwa Ave, victoria island
        </Text>
        <ScrollView>
          <Box px="$4" py="$4">
            <CustomSelect
              label="Select number of Guests"
              options={[
                {label: 'From guests 2 to 4', value: '2-4'},
                {label: 'From guests 5 to 10', value: '5-10'},
                {label: 'From guests 10 and above', value: '10+'},
              ]}
              value={selectedValue}
              onValueChange={setSelectedValue}
              error={setErrorMessage}
            />

            <CustomDatePicker label="Your preferred day" />

            <CustomTimePicker label="Your arrival time" />

            <CustomInput
              label="What is your estimated budget?"
              keyboardType="numeric"
            />

            <FlatButton title="Make Reservation" onPress={handleReservation} />
          </Box>
        </ScrollView>
      </Box>

      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={['50%']}
        enablePanDownToClose={true}>
        <Box style={styles.container} w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <Box alignItems="center">
              <Text color="$textSecondary">
                Use this code to claim your discount
              </Text>

              <HStack
                p="$3"
                my="$4"
                borderWidth="$1"
                borderColor="$textTertiary"
                borderRadius="$lg"
                bg="$backgroundDark900"
                justifyContent="space-between"
                alignItems="center"
                gap="$2">
                <Text color="$textPrimary">IEXPLORE25OFF</Text>
                <Icon as={CopyIcon} color="$textPrimary" />
              </HStack>

              <Text color="$textPrimary" textAlign="center" mt="$8" mb="$16">
                Please use the provided coupon code{' '}
                <Text fontSize="$sm" color="$textSecondary">
                  'IEXPLORE25OFF'
                </Text>{' '}
                to redeem your discount offer at Club Quilox. Kindly provide the
                code to redeem your discount offer.
              </Text>

              <FlatButton
                title="Claim discount"
                onPress={() => navigation.navigate(SCREENS.drinks.congrats)}
              />
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </SafePageContainer>
  );
};

export default Reservation;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
