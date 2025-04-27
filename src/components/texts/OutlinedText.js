import {Box, Heading} from '@gluestack-ui/themed';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const OutlinedText = ({children, fontSize = 24, outlineWidth = 1, style}) => {
  const positions = [
    {top: -outlineWidth, left: 0},
    {top: outlineWidth, left: 0},
    {top: 0, left: -outlineWidth},
    {top: 0, left: outlineWidth},
    {top: -outlineWidth, left: -outlineWidth},
    {top: -outlineWidth, left: outlineWidth},
    {top: outlineWidth, left: -outlineWidth},
    {top: outlineWidth, left: outlineWidth},
  ];

  return (
    <Box position="relative" style={style}>
      {positions.map((pos, index) => (
        <Heading
          key={index}
          position="absolute"
          fontSize={fontSize}
          lineHeight={moderateScale(220)}
          color="#FFC000"
          style={{
            top: pos.top,
            left: pos.left,
          }}>
          {children}
        </Heading>
      ))}
      <Heading
        position="relative"
        lineHeight={moderateScale(220)}
        fontSize={fontSize}
        color="black"
        zIndex={1}>
        {children}
      </Heading>
    </Box>
  );
};

export default OutlinedText;
