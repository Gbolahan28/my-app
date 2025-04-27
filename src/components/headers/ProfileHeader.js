import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {Box} from '@gluestack-ui/themed';
import {BackIcon} from '../../assets/svg/BackIcon';

const ProfileHeader = ({title, color}) => {
  const navigation = useNavigation();
  return (
    <Box h={'$16'} bg="$secondary">
      <Box
        w={'100%'}
        px={'$4'}
        bottom={'$3'}
        flexDirection="row"
        position="absolute"
        justifyContent="space-between"
        alignItems="center">
        <TouchableOpacity onPress={() => navigation.goBack()} flex={1}>
          <Box mb={'$2'}>
            <BackIcon paddingBottom={'$2'} color={color || '#FFD700'} />
          </Box>
        </TouchableOpacity>
        <Box style={styles.container}>
          <Text
            style={styles.centeredText}
            color={color || '$textSecondary'}
            paddingBottom={'$2'}
            fontSize={'$xl'}>
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  centeredText: {
    textAlign: 'center', // Center the text horizontally within the View component
  },
});
