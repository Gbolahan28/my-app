import * as React from 'react';

import ClubReviews from './ClubReviews';
import ClubQuestionsAndAnswers from './ClubQuestionsAndAnswers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';

const ReviewsAndQuestionsTab = ({questionModalSetter}) => {
  const [activeTab, setActiveTab] = React.useState('reviews');

  const renderContent = () => {
    switch (activeTab) {
      case 'reviews':
        return <ClubReviews />;
      case 'questionsandanswers':
        return <ClubQuestionsAndAnswers modalState={questionModalSetter} />;
      default:
        return null;
    }
  };

  return (
    <Box style={{flex: 1}}>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity onPress={() => setActiveTab('reviews')}>
          <Text
            fontSize={'$lg'}
            style={{fontWeight: activeTab === 'reviews' ? 'bold' : 'normal'}}
            color={activeTab === 'reviews' ? '$textSecondary' : '$textGrey'}
            borderBottomWidth={activeTab === 'reviews' ? '$2' : '$0'}
            borderBottomColor="$textSecondary"
            paddingBottom="$2">
            Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('questionsandanswers')}>
          <Text
            fontSize={'$lg'}
            style={{
              fontWeight:
                activeTab === 'questionsandanswers' ? 'bold' : 'normal',
            }}
            color={
              activeTab === 'questionsandanswers'
                ? '$textSecondary'
                : '$textGrey'
            }
            borderBottomWidth={activeTab === 'questionsandanswers' ? '$2' : '$0'}
            borderBottomColor="$textSecondary"
            paddingBottom="$2">
            Questions & answers
          </Text>
        </TouchableOpacity>
      </Box>
      {renderContent()}
    </Box>
  );
};

export default ReviewsAndQuestionsTab;

const styles = StyleSheet.create({});
