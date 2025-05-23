import {
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckIcon,
  HStack,
  Text,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FlatButton from '../../components/buttons/FlatButton';
import CustomFormBox from '../../components/containers/CustomFormBox';
import SafePageContainer from '../../components/containers/SafePageContainer';
import GlobalHeader from '../../components/headers/GlobalHeader';
import CustomDateAgePicker from '../../components/inputs/CustomDateAgePicker';
import CustomInput from '../../components/inputs/CustomInput';
import CustomSelect from '../../components/inputs/CustomSelect';
import {SCREENS} from '../../navigation/screenNames';
import {signUpValidationSchema} from '../../schema/authSchemas';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/auth/authSlice';

const genders = ['Male', 'Female', 'I prefer not to say'];
const SignUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(false);
  // const [gender, setGender] = useState('Male');

  useEffect(() => {
    dispatch(clearError());
    return () => dispatch(clearError());
  }, [dispatch]);


  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      age: '',
      date_of_birth: '',
      phone: '',
      referral_code: '',
      password: '',
      confirm_password: '',
      termsAccepted: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async values => {
      setIsLoading(true);
      try {
        // Convert date_of_birth to string format, e.g. 'YYYY-MM-DD'
        const formattedValues = {
          ...values,
          date_of_birth: moment(values.date_of_birth).format('YYYY-MM-DD'),
        };
        console.log('Form captured with values:', formattedValues);

        navigation.navigate(SCREENS.auth.ageConfirmation, {
          values: formattedValues,
        });
      } catch (err) {
        console.log(
          "Error with user input. Make sure you're entering the correct information:",
          err,
        );
      } finally {
        setIsLoading(false);
      }
    },
    enableReinitialize: true,
  });

  return (
    <SafePageContainer>
      <Box flex={1} bg="$background" pt="$2">
        <GlobalHeader />
        <Box marginVertical={'$4'}>
          <Text
            color="$textSecondary"
            fontSize={moderateScale(24)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight={'$2xl'}>
            Sign up
          </Text>
        </Box>
        <CustomFormBox ph={scale(16)} scroll>
          <CustomInput
            type="text"
            label="First name"
            onChangeText={formik.handleChange('first_name')}
            onBlur={formik.handleBlur('first_name')}
            value={formik.values.first_name}
            error={formik.touched.first_name && formik.errors.first_name}
          />
          <CustomInput
            type="text"
            label="Last name"
            onChangeText={formik.handleChange('last_name')}
            onBlur={formik.handleBlur('last_name')}
            value={formik.values.last_name}
            error={formik.touched.last_name && formik.errors.last_name}
          />
          <CustomInput
            type="text"
            label="Username"
            onChangeText={formik.handleChange('username')}
            onBlur={formik.handleBlur('username')}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
            keyboardType="default"
          />

          <CustomSelect
            label="Gender"
            options={[
              {label: 'Male', value: 'male'},
              {label: 'Female', value: 'female'},
              {label: 'I prefer not to say', value: 'i prefer not to say'},
            ]}
            onValueChange={formik.handleChange('gender')}
            value={formik.values.gender}
            error={formik.touched.gender && formik.errors.gender}
          />

          <CustomInput
            type="text"
            label="Email address"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            keyboardType="email-address"
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <CustomDateAgePicker
            setUserAge={age => {
              formik.setFieldValue('age', age);
            }}
            setDate={date_of_birth => {
              formik.setFieldValue('date_of_birth', date_of_birth);
            }}
            error={formik.touched.age && formik.errors.age}
          />
          <CustomInput
            type="text"
            label="Phone number"
            onChangeText={formik.handleChange('phone')}
            onBlur={formik.handleBlur('phone')}
            keyboardType="phone-pad"
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
          />
          <CustomInput
            type="text"
            label="Referral Id"
            onChangeText={formik.handleChange('referral_code')}
            onBlur={formik.handleBlur('referral_code')}
            value={formik.values.referral_code}
            error={formik.touched.referral_code && formik.errors.referral_code}
          />
          <CustomInput
            type="password"
            label="Password"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            textContentType="oneTimeCode"
          />
          <CustomInput
            type="password"
            label="Confirm password"
            onChangeText={formik.handleChange('confirm_password')}
            onBlur={formik.handleBlur('confirm_password')}
            value={formik.values.confirm_password}
            error={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
            textContentType="oneTimeCode"
          />
          <Box mb={'$16'} mt={verticalScale(24)}>
            <Checkbox
              size="md"
              aria-label="check box"
              mb={'$20'}
              onChange={e => formik.setFieldValue('termsAccepted', e)}>
              <CheckboxIndicator
                mr="$2"
                $checked-bg="$primary"
                $checked={{borderColor: '$primary'}}>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <Text flex={1} color="$textPrimary" fontSize={moderateScale(15)}>
                By creating an account, I accept the{' '}
                <Text color="$textSecondary" underline>
                  Terms of Service
                </Text>{' '}
                and
                <Text color="$textSecondary" underline>
                  {' '}
                  Privacy policy
                </Text>{' '}
                of iexplore.
              </Text>
            </Checkbox>
            <FlatButton title="Sign up" onPress={formik.handleSubmit} />
          </Box>
          <HStack justifyContent="center" mb={'$24'}>
            <Text color="$textPrimary">Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.auth.login)}>
              <Text
                ml={scale(8)}
                textDecorationLine="underline"
                fontWeight="600"
                color="$textSecondary">
                Sign in
              </Text>
            </TouchableOpacity>
          </HStack>
        </CustomFormBox>
      </Box>
    </SafePageContainer>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
