import {ActivityIndicator} from '@components/ActivityIndicator';
import {useProductsQuery} from '@hooks/products';
import {Box} from '@styles/theme';
import React from 'react';
import {FlatList} from 'react-native';
import {ProductCard} from './ProductCard/ProductCard';
import {styles} from './Products.useStyles';

export const Products = () => {
  const {data, isLoading} = useProductsQuery();

  if (isLoading) {
    return (
      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        <ActivityIndicator size={80} />
      </Box>
    );
  }

  return (
    <FlatList
      bounces={false}
      numColumns={2}
      contentContainerStyle={styles.flatListContainer}
      data={data}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item: product}) => (
        <ProductCard key={product.id} product={product} />
      )}
    />
  );
};
