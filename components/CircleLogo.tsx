import { View, Image, StyleSheet  } from "react-native";

import { Colors } from "@/constants";

type Props = {
  size: number;
  opacity: number;
}

export const CircleLogo = ({ size, opacity }: Props) => (
  <View style={[styles.container, { width: size, height: size, borderRadius: size, opacity } ]}>
    <Image
      source={require("@/assets/images/a1stores.png")}
      style={styles.image}
    />
  </View>
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