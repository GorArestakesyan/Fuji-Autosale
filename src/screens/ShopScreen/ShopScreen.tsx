import {Box} from '@styles/theme';
import {Products} from '@ui-modules/products';
import React from 'react';

const ShopScreen = () => {
  return (
    <Box flex={1} backgroundColor={'primary'}>
      <Products />
    </Box>
  );
};

export default ShopScreen;
