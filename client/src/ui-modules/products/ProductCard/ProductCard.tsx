import { STACK_ROUTES } from '@constants/routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Text } from '@styles/theme';
import { TVehicle } from '@types';
import React from 'react';
import { Dimensions, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './Product.useStyles';

interface IVehicle {
  vehicle: TVehicle;
}

export const VehicleCard = ({ vehicle }: IVehicle) => {
  const { width } = Dimensions.get('screen');
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const goToDetails = () => navigate(STACK_ROUTES.ProductDetails, { vehicle });

  return (
    <Pressable onPress={goToDetails}>
      <Box
        p={'m'}
        m={'xs'}
        width={width / 2.1}
        borderWidth={1}
        backgroundColor={'primary'}
        borderColor={'textPrimary'}
        borderRadius={'m'}>
        <FastImage
          source={{
            uri: vehicle?.thumbnail,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.avatar}
        />

        <Box pt={'m'}>
          <Text variant={'text16'} color={'textPrimary'}>
            {vehicle.title}
          </Text>
          <Text
            letterSpacing={1}
            variant={'text18Bold'}
            my={'s'}
            color={'textSecondary'}>
            ${vehicle.price}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
