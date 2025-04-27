import {Box, HStack, Image, ScrollView, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {
  BookTextIcon,
  ChevronRightIcon,
  FileKey2Icon,
  FilePenLineIcon,
  HeadsetIcon,
  InboxIcon,
  LinkedinIcon,
  LogInIcon,
  Share2Icon,
  StarIcon,
  Youtube,
  MapPinned,
  Martini,
  ShieldQuestion,
  Phone,
  LogOutIcon,
} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import {FacebookIcon} from '../../../assets/svg/FacebookIcon';
import {InstagramIcon} from '../../../assets/svg/InstagramIcon';
import {TwitterIcon} from '../../../assets/svg/TwitterIcon';
import FlatButton from '../../../components/buttons/FlatButton';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import {SCREENS} from '../../../navigation/screenNames';

import {CopyIcon, Icon, VStack} from '@gluestack-ui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {apiPost} from '../../../api/api-service';
import {url} from '../../../api/url';
import CustomBottomSheet from '../../../components/modals/CustomBottomSheet';
import {logout} from '../../../redux/auth/authActions';

const ProfilePage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const token = useSelector(state => state.auth.token);

  // const user = authenticatedUser?.user;

  const handleSignOut = async () => {
    console.log('TOKEN', token);
      const payload = {
        refresh: token.refreshToken,
      };
    try {
      // console.log("TOKEN", token);
      await dispatch(logout(payload));
      console.log('Logout successful!');

      //redirect to login screen
      navigation.navigate(SCREENS.navigators.auth, {
        screen: SCREENS.auth.login,
      });
    } catch (error) {
      console.log('Something went wrong logging user out: ', error);
    }
  };

  return (
    <Box flex={1}>
      <ProfileHeader />
      <ScrollView>
        <Box w="$full" flex={1} alignItems="center" bg="$background">
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BayI556gLkxJOQiauojOgcj6hqQAv34WCQ&usqp=CAU',
            }}
            alt="Profile Image"
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              borderColor: 'grey',
              borderWidth: 2,
              marginTop: 20,
            }}
          />
          <Text
            fontWeight="$bold"
            color="$textPrimary"
            my="$2"
            fontSize={moderateScale(20)}>
            {/* {user?.username} */}
          </Text>
          <Text color="$textPrimary">
            {/* {user?.first_name + ' ' + user?.last_name} */}
          </Text>

          {/* <HStack gap="$4" mt="$4">
            <Text color="$textPrimary">
              <Text color="$textPrimary" fontWeight="$bold">
                100
              </Text>{' '}
              Following
            </Text>
            <Text color="$textPrimary">
              <Text color="$textPrimary" fontWeight="$bold">
                100
              </Text>{' '}
              Followers
            </Text>
          </HStack> */}

          <Box
            mb="$3"
            mt="$2"
            flexDirection="row"
            gap="$4"
            alignItems="center"
            justifyContent="center">
            <TouchableOpacity>
              <FlatButton
                width="$32"
                bgColor="$greyBackground"
                color="$textPrimary"
                title="Edit profile"
                onPress={() => navigation.navigate(SCREENS.profile.editProfile)}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <FlatButton
                width="$32"
                title="Share App"
                color="$secondary"
                onPress={() => setOpenBottomSheet(true)}
              />
            </TouchableOpacity>
          </Box>

          <Box bg="$secondary" h="$10" w={'$full'}>
            <Text
              px={'$3'}
              paddingTop={'$2'}
              color="$textSecondary"
              style={styles.headerText}>
              Saved
            </Text>
          </Box>
          <Box w="$full">
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.profile.notification)}>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <MapPinned color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    Locations
                  </Text>
                </Box>
                <TouchableOpacity style={styles.toggleContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.profile.notification)}>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <Martini color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    Drinks
                  </Text>
                </Box>
                <TouchableOpacity style={styles.toggleContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>

            <Box bg="$secondary" h="$10" w={'$full'}>
              <Text
                px={'$3'}
                paddingTop={'$2'}
                color="$textSecondary"
                style={styles.headerText}>
                Feedback
              </Text>
            </Box>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.profile.suggestion)}>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <InboxIcon color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    Feedback
                  </Text>
                </Box>

                <TouchableOpacity style={styles.arrowContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.profile.rate)}>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <ShieldQuestion color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    FAQs
                  </Text>
                </Box>
                <TouchableOpacity style={styles.arrowContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.profile.rate)}>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <Phone color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    Call Support
                  </Text>
                </Box>
                <TouchableOpacity style={styles.arrowContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>

            <Box bg="$secondary" h="$10" w={'$full'}>
              <Text
                px={'$3'}
                paddingTop={'$2'}
                color="$textSecondary"
                style={styles.headerText}>
                Resources
              </Text>
            </Box>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(SCREENS.profile.privacyPolicy)
              }>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <FileKey2Icon color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    Privacy Policy
                  </Text>
                </Box>

                <TouchableOpacity style={styles.arrowContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.profile.termsOfUse)}>
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                style={styles.settingRow}>
                <Box flexDirection="row" alignItems="center">
                  <BookTextIcon color={'#fff'} />
                  <Text color="$textPrimary" style={styles.settingText}>
                    Terms of use
                  </Text>
                </Box>
                <TouchableOpacity style={styles.arrowContainer}>
                  <ChevronRightIcon color={'#fff'} />
                </TouchableOpacity>
              </Box>
            </TouchableOpacity>

            <Box h={'$56'}>
              <FlatButton
                icon={LogOutIcon}
                title="Logout"
                onPress={handleSignOut}
                marginTop={65}
                width="80%"
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={['50%']}
        enablePanDownToClose={true}>
        <Box w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <Box alignItems="center">
              <Text color="$textSecondary" fontSize={24}>
                Share iexplore
              </Text>
              <Text my="$4" textAlign="center" color="$textPrimary">
                Tell your friends about iexplore
              </Text>

              <HStack
                flexDirection="row"
                overflow="scroll"
                alignItems="center"
                gap="$3"
                my="$8">
                <VStack justifyContent="center" alignItems="center">
                  <Box
                    bg="$inputBackground"
                    w="$16"
                    h="$16"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="$xl">
                    <Icon as={LinkedinIcon} color="$textPrimary" size={35} />
                  </Box>
                  <Text color="$textPrimary">Linkedin</Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center">
                  <Box
                    bg="$inputBackground"
                    w="$16"
                    h="$16"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="$xl">
                    <InstagramIcon color="#fff" size={38} />
                  </Box>
                  <Text color="$textPrimary">Instagram</Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center">
                  <Box
                    bg="$inputBackground"
                    w="$16"
                    h="$16"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="$xl">
                    <TwitterIcon color="#fff" size={38} />
                  </Box>
                  <Text color="$textPrimary">X</Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center">
                  <Box
                    bg="$inputBackground"
                    w="$16"
                    h="$16"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="$xl">
                    <FacebookIcon color="#fff" size={38} />
                  </Box>
                  <Text color="$textPrimary">Facebook</Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center">
                  <Box
                    bg="$inputBackground"
                    w="$16"
                    h="$16"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="$xl">
                    <Icon as={Youtube} color="$textPrimary" size={35} />
                  </Box>
                  <Text color="$textPrimary">Youtube</Text>
                </VStack>
              </HStack>

              <HStack
                p="$3"
                my="$4"
                w="$full"
                borderRadius="$xl"
                bg="$backgroundLight800"
                justifyContent="center"
                alignItems="center"
                gap="$2">
                <Text color="$textPrimary">Copy and share with link</Text>
                <Icon as={CopyIcon} color="$textPrimary" />
              </HStack>
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
    color: 'white',
    fontSize: 16,
  },
  container: {
    alignItems: 'left',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'left',
    padding: 15,
  },
  settingText: {
    fontSize: 16,
    paddingLeft: 20,
  },
  toggleContainer: {
    // Style the toggle button container here
  },
  arrowContainer: {
    // Style the arrow icon container here
  },
  resources: {
    padding: 15,
  },
  resourcesText: {
    fontSize: 16,
  },
});
