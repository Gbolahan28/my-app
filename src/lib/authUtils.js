// file created for token management
import AsyncStorage from '@react-native-async-storage/async-storage';


 const TOKEN_STORAGE_KEY = '@auth_token';



export const getStoredToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
  } catch (error) {
    console.log('Error getting token:', error);
    return null;
  }
};

export const clearStoredToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch (error) {
    console.log('Error clearing token:', error);
  }
};

export const addTokenToAsyncStorage = async token => {
  try {
    await AsyncStorage.setItem(TOKEN_STORAGE_KEY, token).then(() => {
      console.log('Token saved in AsyncStorage');
    });
  } catch (error) {
    console.log('Error saving token in AsyncStorage:', error);
  }
};
