import {Colors} from '@constants/colors';
import {TScreenOptions} from '@types';

const SCREEN_OPTIONS: TScreenOptions = {
  headerShown: false,
  overlayColor: 'rgba(0, 0, 0, 0.9)',
  headerStyle: {
    /** @hint default header background color  */
    backgroundColor: Colors.dark.textPrimary,
  },
  drawerPosition: 'right',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export {SCREEN_OPTIONS};
