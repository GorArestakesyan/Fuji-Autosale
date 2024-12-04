import { StyleSheet } from 'react-native';
import { colors } from '@styles/theme.tsx';

export const styles = StyleSheet.create({
  iconButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },

  carIcon: {
    alignSelf: 'center',
  },
});
