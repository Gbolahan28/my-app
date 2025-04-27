import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  FormControl,
  Text,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
  FormControlLabel,
  EyeIcon,
  EyeOffIcon,
} from '@gluestack-ui/themed';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Icon} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomShowAndHidePasswordInput = ({
  type = 'password',
  color = '$textSecondary',
  label,
  labelColor = '$textSecondary',
  error = '',
  h = verticalScale(64),
  mx,
  keyboardType,
  borderRadius = '',
  placeholder = '',
  showPassword,
  togglePasswdShowHideState,
  ...rest
}) => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <FormControl marginVertical={verticalScale(10)}>
      <Input
        borderColor="$inputBackground"
        $focus={{
          borderColor: '$textSecondary',
        }}
        h={h}
        borderRadius={borderRadius || '$xl'}
        bg="$inputBackground"
        mx={mx}>
        <VStack
          paddingVertical={'$0.5'}
          paddingHorizontal={'$4'}
          w="100%"
          position="relative">
          {label && (
            <FormControlLabel mb="$0.5">
              <FormControlLabelText color={labelColor}>
                {label}
              </FormControlLabelText>
            </FormControlLabel>
          )}
          <HStack
            w="100%"
            justifyContent="space-between"
            alignItems="flex-start">
            <InputField
              type={!showPassword ? 'password' : 'text'}
              placeholder={placeholder}
              color={color}
              fontWeight="600"
              fontSize={moderateScale(18)}
              keyboardType={keyboardType}
              autoCorrect={false}
              keyboardAppearance="dark"
              {...rest}
            />

            {showPassword ? (
              <TouchableOpacity
                onPress={() => togglePasswdShowHideState(false)}>
                <Icon as={EyeOffIcon} color="$textDark500" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => togglePasswdShowHideState(true)}>
                <Icon as={EyeIcon} color="$textDark500" />
              </TouchableOpacity>
            )}
          </HStack>
        </VStack>
      </Input>

      {error && <Text color="$red500">{error}</Text>}
    </FormControl>
  );
};

export default CustomShowAndHidePasswordInput;

const styles = StyleSheet.create({});
