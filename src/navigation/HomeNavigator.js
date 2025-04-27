import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AllCards from '../screens/home/allCards/AllCards';
import BlogsScreen from '../screens/home/blogs/BlogsScreen';
import CardScreen from '../screens/home/card/SingleVenueScreen';
import AboutClubScreen from '../screens/home/club/AboutClubScreen';
import SpotOfTheWeekScreen from '../screens/home/club/SpotOfTheWeekScreen';
import DrinkClaimedCongratulationsScreen from '../screens/home/drinks/DrinkClaimedCongratulationsScreen';
import GetDrinkDirection from '../screens/home/drinks/GetDrinkDirection';
import SingleDrink from '../screens/home/drinks/SingleDrink';
import AddLocation from '../screens/home/location/AddLocation';
import AddLocationCongratsScreen from '../screens/home/location/AddLocationCongratsScreen';
import ClubMapScreen from '../screens/home/map/ClubMapScreen';
import EditProfilePage from '../screens/home/profile/EditProfilePage';
import HelpPage from '../screens/home/profile/HelpPage';
import NotificationsPage from '../screens/home/profile/NotificationsPage';
import PrivacyPolicyPage from '../screens/home/profile/PrivacyPolicyPage';
import ProfilePage from '../screens/home/profile/ProfilePage';
import RatePage from '../screens/home/profile/RatePage';
import SuggestionPage from '../screens/home/profile/SuggestionPage';
import TermsOfUsePage from '../screens/home/profile/TermsOfUsePage';
import AddReviewScreen from '../screens/home/review/AddReviewScreen';
import ClubReviewScreen from '../screens/home/review/ClubReviewScreen';
import {SCREENS} from './screenNames';
import TabNavigator from './TabNavigator';
import Reservation from '../screens/home/drinks/Reservation';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.navigators.tabs} component={TabNavigator} />
      <Stack.Screen name={SCREENS.home.card} component={CardScreen} />
      <Stack.Screen name={SCREENS.home.blogs} component={BlogsScreen} />
      <Stack.Screen name={SCREENS.home.club} component={AboutClubScreen} />
      <Stack.Screen
        name={SCREENS.home.spotOfTheWeek}
        component={SpotOfTheWeekScreen}
      />
      <Stack.Screen name={SCREENS.review.review} component={ClubReviewScreen} />
      <Stack.Screen
        name={SCREENS.review.addReview}
        component={AddReviewScreen}
      />
      <Stack.Screen name={SCREENS.home.map} component={ClubMapScreen} />
      <Stack.Screen name={SCREENS.home.location} component={AddLocation} />
      <Stack.Screen name={SCREENS.home.allCards} component={AllCards} />
      <Stack.Screen name={SCREENS.profile.profile} component={ProfilePage} />
      <Stack.Screen name={SCREENS.profile.rate} component={RatePage} />
      <Stack.Screen name={SCREENS.profile.help} component={HelpPage} />
      <Stack.Screen name={SCREENS.drinks.singleDrink} component={SingleDrink} />
      <Stack.Screen name={SCREENS.drinks.map} component={GetDrinkDirection} />
      <Stack.Screen name={SCREENS.drinks.reserve} component={Reservation} />
      <Stack.Screen
        name={SCREENS.home.locationCongrats}
        component={AddLocationCongratsScreen}
      />
      <Stack.Screen
        name={SCREENS.drinks.congrats}
        component={DrinkClaimedCongratulationsScreen}
      />
      <Stack.Screen
        name={SCREENS.profile.editProfile}
        component={EditProfilePage}
      />
      <Stack.Screen
        name={SCREENS.profile.notification}
        component={NotificationsPage}
      />
      <Stack.Screen
        name={SCREENS.profile.suggestion}
        component={SuggestionPage}
      />
      <Stack.Screen
        name={SCREENS.profile.privacyPolicy}
        component={PrivacyPolicyPage}
      />
      <Stack.Screen
        name={SCREENS.profile.termsOfUse}
        component={TermsOfUsePage}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
