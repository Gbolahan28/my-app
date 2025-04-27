import {
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    HStack,
    Input,
    InputField,
    InputIcon,
    InputSlot,
    Text,
    VStack,
  } from '@gluestack-ui/themed';
  import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
  import React, {useState} from 'react';
  import {StyleSheet} from 'react-native';
  import {moderateScale, verticalScale} from 'react-native-size-matters';

  const CustomInput = ({
    type = 'text',
    color = '$textSecondary',
    label,
    labelColor = '$textSecondary',
    error = '',
    bgColor = '$inputBackground',
    h = verticalScale(64),
    mx,
    keyboardType,
    borderRadius,
    ...rest
  }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleState = () => {
      setShowPassword(prevState => !prevState);
    };

    // Determine the input type based on `type` prop and `showPassword` state
    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <FormControl marginVertical={verticalScale(10)}>
        <Input
          borderColor="$textTertiary"
        //   $focus={{borderColor: '$inputBackground'}}
          h={h}
          borderRadius={borderRadius || '$xl'}
          bg={bgColor}
          mx={mx}>
          <VStack paddingVertical={'$0.5'} paddingHorizontal={'$4'} w="100%">
            {label && (
              <FormControlLabel mb="$0.5">
                <FormControlLabelText color={labelColor}>
                  {label}
                </FormControlLabelText>
              </FormControlLabel>
            )}

            <HStack>
              <InputField
                secureTextEntry={type === 'password' && !showPassword}
                placeholder=""
                color={color}
                fontWeight="600"
                fontSize={moderateScale(20)}
                keyboardType={keyboardType}
                autoCorrect={false}
                keyboardAppearance="dark"
                {...rest}
              />

              {type === 'password' && (
                <InputSlot onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$primary"
                  />
                </InputSlot>
              )}
            </HStack>
          </VStack>
        </Input>

        {error && <Text color="$red500">{error}</Text>}
      </FormControl>
    );
  };

  export default CustomInput;

  const styles = StyleSheet.create({});
