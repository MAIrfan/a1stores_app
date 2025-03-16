import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
  Easing,
} from "react-native-reanimated";

import { CircleLogo } from "./CircleLogo";
import {
  Colors,
  LOGO_CONTAINER_SIZE,
  SPLASH_SCREEN_DURATION,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "@/constants";

const HEIGHT = WINDOW_HEIGHT + 150;
const CIRCLE_TIME = 1500;

export const AppIntro = () => {
  const circle = useSharedValue(0);
  const logo = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    circle.value = withTiming(
      CIRCLE_TIME,
      {
        duration: SPLASH_SCREEN_DURATION * 0.37,
        easing: Easing.out(Easing.exp),
      },
      () => {
        logo.value = withTiming(
          250,
          {
            duration: SPLASH_SCREEN_DURATION * 0.5,
            easing: Easing.out(Easing.exp),
          },
          () => {
            opacity.value = withDelay(
              100,
              withTiming(1, { duration: SPLASH_SCREEN_DURATION * 0.13 })
            );
          }
        );
      }
    );
  }, []);

  const circleStyle = useAnimatedStyle(() => ({
    height: interpolate(circle.value, [0, CIRCLE_TIME], [0, HEIGHT]),
    width: interpolate(circle.value, [0, CIRCLE_TIME], [0, HEIGHT]),
    borderRadius: interpolate(circle.value, [0, CIRCLE_TIME], [0, HEIGHT / 2]),
  }));

  const logoStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: -interpolate(logo.value, [0, 1], [0, 1]),
      },
    ],
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: interpolate(opacity.value, [0, 1], [0, 1]),
  }));

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.circle, circleStyle]} />
      <CircleLogo size={LOGO_CONTAINER_SIZE} style={logoStyle} />
      <Animated.Text style={[styles.title, opacityStyle]}>
        Get your groceries delivered to your home
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, opacityStyle]}>
        The best delivery app in town for delivering your daily fresh groceries
      </Animated.Text>
      <Animated.Image
        source={require("@/assets/images/grocery-intro.png")}
        style={[styles.image, opacityStyle]}
      />
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
  title: {
    width: "80%",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    width: "80%",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    color: Colors.grey,
    marginBottom: 200,
  },
  image: {
    position: "absolute",
    bottom: -20,
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH,
    resizeMode: "contain",
  },
});
