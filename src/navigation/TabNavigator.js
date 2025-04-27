import {Box, Text} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {DrinksIcon} from '../assets/svg/DrinksIcon';
import {ExploreIcon} from '../assets/svg/ExploreIcon';
import {FeedsIcon} from '../assets/svg/FeedsIcon';
import {HomeIcon} from '../assets/svg/HomeIcon';
import {HomeActiveIcon} from '../assets/svg/HomeIconActive';
import {SavedIcon} from '../assets/svg/SavedIcon';
import HomeScreen from '../screens/home/HomeScreen';
import DrinksScreen from '../screens/home/drinks/DrinksScreen';
import ExploreScreen from '../screens/home/explore/ExploreScreen';
import FeedScreen from '../screens/home/feed/FeedScreen';
import SavedScreen from '../screens/home/saved/SavedScreen';
import {SCREENS} from './screenNames';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(78),
        alignItems: 'center',
        backgroundColor: '#000000',
        borderTopWidth: 0.5,
        borderTopColor: '#333333',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderLabel = () => {
          if (route.name === SCREENS.home.dashboard) {
            return 'Home';
          } else if (route.name === SCREENS.home.explore) {
            return 'Explore';
          } else if (route.name === SCREENS.home.feeds) {
            return 'Feed';
          } else if (route.name === SCREENS.home.drinks) {
            return 'Drinks';
          } else if (route.name === SCREENS.home.saved) {
            return 'Saved';
          }
        };

        const renderIcon = focused => {
          if (route.name === SCREENS.home.dashboard) {
            if (focused) {
              return <HomeActiveIcon />;
            } else {
              return <HomeIcon />;
            }
          } else if (route.name === SCREENS.home.explore) {
            if (focused) {
              return <ExploreIcon color="#FFD700" />;
            } else {
              return <ExploreIcon />;
            }
          } else if (route.name === SCREENS.home.feeds) {
            if (focused) {
              return <FeedsIcon color="#FFD700" />;
            } else {
              return <FeedsIcon />;
            }
          } else if (route.name === SCREENS.home.drinks) {
            if (focused) {
              return <DrinksIcon color="#FFD700" />;
            } else {
              return <DrinksIcon />;
            }
          }
        };

        return (
          <TouchableOpacity
            key={`${route}-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Box mb={'$2'}>{renderIcon(isFocused)}</Box>
            <Text
              color={isFocused ? '$textSecondary' : '$textPrimary'}
              fontSize={'$xs'}>
              {renderLabel()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={SCREENS.home.dashboard} component={HomeScreen} />
      <Tab.Screen name={SCREENS.home.explore} component={ExploreScreen} />
      <Tab.Screen name={SCREENS.home.feeds} component={FeedScreen} />
      <Tab.Screen name={SCREENS.home.drinks} component={DrinksScreen} />
      {/* <Tab.Screen name={SCREENS.home.saved} component={SavedScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
