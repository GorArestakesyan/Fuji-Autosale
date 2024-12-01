import Button from '@components/Button';
import { Divider } from '@components/Divider';
import { Box, Text } from '@styles/theme';
import { TProduct } from '@types';
import { Reviews } from '@ui-modules/products/Reviews/Reviews';
import React, { useState } from 'react';
import { FlatList, Modal, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from '../productDetailsScreen.useStyles';

interface IProductDetails {
  product: TProduct;
}

export function ProductDetails({ product }: IProductDetails) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Box flex={1} paddingHorizontal={'s'} backgroundColor={'primary'}>
      <Box>
        <FlatList
          horizontal
          pagingEnabled
          bounces={false}
          ItemSeparatorComponent={Divider}
          contentContainerStyle={styles.sliderWrapper}
          style={styles.slider}
          data={product?.images}
          renderItem={({ item }) => {
            return (
              <FastImage
                source={{
                  uri: item,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.productImage}
              />
            );
          }}
        />
        <Text my={'m'} color={'textPrimary'} variant={'text22Bold'}>
          {product.title}
        </Text>
        <Text my={'s'} color={'textSecondary'} variant={'text16System'}>
          {product.category.toLocaleUpperCase()}
        </Text>

        <Text
          my={'s'}
          letterSpacing={0.4}
          color={'textSecondary'}
          variant={'text16System'}>
          {product.description}
        </Text>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}>
          <Text
            p={'s'}
            my={'s'}
            style={styles.price}
            textAlign={'center'}
            color={'textPrimary'}
            variant={'text24Bold'}>
            ${product.price}
          </Text>
          <Text my={'s'} color={'textPrimary'} variant={'text16System'}>
            {product.shippingInformation.toLocaleUpperCase()}
          </Text>
        </Box>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
          <Text
            my={'s'}
            textAlign={'right'}
            color={'textPrimary'}
            letterSpacing={1}
            variant={'text16System'}>
            DISCOUNT {product.discountPercentage}%
          </Text>
          <Text
            my={'s'}
            textAlign={'right'}
            color={'textPrimary'}
            variant={'text16System'}>
            RATING {product.rating}
          </Text>
        </Box>
      </Box>
      <Text
        my={'s'}
        textAlign={'right'}
        color={'textPrimary'}
        variant={'text16Bold'}>
        {product.returnPolicy}
      </Text>
      <Box
        alignItems={'flex-end'}
        flexDirection={'row'}
        marginVertical={'s'}
        justifyContent={'space-between'}>
        <Button
          label="View QR code"
          onPress={() => setIsModalVisible(true)}
          backgroundColor={'link'}
          p={'m'}
          textColor="white"
          borderRadius={'m'}
        />
        <Box>
          <Text
            my={'s'}
            textAlign={'right'}
            color={'textPrimary'}
            variant={'text16System'}>
            {product.sku}
          </Text>
          <Text
            my={'s'}
            textAlign={'right'}
            color={'textPrimary'}
            variant={'text16System'}>
            {product.meta.barcode}
          </Text>
        </Box>
      </Box>
      <Reviews reviews={product.reviews} />
      <Modal transparent animationType="fade" visible={isModalVisible}>
        <Box
          backgroundColor={'semiTransparentBlack'}
          alignItems={'center'}
          justifyContent={'center'}
          flex={1}>
          <Pressable onPress={() => setIsModalVisible(false)}>
            <FastImage
              source={{
                uri: product.meta.qrCode,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.qr}
            />
          </Pressable>
        </Box>
      </Modal>
    </Box>
  );
}
