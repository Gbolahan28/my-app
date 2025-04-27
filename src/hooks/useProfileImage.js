import {useState} from 'react';
import {Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {api} from '../api';

export const useProfileImage = (initialImage = null) => {
  const [asset, setAsset] = useState(initialImage ? [{uri: initialImage}] : []);
  const [uploadingImage, setUploadingImage] = useState(false);

  const changeProfileImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          uploadProfileImage(response.assets[0]);
        }
      },
    );
  };

  const uploadProfileImage = async imageAsset => {
    setUploadingImage(true);
    try {
      const response = await api.uploadProfileImage(imageAsset);
      setAsset([imageAsset]);
      Alert.alert('Success', response.message);
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const updateImageFromProfile = profileImageUrl => {
    if (profileImageUrl) {
      setAsset([{uri: profileImageUrl}]);
    }
  };

  return {
    asset,
    uploadingImage,
    changeProfileImage,
    updateImageFromProfile,
  };
};
