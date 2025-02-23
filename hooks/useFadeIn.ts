import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useFadeIn = (index: number) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;
  const scale = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    const delay = (index % 10) * 100;
    
    console.log(index, delay);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  return { opacity, translateY, scale };
}; 