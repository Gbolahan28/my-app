import {Box, Checkbox, CircleIcon, Icon} from '@gluestack-ui/themed';
import {Circle, KeyRoundIcon} from 'lucide-react-native';
import {StyleSheet} from 'react-native';

const RadioButton = ({children, selectedOption, setSelectedOption}) => {
  return (
    <Box py="$3">
      <Box style={styles.label}></Box>
      <Icon
        as={selectedOption == children ? KeyRoundIcon : Circle}
        size={24}
        color="yellow"
        onPress={() => {
          setSelectedOption(children);
        }}
      />
    </Box>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
});
