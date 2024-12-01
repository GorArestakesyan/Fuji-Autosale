import theme, {colors} from '@styles/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  productImage: {
    width: width - 18,
    height: '100%',
    alignSelf: 'center',
  },
  sliderWrapper: {
    height: 250,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
  },
  slider: {
    alignSelf: 'center',
  },
  price: {
    borderColor: colors.textPrimary,
    borderWidth: theme.spacing.xxs,
    borderRadius: theme.borderRadii.s,
  },
  qr: {
    height: width / 1.5,
    width: width,
  },
  scrollWrapper: {backgroundColor: colors.primary},
});
