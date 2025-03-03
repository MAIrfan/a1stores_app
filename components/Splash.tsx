import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  Colors,
  LOGO_CONTAINER_SIZE,
  SPLASH_LOGO_SIZE,
  SPLASH_STOKE_SIZE,
} from "@/constants";
import { CircleLogo } from "./CircleLogo";

export const Splash = () => {
  const circumference = 2 * Math.PI * (SPLASH_LOGO_SIZE / 2 - SPLASH_STOKE_SIZE / 2);
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      -1, // Infinite loop
      false
    );
  }, []);

  const animatedProps = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animatedProps}>
        <Svg
          width={SPLASH_LOGO_SIZE}
          height={SPLASH_LOGO_SIZE}
          viewBox={`0 0 ${SPLASH_LOGO_SIZE} ${SPLASH_LOGO_SIZE}`}
        >
          <Circle
            cx={SPLASH_LOGO_SIZE / 2}
            cy={SPLASH_LOGO_SIZE / 2}
            r={SPLASH_LOGO_SIZE / 2 - SPLASH_STOKE_SIZE / 2}
            stroke={Colors.stroke}
            strokeWidth={SPLASH_STOKE_SIZE}
            fill="none"
          />
          <Circle
            cx={SPLASH_LOGO_SIZE / 2}
            cy={SPLASH_LOGO_SIZE / 2}
            r={SPLASH_LOGO_SIZE / 2 - SPLASH_STOKE_SIZE / 2}
            stroke={Colors.grey2}
            strokeWidth={SPLASH_STOKE_SIZE}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.75}
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
      <CircleLogo size={LOGO_CONTAINER_SIZE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
});
