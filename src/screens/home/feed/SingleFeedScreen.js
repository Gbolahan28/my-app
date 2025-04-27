import {
  Avatar,
  AvatarImage,
  Box,
  CopyIcon,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {X} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Swiper from 'react-native-swiper';
import {CommentIcon} from '../../../assets/svg/CommentIcon';
import {FavoriteIcon} from '../../../assets/svg/FavoriteIcon';
import {ShareIcon} from '../../../assets/svg/ShareIcon';
import FlatButton from '../../../components/buttons/FlatButton';

import CustomBottomSheet from '../../../components/modals/CustomBottomSheet';
import {SCREENS} from '../../../navigation/screenNames';

const SingleFeedScreen = ({
  imageUrls,
  currentIndex = 0,
  onIndexChanged,
  userAvatar = 'https://example.com/avatar.jpg',
  username = 'John Doe',
  timePosted = '2h ago',
  description = 'This is a very long description that will be truncated if it exceeds the maximum width of a single line on the screen...',
  onClose,
}) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const SocialButton = ({icon, count}) => (
    <TouchableOpacity onPress={() => setOpenBottomSheet(true)}>
      <VStack alignItems="center" space="xs" mb="$2">
        <Box alignItems="center" justifyContent="center">
          {icon}
        </Box>
        <Text
          color="$textPrimary"
          fontSize={moderateScale(12)}
          fontWeight="600">
          {count}
        </Text>
      </VStack>
    </TouchableOpacity>
  );

  return (
    <Box flex={1} width="100%" height="100%">
      {/* Close Button */}
      <Pressable
        onPress={onClose}
        position="absolute"
        right="$4"
        top="$4"
        zIndex={1}>
        <Box
          p="$2.5"
          bg="$textDark300"
          borderWidth={2}
          borderRadius="$full"
          alignItems="center"
          justifyContent="center">
          <Icon as={X} size={26} color="#000" />
        </Box>
      </Pressable>

      <Swiper
        loop={false}
        index={currentIndex}
        onIndexChanged={onIndexChanged}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}>
        {imageUrls.map((imageUrl, index) => (
          <Box key={index} flex={1}>
            <Box style={styles.backgroundImage} bg="$backgroundDark900">
              <Image
                source={{uri: imageUrl}}
                alt="Post image"
                style={styles.backgroundImage}
                resizeMode="cover"
              />
            </Box>
          </Box>
        ))}
      </Swiper>

      {/* Social Engagement Icons */}
      <VStack
        position="absolute"
        right="$4"
        bottom="4%"
        space="lg"
        alignItems="center"
        zIndex={25}>
        <SocialButton icon={<FavoriteIcon />} count="200" />
        <SocialButton icon={<CommentIcon />} count="46" />
        <SocialButton icon={<ShareIcon />} count="12" />
      </VStack>

      {/* Overlay and User Info */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
        style={styles.overlay}>
        <VStack space="md" px="$4" flex={1} justifyContent="flex-end">
          <HStack space="md" alignItems="center" mb="$1">
            <Avatar size="lg" bgColor="$primary">
              <AvatarImage source={{uri: userAvatar}} alt={username} />
            </Avatar>
            <VStack mr="$4">
              <Text
                color="$textPrimary"
                fontWeight="700"
                fontSize={moderateScale(16)}>
                {username}
              </Text>
              <Text
                color="$textDark300"
                fontSize={moderateScale(14)}
                fontWeight="400">
                {timePosted}
              </Text>
            </VStack>
            <FlatButton
              title="Follow"
              fontWeight="600"
              width={scale(75)}
              fontSize={moderateScale(12)}
              borderRadius={moderateScale(4)}
              height={moderateVerticalScale(28)}
            />
          </HStack>

          <Text
            color="$textPrimary"
            fontSize={moderateScale(15)}
            w="90%"
            fontWeight="400"
            numberOfLines={1}
            ellipsizeMode="tail"
            ml="$1"
            mb="$4">
            {description}
          </Text>
        </VStack>
      </LinearGradient>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={['50%']}
        zIndex={150}
        enablePanDownToClose={true}>
        <Box w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <Box alignItems="center">
              <Text color="$textSecondary">Use coupon to claim drink</Text>

              <HStack
                p="$3"
                my="$4"
                borderWidth="$1"
                borderColor="$textTertiary"
                borderRadius="$lg"
                bg="$backgroundDark900"
                justifyContent="space-between"
                alignItems="center"
                gap="$2">
                <Text color="$textPrimary">IEXPLORE25OFF</Text>
                <Icon as={CopyIcon} color="$textPrimary" />
              </HStack>

              <Text color="$textPrimary" textAlign="center" mt="$8" mb="$16">
                Please use the provided coupon code{' '}
                <Text fontSize="$sm" color="$textSecondary">
                  'IEXPLORE25OFF'
                </Text>{' '}
                to redeem your drink offer at Club Quilox. Kindly note that this
                offer will expire 24 hours after you've claimed your drink on
                iexplore.
              </Text>

              <FlatButton
                title="Claim drink"
                onPress={() => navigation.navigate(SCREENS.drinks.congrats)}
              />
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '25%',
    paddingBottom: moderateScale(20),
  },
  dot: {
    backgroundColor: '#B0B0B0',
    borderWidth: 1,
    borderColor: '#FFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#FFC000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  pagination: {
    bottom: '20%',
  },
});

export default SingleFeedScreen;
