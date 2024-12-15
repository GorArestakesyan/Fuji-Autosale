import Logo from '@assets/icons/svg/logo.svg';
import { styles } from '@components/Header/Header.useStyles.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Text } from '@styles/theme';
import { TRootStackParamList } from '@types';
import { TopSales } from '@ui-modules/top-sales';
import React from 'react';
import { Dimensions, Pressable } from 'react-native';

type Props = NativeStackScreenProps<TRootStackParamList, 'HomeScreen'>;

const { width } = Dimensions.get('window');

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <Box flex={1} backgroundColor={'primary'}>
      <Box
        py={'m'}
        px={'m'}
        mt={'xs'}
        width={width}
        height={100}
        alignSelf={'center'}
        flexDirection={'row-reverse'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text variant={'text24Bold'} color={'textPrimary'}>
          FUJI Autosale
        </Text>
        <Pressable style={styles.iconButton}>
          <Logo height={34} width={34} style={styles.carIcon} />
        </Pressable>
      </Box>
      <TopSales />
    </Box>
  );
};
