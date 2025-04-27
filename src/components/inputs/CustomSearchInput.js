import {
  Box,
  FormControl,
  HStack,
  Icon,
  Input,
  InputField,
  InputSlot,
  SearchIcon,
  Text,
} from '@gluestack-ui/themed';
import {X} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const CustomSearchInput = ({
  type = 'text',
  color = '$textSecondary',
  error = '',
  h = verticalScale(40),
  mx,
  keyboardType,
  borderRadius = '$4xl',
  placeholder = 'Search',
  ...rest
}) => {
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [showCancelIcon, setShowCancelIcon] = useState(false);
  return (
    <FormControl marginVertical={verticalScale(5)}>
      <Input
        borderWidth="$0"
        $focus={{
          borderColor: '$textSecondary',
          backgroundColor: '$textPrimary',
        }}
        h={h}
        borderRadius={borderRadius || '$xl'}
        bg="$inputBackground"
        mx={mx}>
        <HStack
          w="100%"
          alignItems="center"
          justifyContent="center"
          paddingHorizontal={'$4'}
          paddingVertical={'$0.5'}>
          {showSearchIcon && <Icon as={SearchIcon} color="$textDark500" />}
          <InputField
            type={type}
            defaultValue={placeholder}
            color="$tertiary"
            fontSize={moderateScale(17)}
            keyboardType={keyboardType}
            autoCorrect={false}
            onFocus={() => {
              setShowSearchIcon(false);
              setShowCancelIcon(true);
            }}
            onBlur={() => {
              setShowSearchIcon(true);
              setShowCancelIcon(false);
            }}
            keyboardAppearance="dark"
            {...rest}
          />
          {showCancelIcon && (
            <InputSlot>
              <Box bg="$tertiary" borderRadius={moderateScale(100)} p="$0.5">
                <Icon
                  as={X}
                  color="$secondary"
                  onPress={() => {
                    console.log('Cancel');
                  }}
                />
              </Box>
            </InputSlot>
          )}
        </HStack>
      </Input>

      {error && <Text color="$red500">{error}</Text>}
    </FormControl>
  );
};

export default CustomSearchInput;

const styles = StyleSheet.create({});
