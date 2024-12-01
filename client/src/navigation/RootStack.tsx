import {useTheme} from '@hooks/useTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetailsScreen} from '@screens/ProductDetailsScreen';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import {TRootStackParamList} from '@types';
import {SCREEN_OPTIONS} from '@utils/screenOptions';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const RootStack = () => {
  const {colors} = useTheme();
  const headerStyles = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
  };
  const safeAreaStyle = {flex: 1, backgroundColor: colors.primary};

  return (
    <SafeAreaView style={safeAreaStyle}>
      <Stack.Navigator screenOptions={{...SCREEN_OPTIONS, ...headerStyles}}>
        <Stack.Screen
          name="MainScreen"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
