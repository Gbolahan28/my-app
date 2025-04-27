import React from 'react';
import {StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import {
  Box,
  Divider,
  MailIcon,
  MessageCircleIcon,
  ScrollView,
} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import CustomInput from '../../../components/inputs/CustomInput';
import HelpCard from '../../../components/cards/HelpCard';
import {ChevronRight, PhoneCallIcon} from 'lucide-react-native';
import {verticalScale} from 'react-native-size-matters';
import {Icon} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

const helpCardInfo = [
  {
    icon: MailIcon,
    title: 'Send a mail',
    description:
      'Reach out to us through email for any issues, feedbacks, or suggestions.',
  },
  {
    icon: MessageCircleIcon,
    title: 'Chat with us',
    description:
      'Start a conversation with our customer care and get swift response.',
  },
  {
    icon: PhoneCallIcon,
    title: 'Speak on a call',
    description: 'Get on a call with our customer care for urgent response.',
  },
];

const HelpPage = () => {
  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader title="Help" color="#fff" />
      <ScrollView>
        <Box m="$4">
          <Box>
            <Text color="$textPrimary" textAlign="center">
              How can we help you?
            </Text>
            <CustomInput
              type="text"
              borderRadius="$2xl"
              placeholder="Search"
              fontSize="$md"
              h={verticalScale(43)}
            />
          </Box>
          <Box gap="$4">
            {helpCardInfo.map((card, i) => {
              return (
                <HelpCard
                  key={i}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </Box>
          <Box>
            <Text my="$8" fontSize={18} color="$textPrimary">
              Articles to help you out
            </Text>

            <Box>
              <TouchableOpacity onPress={() => console.log('Clicked!')}>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  py="$5">
                  <Text color="$textPrimary">Help with sign in</Text>
                  <Icon as={ChevronRight} color="$textPrimary" />
                </Box>
              </TouchableOpacity>
              <Divider bg="$textDark800" />

              <TouchableOpacity onPress={() => console.log('Clicked!')}>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  py="$5">
                  <Text color="$textPrimary">Help with sign in</Text>
                  <Icon as={ChevronRight} color="$textPrimary" />
                </Box>
              </TouchableOpacity>
              <Divider bg="$textDark800" />

              <TouchableOpacity onPress={() => console.log('Clicked!')}>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  py="$5">
                  <Text color="$textPrimary">Help with sign in</Text>
                  <Icon as={ChevronRight} color="$textPrimary" />
                </Box>
              </TouchableOpacity>
              <Divider bg="$textDark800" />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HelpPage;

const styles = StyleSheet.create({});
