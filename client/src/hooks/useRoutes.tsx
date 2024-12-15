import { ExploreLogo, HomeLogo, MoreLogo } from '@assets/icons/components';
import { DrawerScreen } from '@screens/DrawerScreen';
import ExploreScreen from '@screens/ExploreScreen';
import { HomeScreen } from '@screens/HomeScreen';
import React from 'react';

const useRoutes = () => {
  const bottomRoutes = [
    {
      label: 'Home',
      name: 'HomeScreen',
      logo: (focused: boolean) => <HomeLogo focused={focused} />,
      screen: HomeScreen,
    },
    {
      label: 'Explore',
      name: 'ExploreScreen',
      logo: (focused: boolean) => <ExploreLogo focused={focused} />,
      screen: ExploreScreen,
    },
    {
      label: 'More',
      name: 'MoreScreen',
      logo: (focused: boolean) => <MoreLogo focused={focused} />,
      screen: DrawerScreen,
    },
  ];
  return { bottomRoutes };
};

export default useRoutes;
