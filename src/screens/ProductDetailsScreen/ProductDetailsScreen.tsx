import {Header} from '@components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@types';
import React from 'react';
import {ScrollView} from 'react-native';
import {ProductDetails} from './components/ProductDetails';
import {styles} from './productDetailsScreen.useStyles';
type Props = NativeStackScreenProps<
  TRootStackParamList,
  'ProductDetails',
  'MyStack'
>;
export const ProductDetailsScreen = ({route}: Props) => {
  const product = route.params.product;

  return (
    <ScrollView
      style={styles.scrollWrapper}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <Header />
      <ProductDetails product={product} />
    </ScrollView>
  );
};
