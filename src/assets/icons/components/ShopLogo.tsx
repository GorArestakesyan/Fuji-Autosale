import Bag from '@assets/icons/svg/bag.svg';
import {useTheme} from '@hooks/useTheme';
import {ITabLogo} from '@types';
import React from 'react';
const ShopLogo = ({focused}: ITabLogo) => {
  const {colors} = useTheme();
  return (
    <Bag height={25} color={focused ? colors.link : colors.textSecondary} />
  );
};

export {ShopLogo};
