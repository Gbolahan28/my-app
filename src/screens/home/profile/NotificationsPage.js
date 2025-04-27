import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import {
  Box,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import ToggleSwitch from 'toggle-switch-react-native';

const NotificationsPage = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      <ProfileHeader title="Notifications" color="#fff" pb="$6" />
      <ScrollView>
        <Box m="$4">
          <Text color="$textPrimary">
            Enable or disable the types of notifications you want to receive on
            your device.
          </Text>

          <Box gap="$6" my="$12">
            <NotificationCard
              title="Likes"
              description="Get notified when someone likes your comments or review"
            />
            <NotificationCard
              title="Comments"
              description="Get notified when someone drops a comment on your review"
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default NotificationsPage;

const NotificationCard = ({title, description, toggleFn}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Box>
      <Box
        gap="$12"
        w="$full"
        flexDirection="row"
        alignItems="baseline"
        justifyContent="space-between"
        borderBottom="$2"
        borderColor="$textDark300">
        <HStack gap="$20">
          <VStack flex={1}>
            <Text
              fontWeight="$bold"
              fontSize="$xl"
              my="$1"
              color="$textPrimary">
              {title}
            </Text>
            <Text w="$64" color="$textDark300" mt="$2">
              {description}
            </Text>
          </VStack>
          <Box alignItems="flex-end">
            <ToggleSwitch
              isOn={toggle}
              onColor="#FFD700"
              offColor="gray"
              size="medium"
              onToggle={handleToggle}
            />
          </Box>
        </HStack>
      </Box>
      <Divider bg="$textDark700" mt="$4" />
    </Box>
  );
};

const styles = StyleSheet.create({});
