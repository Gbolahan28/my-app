import {styled} from '@gluestack-ui/themed';
import LinearGradient from 'react-native-linear-gradient';

const CustomLinearGradient = styled(
  LinearGradient,
  {},

  {
    resolveProps: ['colors'],
  },
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(color);
        });
        return rawValue;
      },
    },
  },
);

export default CustomLinearGradient;
