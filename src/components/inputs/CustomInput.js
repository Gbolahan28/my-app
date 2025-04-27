import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  HStack,
  VStack,
  InputIcon,
  InputSlot,
  InputField,
  Text,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const CustomInput = ({
  type = 'text',
  color = '$textPrimary',
  label,
  labelColor = '$textPrimary',
  error = '',
  bgColor = '$inputBackground',
  h = verticalScale(46),
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
    <FormControl marginVertical={verticalScale(10)} width="100%">
      <FormControlLabel mb="$1.5">
        <FormControlLabelText color={labelColor}>{label}</FormControlLabelText>
      </FormControlLabel>

      <HStack width="100%">
        <VStack flex={1}>
          <Input
            variant="underlined"
            size="md"
            borderColor="$textSecondary"
            bg={bgColor}
            h={h}
            flexGrow={1}
            pr="$2">
            <InputField
              secureTextEntry={type === 'password' && !showPassword}
              placeholder=""
              color={color}
              paddingHorizontal="$4"
              mr="$2"
              keyboardType={keyboardType}
              autoCorrect={false}
              keyboardAppearance="dark"
              {...rest}
            />
            {type === 'password' && (
              <InputSlot onPress={handleState} ml="$2">
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$primary"
                />
              </InputSlot>
            )}
          </Input>
        </VStack>
      </HStack>

      {error && <Text color="$red500">{error}</Text>}
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
