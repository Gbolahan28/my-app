import {Box, Center, Text, VStack} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import SingleFeedScreen from '../../screens/home/feed/SingleFeedScreen';

const Thumbnail = ({
  name = 'Melissa',
  imageUrls,
  size = 110,
  isLive = false,
  isViewed = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [imageUrls]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setCurrentImageIndex(0);
    }, 600);
  };

  const handleIndexChanged = index => {
    setCurrentImageIndex(index);
  };

  return (
    <Box>
      <Box
        borderColor={isViewed ? '$textDark500' : '$primary'}
        style={[styles.container, {width: size + 2, height: size + 2}]}>
        <TouchableOpacity onPress={openModal}>
          <Box style={[styles.circularImage, {width: size, height: size}]}>
            <FastImage
              source={{uri: imageUrls[currentImageIndex]}}
              style={[styles.circularImage, {width: size, height: size}]}
            />
            <Box borderColor="#000000" style={styles.goldRing} />
          </Box>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationOutTiming={200}
          onBackdropPress={closeModal}
          style={styles.modal}>
          <Box style={styles.fullScreenContainer}>
            <SingleFeedScreen
              imageUrls={imageUrls}
              currentIndex={currentImageIndex}
              onIndexChanged={handleIndexChanged}
              onClose={() => closeModal()}
              username={name}
            />
          </Box>
        </Modal>
      </Box>
      <Center mt="$1">
        {isLive && (
          <Text
            fontSize={moderateScale(12)}
            fontWeight="400"
            color="$textPrimary">
            {name}
          </Text>
        )}
        {!isLive && (
          <VStack>
            <Text
              fontSize={moderateScale(14)}
              fontWeight="700"
              textAlign="center"
              color="$textPrimary">
              {name}
            </Text>
            <Text
              fontSize={moderateScale(12)}
              fontWeight="400"
              textAlign="center"
              color="$textDark500">
              12m ago
            </Text>
          </VStack>
        )}
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: Dimensions.get('window').width,
    overflow: 'hidden',
  },
  circularImage: {
    borderRadius: Dimensions.get('window').width,
    paddingRight: '6px',
  },
  goldRing: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 2,
    borderRadius: Dimensions.get('window').width,
  },
  modal: {
    margin: 0,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Thumbnail;
