import {Box, ScrollView} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';

const TermsOfUsePage = () => {
  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader pb="$6" color="#fff" title="Terms of Use" />
      <ScrollView>
        <Box mx="$4">
          <Text textAlign="center" my="$4" color="$textDark400">
            Last updated: Jan 30, 2024
          </Text>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Terms of Use for iexplore
            </Text>

            <Text color="$textPrimary">
              Welcome to iexplore! These Terms of Use govern your use of our
              mobile application and related services. By accessing or using
              iexplore, you agree to comply with these terms.
            </Text>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Acceptance of Terms
            </Text>

            <Text color="$textPrimary">
              By using iexplore, you agree to be bound by these Terms of Use and
              all applicable laws and regulations. If you do not agree with any
              part of these terms, you may not use our app.
            </Text>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="$bold">
              Use of The App
            </Text>
            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary">
                1. License: We grant you a limited, non-exclusive,
                non-transferable, and revocable license to use iexplore for your
                personal and non-commercial purposes.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary">
                2. User Accounts: Some features of the app may require you to
                create an account. You are responsible for maintaining the
                confidentiality of your account credentials and for any activity
                that occurs under your account.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary">
                3. Prohibited Activities: You agree not to engage in any of the
                following activities:
              </Text>
              <Text color="$textPrimary">
                - Violating any laws, regulations, or third-party rights.
              </Text>
              <Text color="$textPrimary">
                - Interfering with or disrupting the app's functionality or
                servers.
              </Text>
              <Text color="$textPrimary">
                - Attempting to access, tamper with, or use non-public areas of
                the app without authorization.
              </Text>
              <Text color="$textPrimary">
                - Using the app for any unlawful or fraudulent purpose.
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="$bold">
              Content and Intellectual Property
            </Text>
            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                1. User Content: You retain ownership of any content you submit
                or upload to iexplore. By posting content, you grant us a
                worldwide, non-exclusive, royalty-free license to use, modify,
                and distribute your content for the purposes of operating and
                improving the app.
              </Text>

              <Text color="$textPrimary" fontWeight="$semibold">
                2. Intellectual Property: All intellectual property rights in
                the app and its content, including but not limited to
                trademarks, logos, and software, are owned by or licensed to us.
                You agree not to use, modify, reproduce, or distribute any of
                our intellectual property without our prior written consent.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                Limitation of Liability
              </Text>
              <Text color="$textPrimary">
                1. Disclaimer of Warranties: iexplore is provided on an "as is"
                and "as available" basis, without any warranties of any kind,
                either express or implied. We do not guarantee that the app will
                be error-free, secure, or uninterrupted.
              </Text>

              <Text color="$textPrimary">
                2. Limitation of Liability: To the maximum extent permitted by
                law, we shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or
                related to your use of iexplore, even if we have been advised of
                the possibility of such damages.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                Indemnification
              </Text>
              <Text color="$textPrimary">
                You agree to indemnify and hold harmless iexplore, its
                affiliates, and their respective officers, directors, employees,
                and agents from and against any claims, liabilities, damages,
                losses, and expenses, including legal fees, arising out of or in
                any way connected with your use of the app or violation of these
                Terms of Use.
              </Text>
            </Box>

            <Box flexDirection="column" gap="$2">
              <Text color="$textPrimary" fontWeight="$semibold">
                Changes to the Terms
              </Text>
              <Text color="$textPrimary">
                We reserve the right to update or modify these Terms of Use at
                any time without prior notice. We will notify you of any
                material changes by posting the updated terms within the app.
                Your continued use of iexplore after the posting of changes
                constitutes your acceptance of such changes.
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column" gap="$4" my="$3">
            <Text color="$textPrimary" fontWeight="bold">
              Governing Law
            </Text>

            <Text color="$textPrimary">
              These Terms of Use shall be governed by and construed in
              accordance with the laws of Nigeria, without regard to its
              conflict of law provisions.
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
              Thank you for using iexplore. We hope you enjoy your experience!
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default TermsOfUsePage;

const styles = StyleSheet.create({});
