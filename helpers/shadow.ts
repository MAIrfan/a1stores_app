import { ViewStyle } from 'react-native';

import { Colors } from '@/constants';
import { getColorOpacity } from './color';

export const getShadow = (depth: number, shadowColor: string = getColorOpacity(Colors.shadow, 5)): ViewStyle => {
  if (depth <= 0) return {};

  const baseOffset = Math.floor(depth / 2);
  
  return {
    shadowColor,
    shadowOffset: { width: 0, height: baseOffset + 1 },
    shadowOpacity: 0.15 + depth * 0.02,
    shadowRadius: 1 + depth * 0.8,
    elevation: depth,
  };
};
