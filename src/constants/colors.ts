import {TColorPalettes, TSharedColors} from '@types';

const sharedColors: TSharedColors = {
  black: '#000000',
  white: '#FFFFFF',
  semiTransparentBlack: 'rgba(0, 0, 0, 0.5)',
  gray: '#B0B0B0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  mutedText: '#7D7D7D',
  overlay: 'rgba(0, 0, 0, 0.6)',
  highlight: '#FFD700',
  info: '#2196F3',
  disabled: '#C0C0C0',
  successLight: '#A5D6A7',
  errorBackground: '#F8D7DA',
  inputBackground: '#F1F3F4',
  notificationBadge: '#FF5722',
  accent: '#6200EE',
  divider: '#E0E0E0',
  link: '#1E88E5',
};

const Colors: TColorPalettes = {
  dark: {
    primary: '#121212',
    secondary: '#1A1A2E',
    textPrimary: sharedColors.white,
    textSecondary: '#8C8C8E',
    transparent: 'rgba(0,0,0,0)',
    success: '#388E3C',
    warning: '#FFC107',
    error: '#D32F2F',
    background: '#101014',
    border: '#33333D',
    ...sharedColors,
  },
  light: {
    primary: '#F8F8F8',
    secondary: '#E0E0E0',
    textPrimary: sharedColors.black,
    textSecondary: '#6B7280',
    transparent: 'rgba(0,0,0,0)',
    success: '#388E3C',
    warning: '#FFC107',
    error: '#D32F2F',
    background: '#FFFFFF',
    border: '#D3D3D3',
    ...sharedColors,
  },
};

export {Colors};
