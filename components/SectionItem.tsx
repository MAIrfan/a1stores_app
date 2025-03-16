import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants";

type SectionItemProps = {
  label: string;
  value: string;
  valueColor?: string;
  style?: ViewStyle;
};

export const SectionItem = ({ label, value, valueColor, style }: SectionItemProps) => (
  <View style={[styles.container, style]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.dark,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.dark,
  },
});
