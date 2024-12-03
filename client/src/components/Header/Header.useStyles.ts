import { StyleSheet } from 'react-native';
import { colors } from '@styles/theme.tsx';

export const styles = StyleSheet.create({
  iconButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.link,
    alignItems: 'center',
    justifyContent: 'center',
  },

  carIcon: {
    alignSelf: 'center',
  },
});
