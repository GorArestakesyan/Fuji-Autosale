import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const HORIZONTAL_PADDINGS = 38;
export const styles = StyleSheet.create({
  image: {
    width: width - HORIZONTAL_PADDINGS,
    height: 200,
    resizeMode: 'cover',
  },
});
