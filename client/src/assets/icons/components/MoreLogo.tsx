import More from '@assets/icons/svg/more.svg';
import {useTheme} from '@hooks/useTheme';
import {ITabLogo} from '@types';
import React from 'react';
const MoreLogo = ({focused}: ITabLogo) => {
  const {colors} = useTheme();
  return (
    <More height={25} color={focused ? colors.link : colors.textSecondary} />
  );
};

export {MoreLogo};
