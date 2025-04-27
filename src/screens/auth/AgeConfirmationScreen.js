import {Box, Button, ButtonText, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {apiPost} from '../../api/api-service';
import {url} from '../../api/url';
import FlatButton from '../../components/buttons/FlatButton';
import SafePageContainer from '../../components/containers/SafePageContainer';
import GlobalHeader from '../../components/headers/GlobalHeader';
import {formatDate} from '../../components/inputs/CustomDateAgePicker';
import {SCREENS} from '../../navigation/screenNames';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authActions';

const AgeConfirmationScreen = ({route}) => {
  const dispatch = useDispatch();
  const {values} = route?.params;
  const {age, email, password} = values;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    const formattedDate = formatDateToISO(values.date_of_birth);
    console.log('FORMATTED DATE:', formattedDate);

    if (age < 18) {
      return alert('You must be 18 years or older to sign up.');
    }

    try {
      setIsLoading(true);
      const transformedValues = {
        ...values,
        date_of_birth: moment(values.date_of_birth).format('YYYY-MM-DD'),
        role: 'user',
      };

      console.log(
        'Transformed Values (payload):',
        JSON.stringify(transformedValues, null, 2),
      );

      await dispatch(signUp(transformedValues)).unwrap();
      
      // const token = await apiPost(url.fetchToken, {email, password})
      // console.log("Token data: ", token)
      navigation.navigate(SCREENS.auth.confirmOTP, {
        email: transformedValues.email,
        values: transformedValues,})
    } catch (err) {
      console.log(
        'Error during form submission:',
        JSON.stringify(err, null, 2),
      );

      let errorMessage = 'An unknown error occurred. Please try again.';

      if (err?.response?.data) {
        const errorData = err.response.data;

        if (typeof errorData === 'object') {
          errorMessage = JSON.stringify(errorData, null, 2);
        } else {
          errorMessage = errorData;
        }
      } else if (err?.message) {
        errorMessage = err.message;
      }
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafePageContainer>
      <Box flex={1} bg="$background" pt="$2">
        <GlobalHeader />
        <Box marginVertical={'$5'}>
          <Text
            color="$textSecondary"
            fontSize={moderateScale(24)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight={'$2xl'}>
            Confirm age
          </Text>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <Box
            marginVertical={verticalScale(36)}
            marginHorizontal={scale(16)}
            borderColor="$primary"
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            mx="auto"
            width={scale(170)}
            height={moderateVerticalScale(170)}
            borderRadius={'$full'}
            p="$2">
            <Box
              bg="$inputBackground"
              w="100%"
              h="100%"
              justifyContent="center"
              alignItems="center"
              borderRadius="$full"
              borderColor="$background">
              <Text
                color="$textPrimary"
                fontSize="$7xl"
                lineHeight={'$7xl'}
                fontWeight="$semibold">
                {age}
              </Text>
              <Text color="$textPrimary"> years old</Text>
            </Box>
          </Box>
        </Box>
        <Text
          color="#B0B0B0"
          textAlign="center"
          fontSize="$sm"
          marginVertical={'$2'}>
          {formatDate(values?.date_of_birth)}
          {/* ({values.date_of_birth}) */}
        </Text>
        <Text
          color="$textPrimary"
          fontSize={moderateScale(16)}
          textAlign="center"
          lineHeight={'$xl'}
          marginHorizontal={scale(50)}
          marginVertical={'$4'}>
          As part of our commitment to responsible drinking, please confirm your
          age displayed above is correct and you are of legal drinking age.
        </Text>
        <Box paddingHorizontal={scale(44)} mt={'$16'}>
          <FlatButton
            title="Yes I confirm"
            onPress={handleSignUp}
            // onPress={() => {
            //   navigation.navigate(SCREENS.auth.confirmOTP, {
            //     email: 'aaa@a.com',
            //     values: [],
            //   });
            // }}
            isLoading={isLoading}
          />

        </Box>
      </Box>
    </SafePageContainer>
  );
};

export default AgeConfirmationScreen;

const styles = StyleSheet.create({});

function formatDateToISO(dateStr) {
  const date = new Date(dateStr);

  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
