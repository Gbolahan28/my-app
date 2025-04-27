import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  Center,
  Icon,
  MailIcon,
  Text,
} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HelpCard = ({icon, title, description}) => {
  const navigation = useNavigation();

  return (
    <Box bg="$secondary" p="$5" borderRadius={moderateScale(12)}>
      <TouchableOpacity onPress={() => console.log('Clicked')}>
        <Center>
          <Box flexDirection="row" gap="$2">
            <Icon as={icon} color="$textPrimary" />
            <Text color="$textPrimary" fontWeight="$semibold">
              {title}
            </Text>
          </Box>
          <Text color="$textDark500" textAlign="center" mt="$3">
            {description}
          </Text>
        </Center>
      </TouchableOpacity>
    </Box>
  );
};

export default HelpCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: '100%',
  },
});
