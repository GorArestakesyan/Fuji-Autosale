import SettingsIcon from '@assets/icons/svg/settings.svg';
import { useTheme } from '@hooks/useTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Text } from '@styles/theme';
import { TRootStackParamList } from '@types';
import React from 'react';
import { Pressable } from 'react-native';

type Props = NativeStackScreenProps<TRootStackParamList, 'MoreScreen'>;

export const DrawerScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const goToSettings = () => navigation.navigate('SettingsScreen');
  return (
    <Box flex={1} p={'m'} backgroundColor={'primary'}>
      <Box m={'l'}>
        <Pressable onPress={goToSettings}>
          <Box flexDirection={'row'} g={'m'} alignItems={'center'}>
            <SettingsIcon color={colors.textPrimary} />
            <Text variant={'text18'} color={'textPrimary'}>
              Settings
            </Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
};
