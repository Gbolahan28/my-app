import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Image,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';

import {verticalScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrinkHeader from '../../../components/headers/DrinkHeader';
import SpotCard from '../../../components/cards/SpotCard';
import PreviousBlogCard from '../../../components/cards/PreviousBlogCard';

const BlogsScreen = () => {
  const navigation = useNavigation();

  return (
    <Box bg="$background" flex={1}>
      {/* Card Navigation */}
      <DrinkHeader title="Top 15 budget friendly spots to spend your evening  in Lagos island" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box my="$4" px="$4">
          <Text color="$textPrimary" fontWeight="$bold">
            Top 15 budget friendly spots to spend your evening in Lagos island
          </Text>
          <HStack gap="$2" alignItems="center" my="$4">
            <Avatar size="sm" />
            <Text fontSize="$sm">
              iexplore weekly | Oct 19, 2023 | 10 min read
            </Text>
          </HStack>
        </Box>
        <Image
          source={{
            uri: 'https://www.myglobalviewpoint.com/wp-content/uploads/2023/09/Most-Beautiful-Places-in-Nigeria-faq.jpg',
          }}
          h={verticalScale(200)}
          w="$full"
          alt="Blog image"
          style={styles.image}
        />

        <Box my="$4" px="$4">
          <Text color="$textSecondary" textAlign="center" fontSize="$sm">
            Picture of mom civic center, Lagos
          </Text>
          <Divider h={1} bg="$secondary" my="$4" />
          <Text fontSize="$sm" color="$textPrimary">
            Lagos Island, a bustling metropolis on the shores of the Atlantic
            Ocean, is not only known for its economic significance but also for
            its vibrant and diverse culture. As the sun sets, this city comes to
            life with an array of budget-friendly evening spots that cater to
            every taste and preference. Whether you're a local looking for a
            quick escape or a traveler exploring this lively city, we've
            compiled a list of the top 15 budget-friendly spots to spend your
            evening on Lagos Island.
          </Text>

          <SpotCard
            title="Freedom park"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_KSPXOuMXF6w9DnAfoFnzvJOfGQHhdU6yoH56f_1_w&s"
            imageDescription="Picture of tarkwa bay beach"
          />
          <SpotCard
            title="Lekki conservation center"
            imageUrl="https://travellemming.com/wp-content/uploads/2019/02/LekkiResized.jpg"
            imageDescription="Picture of lekki conservative center"
          />
          <SpotCard
            title="National museum"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo90vD9TaZ6MRNkX1CTTcvFg2Aka7qVH99DWSRwCsTAQ&s"
            imageDescription="Picture of national museum"
          />

          <Text fontWeight="$bold" color="$textPrimary" mt="$10">
            Previous blogs
          </Text>
          <Box>
            <PreviousBlogCard
              title="Trending bars in Lagos"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN246Cm4LFlbdImRDDyc0J4OaSUablYAp1Pw&s"
            />
            <PreviousBlogCard
              title="9 fun facts about Lagos"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwJXECQt5LKhoJx4hDuoM8s82GcputtzjMA&s"
            />
            <PreviousBlogCard
              title="Trending bars in Lagos"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRkzZNkR7RsfgZbWxUlss43aiXetkW7Oogw&s"
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default BlogsScreen;

const styles = StyleSheet.create({});
