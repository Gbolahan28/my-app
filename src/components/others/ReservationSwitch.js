import React, {useState} from 'react';
import {Box, Button, ButtonText} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';

const ReservationSwitch = () => {
  const [activeTab, setActiveTab] = useState('drinks'); // Default active tab
  const navigation = useNavigation();

  const handleSwitch = tab => {
    setActiveTab(tab); // Set the active tab
    if (tab === 'drinks') {
      navigation.navigate(SCREENS.home.drinks); // Navigate to Drinks page
    } else {
      navigation.navigate(SCREENS.drinks.reserve); // Navigate to Reservations page
    }
  };

  return (
    <Box flexDirection="row" bg="$backgroundDark" borderRadius="$full" p="$1">
      {/* Drinks for You Button */}
      <Button
        flex={1}
        borderRadius="$full"
        backgroundColor={activeTab === 'drinks' ? '$primary' : 'transparent'}
        onPress={() => handleSwitch('drinks')}>
        <ButtonText
          color={activeTab === 'drinks' ? '$black' : '$textPrimary'}>
          Drinks for You
        </ButtonText>
      </Button>

      {/* Make Reservation Button */}
      <Button
        flex={1}
        borderRadius="$full"
        backgroundColor={
          activeTab === 'reservation' ? '$primary' : 'transparent'
        }
        onPress={() => handleSwitch('reservation')}>
        <ButtonText
          color={activeTab === 'reservation' ? '$black' : '$textPrimary'}>
          Make Reservation
        </ButtonText>
      </Button>
    </Box>
  );
};

export default ReservationSwitch;
