import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import { router } from "expo-router";

import { BackIcon, SearchIcon } from "./Icons";
import { Colors } from "@/constants";

type HeaderProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
  type?: "invert" | "default";
  hideSearch?: boolean;
  backButtonStyles?: StyleProp<ViewStyle>;
};

export const Header = ({ title, style, backButtonStyles, type = "default", hideSearch = false }: HeaderProps) => (
  <View
    style={[
      styles.container,
      { backgroundColor: type === "invert" ? Colors.transparent : Colors.background },
      style,
    ]}
  >
    <TouchableOpacity
      style={[styles.leftIconContainer, { backgroundColor: type === "invert" ? Colors.background : Colors.primaryLight }, backButtonStyles]}
      onPress={() => router.back()}
    >
      <BackIcon />
    </TouchableOpacity>
    <Text style={styles.title}>{title || ""}</Text>
    {!hideSearch && (
      <View
        style={[
          styles.rightIconContainer,
          {
            backgroundColor:
              type === "invert" ? Colors.background : Colors.transparent,
          },
        ]}
      >
        {type === "invert" && (
          <TouchableOpacity>
            <SearchIcon />
          </TouchableOpacity>
        )}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
  },
  leftIconContainer: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightIconContainer: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
