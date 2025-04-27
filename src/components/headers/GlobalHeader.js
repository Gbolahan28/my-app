import {Box, HStack, Image, Pressable} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {BackIcon} from '../../assets/svg/BackIcon';

const GlobalHeader = ({
  showBackButton = true,
  backIconColor = '#F6F6F6',
  backIconSize = 32,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Box
      backgroundColor="$background"
      borderBottomWidth={1}
      height={60}
      width="100%"
      justifyContent="center"
      px="$4"
      safeAreaTop>
      <HStack width="100%" alignItems="center" justifyContent="space-between">
        {/* Left section - Custom Back button */}
        <Box width={40}>
          {showBackButton && (
            <Pressable
              onPress={handleBackPress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <BackIcon
                width={backIconSize}
                height={backIconSize}
                stroke={backIconColor}
              />
            </Pressable>
          )}
        </Box>

        {/* Center section - Logo */}
        <Box flex={1} alignItems="center">
          <Image
            source={require('../../assets/images/iexplore-header-logo.png')}
            alt="App Logo"
            resizeMode="contain"
            width={120}
            height={40}
          />
        </Box>

        {/* Right section - Empty space to balance the layout */}
        <Box width={40} />
      </HStack>
    </Box>
  );
};

export default GlobalHeader;
