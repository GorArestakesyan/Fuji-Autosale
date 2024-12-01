import { HomeLogo, MoreLogo, ShopLogo } from '@assets/icons/components';
import { DrawerScreen } from '@screens/DrawerScreen';
import { HomeScreen } from '@screens/HomeScreen';
import ShopScreen from '@screens/ShopScreen/ShopScreen';
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
      label: 'Shop',
      name: 'ShopScreen',
      logo: (focused: boolean) => <ShopLogo focused={focused} />,
      screen: ShopScreen,
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
