import {Colors} from '@constants/colors';
import {TScreenOptions} from '@types';
import {Easing} from 'react-native';

const SCREEN_OPTIONS: TScreenOptions = {
  headerShown: false,
  animationTypeForReplace: 'push',
  animation: 'simple_push',
  tabBarShowLabel: false,
  tabBarVisibilityAnimationConfig: {
    show: {
      animation: 'timing',
      config: {
        duration: 3000,
        easing: Easing.out(Easing.linear),
      },
    },
    hide: {
      animation: 'timing',
      config: {
        duration: 3000,
        easing: Easing.in(Easing.linear),
      },
    },
  },
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
