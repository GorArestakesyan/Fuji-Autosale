import {useTheme} from '@hooks/useTheme';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerScreen} from '@screens/DrawerScreen';
import {SCREEN_OPTIONS} from '@utils/screenOptions';
import React from 'react';
import {TabNavigator} from './TabNavigator';
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {colors} = useTheme();
  const headerStyles = {
    headerStyle: {
      backgroundColor: colors.textPrimary,
    },
  };
  return (
    <Drawer.Navigator
      drawerContent={DrawerScreen}
      screenOptions={{...SCREEN_OPTIONS, ...headerStyles}}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
