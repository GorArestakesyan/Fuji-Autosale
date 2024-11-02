import {Colors} from '@constants/colors';
import {
  VariantProps,
  createBox,
  createRestyleComponent,
  createText,
  createTheme,
  createVariant,
} from '@shopify/restyle';

export const ComfortaaRegular = 'ComfortaaRegular';
export const ComfortaaBold = 'ComfortaaBold';
export const ComfortaaSemiBold = 'ComfortaaSemiBold';
export const ComfortaaMedium = 'ComfortaaMedium';
export const ComfortaaLight = 'ComfortaaLight';

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
    defaults: {fontFamily: ComfortaaRegular},
    regular: {
      fontFamily: ComfortaaRegular,
    },
    bold: {
      fontSize: 16,
      fontFamily: ComfortaaBold,
    },
    semiBold: {
      fontSize: 16,
      fontFamily: ComfortaaBold,
    },
    semiBoldSystem: {
      fontSize: 16,
      fontFamily: ComfortaaSemiBold,
    },
    text10: {
      fontSize: 10,
      fontFamily: ComfortaaRegular,
    },
    text10SemiBold: {
      fontSize: 10,
      fontFamily: ComfortaaSemiBold,
    },
    text11: {
      fontSize: 11,
      fontFamily: ComfortaaRegular,
    },
    text12: {
      fontSize: 12,
      fontFamily: ComfortaaRegular,
    },
    text12SemiBold: {
      fontSize: 12,
      fontFamily: ComfortaaSemiBold,
    },
    text12Bold: {
      fontSize: 12,
      fontFamily: ComfortaaBold,
    },
    text13: {
      fontSize: 13,
      fontFamily: ComfortaaRegular,
    },
    text13System: {
      fontSize: 13,
      fontFamily: ComfortaaRegular,
    },
    text13Bold: {
      fontSize: 13,
      fontFamily: ComfortaaBold,
    },
    text13SemiBold: {
      fontSize: 13,
      fontFamily: ComfortaaSemiBold,
    },
    text14: {
      fontSize: 14,
      fontFamily: ComfortaaRegular,
    },
    text14Bold: {
      fontSize: 14,
      fontFamily: ComfortaaBold,
    },
    text14SemiBold: {
      fontSize: 14,
      fontFamily: ComfortaaSemiBold,
    },
    text14System: {
      fontSize: 14,
      fontFamily: ComfortaaRegular,
    },
    text14SemiBoldSystem: {
      fontSize: 14,
      fontFamily: ComfortaaSemiBold,
    },
    text15: {
      fontSize: 15,
      fontFamily: ComfortaaRegular,
    },
    text15System: {
      fontSize: 15,
      fontFamily: ComfortaaRegular,
    },
    text15SemiBold: {
      fontSize: 15,
      fontFamily: ComfortaaSemiBold,
    },
    text16S: {
      fontSize: 16,
      fontFamily: ComfortaaSemiBold,
    },
    text16: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: ComfortaaRegular,
    },
    text16System: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: ComfortaaRegular,
    },
    text16Bold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: ComfortaaBold,
    },
    text16SemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: ComfortaaSemiBold,
    },

    text17SemiBold: {
      fontSize: 17,
      fontFamily: ComfortaaBold,
    },
    text18: {
      fontSize: 18,
      fontFamily: ComfortaaRegular,
    },
    text18SemiBold: {
      fontSize: 18,
      fontFamily: ComfortaaSemiBold,
    },
    text18Bold: {
      fontSize: 18,
      fontFamily: ComfortaaBold,
    },
    text18BoldSystem: {
      fontSize: 18,
      fontFamily: ComfortaaBold,
    },
    text20: {
      fontSize: 20,
      fontFamily: ComfortaaRegular,
    },
    text20SemiBold: {
      fontSize: 20,
      fontFamily: ComfortaaSemiBold,
    },

    text20Bold: {
      fontSize: 20,
      fontFamily: ComfortaaBold,
    },
    text20BoldSystem: {
      fontSize: 20,
      fontFamily: ComfortaaBold,
    },

    text22: {
      fontSize: 22,
      fontFamily: ComfortaaBold,
    },

    text22Bold: {
      fontSize: 22,
      fontFamily: ComfortaaBold,
    },

    text22BoldSystem: {
      fontSize: 22,
      fontFamily: ComfortaaBold,
    },
    text22SemiBoldSystem: {
      fontSize: 22,
      fontFamily: ComfortaaSemiBold,
    },
    text24: {
      fontSize: 24,
      fontFamily: ComfortaaSemiBold,
    },
    text24Bold: {
      fontSize: 24,
      fontFamily: ComfortaaBold,
    },
    text26Bold: {
      fontSize: 26,
      fontFamily: ComfortaaBold,
    },
    text28Bold: {
      fontSize: 28,
      fontFamily: ComfortaaBold,
    },
    text28BoldSystem: {
      fontSize: 28,
      fontFamily: ComfortaaBold,
    },
    w600: {
      fontFamily: ComfortaaRegular,
    },
    w600SemiBold: {
      fontFamily: ComfortaaSemiBold,
    },
    w700: {
      color: 'textHeadlines',
      fontWeight: '700',
      fontFamily: ComfortaaRegular,
    },
    w800: {
      color: 'textHeadlines',
      fontWeight: '800',
      fontFamily: ComfortaaRegular,
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
>([createVariant({themeKey: 'boxVariants'})], Box);

export const ButtonContainer = createRestyleComponent<
  VariantProps<TTheme, 'boxVariants'> & React.ComponentProps<typeof Box>,
  TTheme
>([createVariant({themeKey: 'boxVariants'})], Box);

export default theme;
