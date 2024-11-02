import {STACK_ROUTES} from '@constants/routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, Text} from '@styles/theme';
import {TProduct} from '@types';
import React from 'react';
import {Dimensions, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './Product.useStyles';

interface IProduct {
  product: TProduct;
}

export const ProductCard = ({product}: IProduct) => {
  const {width} = Dimensions.get('screen');
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const goToDetails = () => navigate(STACK_ROUTES.ProductDetails, {product});

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
            uri: product?.thumbnail,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.avatar}
        />

        <Box pt={'m'}>
          <Text variant={'text16'} color={'textSecondary'}>
            {product.title}
          </Text>
          <Text
            letterSpacing={1}
            variant={'text18Bold'}
            my={'s'}
            color={'textPrimary'}>
            ${product.price}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
