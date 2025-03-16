import { View, Text, StyleSheet, TouchableOpacity, LayoutChangeEvent } from "react-native";
import { router } from "expo-router";

import { Colors, HEADER_HEIGHT } from "@/constants";
import { DeliveryAddress } from "./DeliveryAddress";
import { CartIcon, UserCircleIcon } from "./Icons";

type Props = {
  getHeaderHeight?: (event: LayoutChangeEvent) => void;
};

export const HomeHeader = ({ getHeaderHeight }: Props) => {
  return (
    <View style={styles.container} onLayout={getHeaderHeight}>
      <DeliveryAddress />

      <View style={styles.iconsContainer} pointerEvents="auto">
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/cart")}>
          <CartIcon />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>12</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/account")}>
          <UserCircleIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    padding: 16,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 16,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: Colors.tertiary,
    borderRadius: 10,
    minWidth: 20,
    minHeight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "bold",
  },
});
