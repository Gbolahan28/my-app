import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, ScrollView} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import ProfileHeader from '../../../components/headers/ProfileHeader';

const PrivacyPolicyPage = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader pb="$6" color="#fff" title="Privacy Policy" />
      <ScrollView>
        <Box mx="$4">
          <Text textAlign="center" my="$4" color="$textDark400">
            Last updated: Jan 30, 2024
          </Text>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Privacy Policy for iexplore
            </Text>

            <Text color="$textPrimary">
              Welcome to iexplore! This Privacy Policy is designed to help you
              understand how we collect, use, and safeguard your personal
              information when you use our mobile application and related
              services.
            </Text>

            <Text color="$textPrimary">
              By using iexplore, you agree to the terms outlined in this Privacy
              Policy.
            </Text>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="$bold">
              Information We Collect
            </Text>
            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                1. Personal Information:
              </Text>
              <Text color="$textPrimary">
                - When you create an account, we may collect your name, email
                address, and other necessary information to provide you with a
                personalized experience.
              </Text>
              <Text color="$textPrimary">
                - We may collect payment information if you choose to make
                in-app purchases or subscribe to premium features.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                2. Location Information:
              </Text>
              <Text color="$textPrimary">
                - [Your App Name] uses location services to connect you with
                nearby entertainment locations. We collect your device's
                location data to enhance your experience and provide accurate
                recommendations.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                3. Usage Information:
              </Text>
              <Text color="$textPrimary">
                - We collect information about how you interact with the app,
                including the features you use, the content you view, and the
                time spent on the app. This helps us improve our services and
                provide you with relevant content.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                4. Device Information:
              </Text>
              <Text color="$textPrimary">
                - We may collect information about your device, including its
                model, operating system, and unique identifiers. This
                information helps us troubleshoot technical issues and optimize
                our app for your device.
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="$bold">
              How We Use Your Information
            </Text>
            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                1. Personalization:
              </Text>
              <Text color="$textPrimary">
                - We use your personal information to customize your experience,
                such as providing tailored recommendations based on your
                preferences and location.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                2. Communication:
              </Text>
              <Text color="$textPrimary">
                - We may use your email address to send important updates,
                newsletters, or promotional offers. You can opt-out of
                promotional emails at any time.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                3. Transaction Purposes:
              </Text>
              <Text color="$textPrimary">
                - If you make in-app purchases, we use your payment information
                to process transactions securely.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                4. Improving Our Services:
              </Text>
              <Text color="$textPrimary">
                - We analyze user behavior and feedback to enhance our app's
                functionality, features, and overall user experience.
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Data Security
            </Text>

            <Text color="$textPrimary">
              We prioritize the security of your information and employ
              industry-standard measures to protect it. However, no method of
              transmission over the internet or electronic storage is entirely
              secure. Therefore, while we strive to protect your personal
              information, we cannot guarantee its absolute security.
            </Text>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Third-Party Links and Services
            </Text>

            <Text color="$textPrimary">
              Our app may contain links to third-party websites or services.
              Please note that we are not responsible for the privacy practices
              of these third parties. We recommend reviewing their privacy
              policies before interacting with their services.
            </Text>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Changes to this privacy Policy
            </Text>

            <Text color="$textPrimary">
              We may update our Privacy Policy to reflect changes in our
              practices. We will notify you of any material changes by posting
              the updated Privacy Policy on our website or through the app. We
              encourage you to review this Privacy Policy periodically.
            </Text>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Contact Us
            </Text>

            <Text color="$textPrimary">
              If you have any questions or concerns about these Terms of Use,
              please contact us at [contact@iexplore.com].
            </Text>

            <Text color="$textPrimary" mt="$3">
              Thank you for trusting iexplore with your information. We are
              committed to providing you with a secure and enjoyable experience.
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default PrivacyPolicyPage;

const styles = StyleSheet.create({});
