import { Colors } from '@/constants';
import { ViewStyle } from 'react-native';

export const getShadow = (depth: number, shadowColor: string = Colors.lightGrey2): ViewStyle => {
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
