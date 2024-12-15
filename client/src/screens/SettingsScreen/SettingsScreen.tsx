import { Header } from '@components/Header';
import ThemeSwitch from '@components/ThemeSwitcher';
import { useDeviceTheme } from '@hooks/useDeviceTheme';
import { useTheme } from '@hooks/useTheme';
import ManageVehicles from '@screens/Admin/ManageVehicles';
import { Box, Text } from '@styles/theme';
import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { styles } from './SettingsScreen.useStyles';

const SettingsScreen = () => {
  const { toggleTheme, theme } = useTheme();
  const deviceTheme = useDeviceTheme();
  const currentTheme = !theme ? deviceTheme : theme;
  const isOn = useSharedValue(currentTheme === 'dark' ? 1 : 0);

  const handlePress = () => {
    isOn.set(value => Number(!value));
  };
  return (
    <Box flex={1} backgroundColor={'primary'}>
      <Header />
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'90%'}
        alignSelf={'center'}>
        <Text variant={'text16S'} color={'textPrimary'}>
          Change theme
        </Text>
        <ThemeSwitch
          onPress={handlePress}
          value={isOn}
          duration={350}
          onFinish={toggleTheme}
          style={styles.switcher}
        />
      </Box>
      <ManageVehicles />
    </Box>
  );
};

export default SettingsScreen;
