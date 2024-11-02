import {Box} from '@styles/theme';
import React from 'react';
import {ViewStyle} from 'react-native';

interface IDivider {
  style: ViewStyle;
}
const Divider = ({style}: IDivider) => {
  return (
    <Box
      style={style}
      borderRightColor={'divider'}
      borderRightWidth={1}
      height={'90%'}
      alignSelf={'center'}
    />
  );
};

export {Divider};
