import { ReactNode } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { SearchIcon } from "./Icons";
import { Colors } from "@/constants";

type HeaderRightButtonProps = {
  node?: ReactNode;
  hidden?: boolean;
  primary?: boolean;
  transparent?: boolean;
};

export const HeaderRightButton = ({
  node = null,
  hidden = false,
  primary = false,
  transparent = false,
}: HeaderRightButtonProps) => {
  if (hidden) return <View style={[styles.container, transparent && styles.transparent]} />;
  if (node) return node;
  return (
    <TouchableOpacity
      style={[styles.container, primary && styles.primaryBackground]}
      onPress={() => router.push("/search")}
    >
      <SearchIcon />
    </TouchableOpacity>
  );
};

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
  transparent: {
    backgroundColor: Colors.transparent,
  }
});
