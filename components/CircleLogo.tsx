import { Image, StyleSheet, StyleProp, ViewStyle  } from "react-native";
import Animated from "react-native-reanimated";

import { Colors } from "@/constants";

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export const CircleLogo = ({ size, style }: Props) => (
  <Animated.View style={[styles.container, style, { width: size, height: size, borderRadius: size / 2 } ]}>
    <Image
      source={require("@/assets/images/a1stores.png")}
      style={styles.image}
    />
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.background,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});