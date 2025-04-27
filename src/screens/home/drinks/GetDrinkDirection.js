import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
  HStack,
  Icon,
  ScrollView,
} from '@gluestack-ui/themed';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../lib/screenUtils';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import mapImg from '../../../assets/images/maps.png';
import DrinkHeader from '../../../components/headers/DrinkHeader';
import {BikeIcon, CarFrontIcon, FootprintsIcon} from 'lucide-react-native';

const GetDrinkDirection = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <DrinkHeader title="Sailor Lounge" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <ImageBackground source={mapImg} style={styles.mapBg}>
            <Box flex={1} justifyContent="flex-end" my="$4">
              <Box bg="$background" mx="$2" borderRadius="$lg">
                <Box p="$3">
                  <HStack w="$full">
                    <ButtonGroup w="$full">
                      <Button
                        flex={1}
                        gap="$1.5"
                        alignItems="center"
                        bg="$backgroundLight500"
                        borderWidth={2}
                        borderColor="$backgroundLight300"
                        borderRadius="$lg">
                        <ButtonIcon>
                          <Icon
                            as={CarFrontIcon}
                            size="18"
                            color="$backgroundLight100"
                          />
                        </ButtonIcon>
                        <ButtonText fontSize="$sm">33 mins</ButtonText>
                      </Button>
                      <Button
                        flex={1}
                        gap="$1.5"
                        alignItems="center"
                        bg="$backgroundLight500"
                        borderWidth={2}
                        borderColor="$backgroundLight300"
                        borderRadius="$lg">
                        <ButtonIcon>
                          <Icon
                            as={BikeIcon}
                            size="18"
                            color="$backgroundLight100"
                          />
                        </ButtonIcon>
                        <ButtonText fontSize="$sm">25 mins</ButtonText>
                      </Button>
                      <Button
                        flex={1}
                        gap="$1.5"
                        alignItems="center"
                        bg="$backgroundLight500"
                        borderWidth={2}
                        borderColor="$backgroundLight300"
                        borderRadius="$lg">
                        <ButtonIcon>
                          <Icon
                            as={FootprintsIcon}
                            size="18"
                            color="$backgroundLight100"
                          />
                        </ButtonIcon>
                        <ButtonText fontSize="$sm">2hr 4mins</ButtonText>
                      </Button>
                    </ButtonGroup>
                  </HStack>
                  <Button w="$full" bg="$primary" borderRadius="$md" mt="$4">
                    <ButtonText color="$textDark950">
                      Get directions via maps
                    </ButtonText>
                  </Button>
                </Box>
              </Box>
            </Box>
          </ImageBackground>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default GetDrinkDirection;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(160),
    borderRadius: moderateScale(16),
  },
  mapBg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
