import { View, Text, StyleSheet } from "react-native";

import { Colors } from "@/constants";

export const OTP = ({ otp } : { otp: number }) => (
  <View style={styles.container}>
    <Text style={styles.text}>OTP - </Text>
    <Text style={styles.otp}>{otp}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.dark,
  },
  otp: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary,
  },
});