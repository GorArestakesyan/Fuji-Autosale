import useRoutes from '@hooks/useRoutes';
import { useTheme } from '@hooks/useTheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_OPTIONS } from '@utils/screenOptions';
import React, { FunctionComponent } from 'react';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { colors } = useTheme();
  const { bottomRoutes } = useRoutes();
  const headerStyles = {
    tabBarActiveTintColor: colors.link,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.textPrimary,
    tabBarStyle: {
      height: 50,
      alignSelft: 'center',
      paddingTop: 10,
      position: 'absolute',
      backgroundColor: colors.primary,
      borderColor: colors.textPrimary,
      borderTopWidth: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      boxShadow: '0px 0px 6px rgba(255, 255, 255, 1)',
    },
  };

  return (
    <Tab.Navigator screenOptions={{ ...SCREEN_OPTIONS, ...headerStyles }}>
      {bottomRoutes.map(({ screen, logo, label, name }, index) => (
        <Tab.Screen
          key={`bottom_tab_item_${index}`}
          options={{
            tabBarLabel: label,
            tabBarLabelStyle: {
              fontSize: 11,
              marginTop: 5,
            },
            tabBarIcon: ({ focused }) => logo(focused),
          }}
          name={name}
          listeners={({ navigation }) => ({
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
