import { Appearance, ColorSchemeName } from 'react-native';

export const useDeviceTheme = () => {
  const currentTheme: ColorSchemeName = Appearance.getColorScheme();
  return currentTheme;
};
