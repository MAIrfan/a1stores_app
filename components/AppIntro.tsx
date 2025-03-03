import React, { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
  Easing,
} from "react-native-reanimated";
import {
  Colors,
  SPLASH_LOGO_SIZE,
  SPLASH_LOGO_SPACING,
  SPLASH_STOKE_SIZE,
  LOGO_CONTAINER_SIZE,
  WINDOW_HEIGHT,
} from "@/constants";
import { CircleLogo } from "./CircleLogo";

const HEIGHT = WINDOW_HEIGHT + 150;

export const AppIntro = () => {
  const circleAnimateValue = useSharedValue(0);
  const logoAnimateValue = useSharedValue(0);
  const textAnimateValue = useSharedValue(0);

  useEffect(() => {
    circleAnimateValue.value = withTiming(
      2000,
      {
        duration: 3000,
        easing: Easing.out(Easing.exp),
      },
      () => {
        logoAnimateValue.value = withTiming(
          250,
          {
            duration: 3000,
            easing: Easing.inOut(Easing.exp),
          },
          () => {
            // After the logo animation, animate the text
            textAnimateValue.value = withDelay(
              200,
              withTiming(1, { duration: 1000 })
            );
          }
        );
      }
    );
  }, []);

  const circleStyle = useAnimatedStyle(() => ({
    height: interpolate(circleAnimateValue.value, [0, 2000], [0, HEIGHT]),
    width: interpolate(circleAnimateValue.value, [0, 2000], [0, HEIGHT]),
    borderRadius: interpolate(circleAnimateValue.value, [0, 2000], [0, HEIGHT / 2]),
  }));

  const logoStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: - interpolate(logoAnimateValue.value, [0, 1], [0, 1]),
      },
    ],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: interpolate(textAnimateValue.value, [0, 1], [0, 1]),
  }));

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.circle, circleStyle]} />
      <CircleLogo size={LOGO_CONTAINER_SIZE} opacity={interpolate(circleAnimateValue.value, [0, 2000], [1, 0])}/>
      <Animated.Text style={[styles.text, textStyle]}>
        Get your groceries delivered to your home
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  circle: {
    position: "absolute",
    zIndex: 0,
    borderRadius: 100,
    backgroundColor: Colors.background,
  },
  text: {
    width: '80%',
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center"
  },
});
