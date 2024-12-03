import Car from '@assets/icons/svg/car.svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, colors, Text } from '@styles/theme';
import { TRootStackParamList } from '@types';
import { TopSales } from '@ui-modules/top-sales';
import React from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { styles } from '@components/Header/Header.useStyles.ts';

type Props = NativeStackScreenProps<TRootStackParamList, 'HomeScreen'>;

const { width } = Dimensions.get('window');

export const HomeScreen = ({ navigation }: Props) => {
  const goToShop = () => navigation.navigate('ShopScreen');

  return (
    <Box flex={1} backgroundColor={'primary'}>
      <Box
        py={'m'}
        px={'m'}
        mt={'xs'}
        width={width}
        height={100}
        alignSelf={'center'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text variant={'text24Bold'} color={'textPrimary'}>
          FUJI Autosale
        </Text>
        <Pressable style={styles.iconButton} onPress={goToShop}>
          <Car
            color={colors.primary}
            height={60}
            width={60}
            style={styles.carIcon}
          />
        </Pressable>
      </Box>
      <TopSales />
    </Box>
  );
};
