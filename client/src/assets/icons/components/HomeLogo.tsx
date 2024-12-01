import Home from '@assets/icons/svg/home.svg';
import { useTheme } from '@hooks/useTheme';
import { ITabLogo } from '@types';
import React from 'react';
const HomeLogo = ({ focused }: ITabLogo) => {
  const { colors } = useTheme();
  return (
    <Home height={25} color={focused ? colors.link : colors.textSecondary} />
  );
};

export { HomeLogo };
