import Bag from '@assets/icons/svg/bag.svg';
import { useTheme } from '@hooks/useTheme';
import { Box } from '@styles/theme';
import { ITabLogo } from '@types';
import React from 'react';
const ShopLogo = ({ focused }: ITabLogo) => {
  const { colors } = useTheme();
  return (
    <Box
      p={'m'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'s'}>
      <Bag height={25} color={focused ? colors.link : colors.textSecondary} />
    </Box>
  );
};

export { ShopLogo };
