import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { Colors } from "@/constants";

export const Divider = ({ style }: { style?: StyleProp<ViewStyle> }) => (
  <View style={[styles.divider, style]} />
);

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.lightGrey2,
  },
});
