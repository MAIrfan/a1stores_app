import { Animated } from "react-native";
import { Colors, PRODUCT_IMAGE_HEIGHT } from "@/constants";
import { getShadow } from "@/helpers/shadow";

const SIZE = PRODUCT_IMAGE_HEIGHT * 5;

interface CircleProps {
  animatedValue: Animated.Value;
}

export const Circle = ({ animatedValue }: CircleProps) => {

  const opacity = animatedValue.interpolate({
    inputRange: [0, PRODUCT_IMAGE_HEIGHT * 1.5],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, PRODUCT_IMAGE_HEIGHT * 2.5],
    outputRange: [-(SIZE / 1.5), -(SIZE / 0.8)],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: Colors.lightBg,
          borderRadius: SIZE / 2,
          alignSelf: "center",
          height: SIZE,
          width: SIZE,
          position: "absolute",
          zIndex: 0,
          opacity,
          transform: [
            { translateY }
          ],
          ...getShadow(16)
        }
      ]}
    />
  );
};
