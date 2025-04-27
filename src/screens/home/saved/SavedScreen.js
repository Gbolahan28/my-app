/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  ScrollView,
  Text,
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed';
import DashboardHeader from '../../../components/headers/DashboardHeader';
import Category from '../../../components/savedSpot/Category';
import {ButtonText} from '@gluestack-ui/themed';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomBottomSheet from '../../../components/modals/CustomBottomSheet';
import FlatButton from '../../../components/buttons/FlatButton';
import CustomInput from '../../../components/inputs/CustomInput';



const SavedScreen = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryLocation, setCategoryLocation] = useState('');
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const handleClick = () => {
      setOpenBottomSheet(true)
}

  const handleSaveCategory = e => {
    e.preventDefault();
    console.log('Category saved!');
  };
  return (
    <Box bg="$background" flex={1}>
      <DashboardHeader />
      <ScrollView p={'$4'}>
        <Text
          fontSize={'$2xl'}
          lineHeight={'$2xl'}
          color={'$textPrimary'}
          fontWeight="500">
          Saved spots
        </Text>
        <Box
          flexDirection="row"
          my={'$3'}
          justifyContent="space-between"
          gap={'$2'}>
          <Category title={'All'} />
          <Category title={'Restaurants'} />
        </Box>
        <Box
          flexDirection="row"
          my={'$3'}
          justifyContent="space-between"
          gap={'$2'}>
          <Category title={'Clubs'} />
          <Category title={'Bars'} />
        </Box>
        <Box mt="$6" px="$6" mb="$6">
          <Button
            size="md"
            bg="$background"
            borderColor="$primary"
            borderWidth={1}
            borderRadius="$2xl"
            action="primary"
            mx="$1/6"
            onPress={handleClick}>
            <ButtonText color="$textSecondary">Add Category</ButtonText>
          </Button>
        </Box>
      </ScrollView>
      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        enablePanDownToClose={true}
        modalSnapPoints={['75%']}>
        <Box style={styles.container} w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <Text
              fontWeight="$semibold"
              color="$textPrimary"
              textAlign="center"
              fontSize={moderateScale(20)}
              marginBottom={18}>
              Add New Category
            </Text>
            <Text color="$white" fontSize={18} marginBottom={8} marginTop={32}>
              Category name
            </Text>
            <CustomInput
              h={verticalScale(45)}
              placeholder={'Beach'}
              value={categoryName}
              onChangeText={setCategoryName}
            />
            <Text color="$white" fontSize={18} marginBottom={8} marginTop={32}>
              Category location
            </Text>
            <CustomInput
              h={verticalScale(45)}
              placeholder={'Category Location'}
              value={categoryLocation}
              onChangeText={setCategoryLocation}
            />
            <Box w={'$full'} paddingHorizontal={'$1/6'}>
              <FlatButton
                title="Save Category"
                onPress={e => handleSaveCategory(e)}
                marginTop={40}
              />
            </Box>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});