import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight + 4;
export const SCREEN_HEIGHT = height - STATUS_BAR_HEIGHT;
export const HEADER_HEIGHT = 60;
export const SEARCH_HEIGHT = 60;
export const PACKAGES_HEIGHT = 260;
export const CATEGORIES_HEIGHT = 200;
export const SUB_CATEGORIES_HEIGHT = 50;
export const STICKY_SUB_CATEGORIES_HEIGHT = HEADER_HEIGHT + SEARCH_HEIGHT + PACKAGES_HEIGHT + 140;
export const PRODUCT_IMAGE_HEIGHT = 240;
export const ORDER_STATUS_IMAGE_HEIGHT = WINDOW_WIDTH * 0.5;

export const SPLASH_LOGO_SIZE = 260;
export const SPLASH_LOGO_SPACING = 50;
export const SPLASH_STOKE_SIZE = 10;
export const LOGO_CONTAINER_SIZE = SPLASH_LOGO_SIZE - SPLASH_LOGO_SPACING;
export const SPLASH_SCREEN_DURATION = 8000;

export const Colors = {
  background: '#FFFFFF',
  primary: '#17A563',
  secondary: '#FF324B',
  tertiary: '#FFC107',
  danger: '#FF1843',
  blue: '#1A94FF',
  orange: '#FC820A',
  green: '#CDFFE2',
  stroke: '#F1F1F5',
  lightGrey: '#E0E0E0',
  lightGrey2: '#DBDBDB',
  lightBg: '#F3F5F7',
  lightBg2: '#F5F9FD',
  grey: '#617986',
  grey2: '#BDBDBD',
  dark: '#06161C',
  darkBg: '#0D1F29',
  primaryLight: '#E8F9F2',
  primaryLight2: '#DCF2E5',
  transparent: 'transparent',
  shadow: '#04060F',
};
