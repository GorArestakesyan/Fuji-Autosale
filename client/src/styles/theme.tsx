import { Colors } from '@constants/colors';
import { isIOS } from '@hooks/isIOS';
import {
  VariantProps,
  createBox,
  createRestyleComponent,
  createText,
  createTheme,
  createVariant,
} from '@shopify/restyle';

export const ComfortaaRegular = 'Comfortaa-Regular';
export const ComfortaaBold = 'Comfortaa-Bold';
export const ComfortaaSemiBold = 'Comfortaa-SemiBold';
export const ComfortaaMedium = 'Comfortaa-Medium';
export const ComfortaaLight = 'Comfortaa-Light';

export const fontFamilies = {
  COMFORTAA: {
    regular: isIOS() ? 'Comfortaa-Regular' : 'ComfortaaRegular',
    semiBold: isIOS() ? 'Comfortaa-SemiBold' : 'ComfortaaSemiBold',
    bold: isIOS() ? 'Comfortaa-Bold' : 'ComfortaaBold',
    medium: isIOS() ? 'Comfortaa-Medium' : 'ComfortaaMedium',
    light: isIOS() ? 'Comfortaa-Light' : 'ComfortaaLight',
  },
};

export const theme = createTheme({
  colors: {
    ...Colors.light,
  },
  spacing: {
    _xxs: -2,
    z: 0,
    xxs: 2,
    xs: 4,
    sl: 6,
    s: 8,
    _10: 10,
    sm: 12,
    m: 16,
    mx: 20,
    _m: -16,
    l: 24,
    xl: 32,
    xxl: 80,
  },
  borderRadii: {
    z: 0,
    s: 5,
    m: 10,
    sm: 12,
    xm: 15,
    l: 25,
    x: 40,
    xl: 150,
  },
  textVariants: {
    defaults: { fontFamily: fontFamilies.COMFORTAA.regular },
    regular: {
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    bold: {
      fontSize: 16,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    semiBold: {
      fontSize: 16,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    semiBoldSystem: {
      fontSize: 16,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text10: {
      fontSize: 10,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text10SemiBold: {
      fontSize: 10,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text11: {
      fontSize: 11,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text12: {
      fontSize: 12,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text12SemiBold: {
      fontSize: 12,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text12Bold: {
      fontSize: 12,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text13: {
      fontSize: 13,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text13System: {
      fontSize: 13,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text13Bold: {
      fontSize: 13,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text13SemiBold: {
      fontSize: 13,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text14: {
      fontSize: 14,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text14Bold: {
      fontSize: 14,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text14SemiBold: {
      fontSize: 14,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text14System: {
      fontSize: 14,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text14SemiBoldSystem: {
      fontSize: 14,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text15: {
      fontSize: 15,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text15System: {
      fontSize: 15,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text15SemiBold: {
      fontSize: 15,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text16S: {
      fontSize: 16,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text16: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text16System: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text16Bold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text16Light: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fontFamilies.COMFORTAA.light,
    },
    text16SemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },

    text17SemiBold: {
      fontSize: 17,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text18: {
      fontSize: 18,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text18Light: {
      fontSize: 18,
      fontFamily: fontFamilies.COMFORTAA.light,
    },
    text18SemiBold: {
      fontSize: 18,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text18Bold: {
      fontSize: 18,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text18BoldSystem: {
      fontSize: 18,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text20: {
      fontSize: 20,
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    text20Light: {
      fontSize: 20,
      fontFamily: fontFamilies.COMFORTAA.light,
    },
    text20SemiBold: {
      fontSize: 20,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },

    text20Bold: {
      fontSize: 20,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text20BoldSystem: {
      fontSize: 20,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },

    text22: {
      fontSize: 22,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },

    text22Light: {
      fontSize: 22,
      fontFamily: fontFamilies.COMFORTAA.light,
    },

    text22Bold: {
      fontSize: 22,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },

    text22BoldSystem: {
      fontSize: 22,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text22SemiBoldSystem: {
      fontSize: 22,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text24: {
      fontSize: 24,
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    text24Light: {
      fontSize: 24,
      fontFamily: fontFamilies.COMFORTAA.light,
    },
    text24Bold: {
      fontSize: 24,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text26Bold: {
      fontSize: 26,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text26Light: {
      fontSize: 26,
      fontFamily: fontFamilies.COMFORTAA.light,
    },
    text28Bold: {
      fontSize: 28,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    text28Light: {
      fontSize: 28,
      fontFamily: fontFamilies.COMFORTAA.light,
    },
    text28BoldSystem: {
      fontSize: 28,
      fontFamily: fontFamilies.COMFORTAA.bold,
    },
    w600: {
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    w600SemiBold: {
      fontFamily: fontFamilies.COMFORTAA.semiBold,
    },
    w700: {
      color: 'textHeadlines',
      fontWeight: '700',
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
    w800: {
      color: 'textHeadlines',
      fontWeight: '800',
      fontFamily: fontFamilies.COMFORTAA.regular,
    },
  },
  boxVariants: {
    defaults: {},
    default: {
      flexDirection: 'column',
    },
    RSB: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    Row: {
      flexDirection: 'row',
    },
    center: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    RAC: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    Container: {
      paddingHorizontal: {
        phone: 'l',
        tablet: 'xl',
      },
      paddingTop: 'm',
    },
    ButtonContainer: {
      alignSelf: 'center',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 900,
  },
});

export const colors = theme.colors;
export type TTheme = typeof theme;
export const Box = createBox<TTheme>();

export const Text = createText<TTheme>();

export const CustomBox = createRestyleComponent<
  VariantProps<TTheme, 'boxVariants'> & React.ComponentProps<typeof Box>,
  TTheme
>([createVariant({ themeKey: 'boxVariants' })], Box);

export const ButtonContainer = createRestyleComponent<
  VariantProps<TTheme, 'boxVariants'> & React.ComponentProps<typeof Box>,
  TTheme
>([createVariant({ themeKey: 'boxVariants' })], Box);

export default theme;
