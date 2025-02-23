import { View, StyleSheet } from "react-native";

import { LocationIcon as LocationIconSvg } from "@/components/Icons";
import { Colors } from "@/constants";

type LocationIconProps = {
  size?: number;
};

export const LocationIcon = ({ size = 18 }: LocationIconProps) => (
  <View style={styles.container}>
    <View style={[styles.icon, { width: size, height: size, borderRadius: size / 2 }]}>
      <LocationIconSvg size={size / 1.5} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightBg,
    marginRight: 12,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
});
