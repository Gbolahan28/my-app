/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, StatusBar} from '@gluestack-ui/themed';

const SafePageContainer = ({
  children,
  containerStyle,
  background = '#212121',
}) => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        ...containerStyle,
        flex: 1,
        backgroundColor: background,
      }}>
      <StatusBar animated={true} barStyle={'light-content'} />

      {/* ======CHILDREN===== */}

      <Box flex={1}>{children}</Box>
    </SafeAreaView>
  );
};

export default SafePageContainer;
