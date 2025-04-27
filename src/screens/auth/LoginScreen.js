import AsyncStorage from '@react-native-async-storage/async-storage';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import FlatButton from '../../components/buttons/FlatButton';
import CustomFormBox from '../../components/containers/CustomFormBox';
import SafePageContainer from '../../components/containers/SafePageContainer';
import CustomInput from '../../components/inputs/CustomInput';
import {SCREENS} from '../../navigation/screenNames';
import {loginSchema} from '../../schema/authSchemas';

import {useDispatch, useSelector} from 'react-redux';
import {setError, setLoading} from '../../redux/auth/authSlice';
import GlobalHeader from '../../components/headers/GlobalHeader';
import { signIn } from '../../redux/auth/authActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {loading, error } = useSelector(state => state.auth);

  const formik = useFormik({
    initialValues: {
      username_or_email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async values => {
      dispatch(setLoading(true));

      try {
        const response = await dispatch(signIn(values)).unwrap();
        // console.log('LOGIN UI RESPOSED', response):
        if (response.code === '200' ) {
          navigation.navigate(SCREENS.navigators.home, {
            screen: SCREENS.home.favoriteCategory,
          });
        }
      } catch (err) {
        console.log('Login error:', err);
        dispatch(setError(err))
      } finally {
        dispatch(setLoading(false));
      }
    },
  });

  return (
    <SafePageContainer>
      <Box bg="$background" flex={1} pt="$2">
        <GlobalHeader />
        <Box marginVertical="$5">
          <Text
            color="$textSecondary"
            fontSize={moderateScale(24)}
            textAlign="center"
            fontWeight="$semibold"
            lineHeight="$2xl">
            Login
          </Text>
        </Box>
        <CustomFormBox h={verticalScale(400)} ph={scale(16)}>
          <CustomInput
            keyboardType="email-address"
            label="Username or Email"
            onChangeText={formik.handleChange('username_or_email')}
            onBlur={formik.handleBlur('username_or_email')}
            value={formik.values.username_or_email}
            error={
              formik.touched.username_or_email &&
              formik.errors.username_or_email
            }
          />
          <CustomInput
            type="password"
            label="Password"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
          <Box mt={0} justifyContent="flex-end" alignItems="flex-end">
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.auth.forgotPassword)}>
              <Text color="$textPrimary">Forgot password</Text>
            </TouchableOpacity>
          </Box>

          <Box mt="$64">
            <FlatButton
              isLoading={loading}
              disabled={loading || !formik.isValid}
              title={loading ? 'Logging in' : 'Login'}
              onPress={formik.handleSubmit}
            />
          </Box>
        </CustomFormBox>

        <HStack justifyContent="center" mt="$24">
          <Text color="$textPrimary">Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.auth.signUp)}>
            <Text
              ml={scale(8)}
              textDecorationLine="underline"
              fontWeight="600"
              color="$textSecondary">
              Sign up
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafePageContainer>
  );
};

export default LoginScreen;
