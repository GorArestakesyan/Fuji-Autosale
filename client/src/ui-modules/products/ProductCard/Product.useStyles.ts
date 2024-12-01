import { colors } from '@styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 140,
    borderRadius: 5,
    backgroundColor: colors.primary,
    boxShadow: '0px 3px 5px rgba(49, 54, 56, 0.3)',
  },
});
