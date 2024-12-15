import Explore from '@assets/icons/svg/explore.svg';
import { useTheme } from '@hooks/useTheme';
import { Box } from '@styles/theme';
import { ITabLogo } from '@types';
import React from 'react';
const ExploreLogo = ({ focused }: ITabLogo) => {
  const { colors } = useTheme();
  return (
    <Box
      p={'m'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'s'}>
      <Explore
        height={30}
        color={focused ? colors.link : colors.textSecondary}
      />
    </Box>
  );
};

export { ExploreLogo };
