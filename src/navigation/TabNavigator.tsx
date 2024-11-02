import useRoutes from '@hooks/useRoutes';
import {useTheme} from '@hooks/useTheme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_OPTIONS} from '@utils/screenOptions';
import React, {FunctionComponent} from 'react';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const {colors} = useTheme();
  const {bottomRoutes} = useRoutes();
  const headerStyles = {
    tabBarActiveTintColor: colors.link,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.textPrimary,
    tabBarStyle: {
      paddingVertical: 12,
      height: 55,
      backgroundColor: colors.primary,
      borderTopWidth: 1,
    },
  };

  return (
    <Tab.Navigator screenOptions={{...SCREEN_OPTIONS, ...headerStyles}}>
      {bottomRoutes.map(({screen, logo, label, name}, index) => (
        <Tab.Screen
          key={`bottom_tab_item_${index}`}
          options={{
            tabBarLabel: label,
            tabBarLabelStyle: {
              fontSize: 11,
              marginTop: 5,
            },
            tabBarIcon: ({focused}) => logo(focused),
          }}
          name={name}
          listeners={({navigation}) => ({
            tabPress: e => {
              if (name === 'MoreScreen') {
                e.preventDefault();
                navigation.openDrawer();
              }
            },
          })}
          component={screen as FunctionComponent}
        />
      ))}
    </Tab.Navigator>
  );
};
