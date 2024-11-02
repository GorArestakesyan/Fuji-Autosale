import {STACK_ROUTES} from '@constants/routes';
import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {DrawerNavigationOptions} from '@react-navigation/drawer/lib/typescript/src/types';
import {
  EventListenerCallback,
  EventMapCore,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ReactNode} from 'react';

type ThemeContextType = {
  colors: TColors /** Define the type of colors here */;
  theme?: keyof TColorPalettes;
  toggleTheme: () => void;
};
type TChild = {
  children?: React.ReactNode;
};
type TScreenOptions = BottomTabNavigationOptions &
  NativeStackNavigationOptions &
  DrawerNavigationOptions;
type TColorPalettes = {
  light: TColors;
  dark: TColors;
};
type TColorTheme = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  transparent: string;
  success: string;
  warning: string;
  error: string;
  background: string;
  border: string;
  shadow: string;
};
type TSharedColors = {
  black: string;
  white: string;
  semiTransparentBlack: string;
  gray: string;
  shadow: string;
  mutedText: string;
  overlay: string;
  highlight: string;
  info: string;
  disabled: string;
  successLight: string;
  errorBackground: string;
  inputBackground: string;
  notificationBadge: string;
  accent: string;
  divider: string;
  link: string;
};
type THomeNavigationRoutes = {
  HomeScreen: undefined;
  MoreScreen: undefined;
  ShopScreen: undefined;
};

type TStackNavigationRoutes = (typeof STACK_ROUTES)[keyof typeof STACK_ROUTES];

type TColors = TColorTheme & TSharedColors;
interface ITabLogo {
  focused: boolean;
}
interface TRoute {
  label: string;
  name: keyof TRootStackParamList;
  logo: (focused: boolean) => ReactNode;
  screen: (props?: unknown) => ReactNode;
  listener?: Partial<{
    tabPress: EventListenerCallback<
      BottomTabNavigationEventMap &
        EventMapCore<TabNavigationState<ParamListBase>>,
      'tabPress'
    >;
  }>;
}
type TReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: TReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

type TProducts = TProduct[];

type TRootStackParamList = {
  ShopScreen: undefined;
  MoreScreen: undefined;
  HomeScreen: undefined;
  MainScreen: undefined;
  SettingsScreen: undefined;
  ProductDetails: {product: TProduct};
};

export type {
  ITabLogo,
  TChild,
  TColorPalettes,
  TColors,
  TColorTheme,
  ThemeContextType,
  THomeNavigationRoutes,
  TProduct,
  TProducts,
  TReview,
  TRootStackParamList,
  TRoute,
  TScreenOptions,
  TSharedColors,
  TStackNavigationRoutes,
};
