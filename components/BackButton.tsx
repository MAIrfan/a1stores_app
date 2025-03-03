import { StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { BackIcon } from "./Icons";
import { Colors } from "@/constants";

type BackButtonProps = {
  primary?: boolean;
};

export const BackButton = ({ primary }: BackButtonProps) => (
  <TouchableOpacity
    style={[styles.container, primary && styles.primaryBackground]}
    onPress={() => router.back()}
  >
    <BackIcon />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  primaryBackground: {
    backgroundColor: Colors.primaryLight,
  },
});
