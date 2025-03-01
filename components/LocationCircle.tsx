import { View, StyleSheet } from "react-native";

import { LocationIcon } from "@/components/Icons";
import { Colors } from "@/constants";

type LocationCircleProps = {
  size?: number;
};

export const LocationCircle = ({ size = 18 }: LocationCircleProps) => (
  <View style={styles.container}>
    <View style={[styles.icon, { width: size, height: size, borderRadius: size / 2 }]}>
      <LocationIcon size={size / 1.5} />
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
