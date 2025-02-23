import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight + 4;
export const SCREEN_HEIGHT = height - STATUS_BAR_HEIGHT;
export const HEADER_HEIGHT = 60;
export const SEARCH_HEIGHT = 60;
export const PACKAGES_HEIGHT = 260;
export const CATEGORIES_HEIGHT = 200;
export const SUB_CATEGORIES_HEIGHT = 50;
export const STICKY_SUB_CATEGORIES_HEIGHT = HEADER_HEIGHT + SEARCH_HEIGHT + PACKAGES_HEIGHT + 140;
export const PRODUCT_IMAGE_HEIGHT = 240;
export const PRODUCT_CARD_WIDTH = SCREEN_WIDTH * 0.46;
export const PRODUCT_CARD_SPACING = SCREEN_WIDTH * 0.04;

export const Colors = {
  background: '#FFFFFF',
  primary: '#17A563',
  secondary: '#FF324B',
  tertiary: '#FFC107',
  stroke: '#F1F1F5',
  lightGrey: '#E0E0E0',
  lightGrey2: '#DBDBDB',
  lightBg: '#F3F5F7',
  lightBg2: '#F5F9FD',
  grey: '#617986',
  grey2: '#BDBDBD',
  dark: '#06161C',
  darkBg: '#0D1F29',
  primaryLight: '#E8F5E9',
  primaryLight2: '#DCF2E5',
  transparent: 'transparent',
};
