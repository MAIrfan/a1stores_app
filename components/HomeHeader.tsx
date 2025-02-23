import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { Colors, HEADER_HEIGHT } from "@/constants";
import { LocationIcon, ChevronDownIcon, CartIcon, UserCircleIcon } from "./Icons";

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <View style={{ marginRight: 8 }}>
          <LocationIcon />
        </View>
        <View>
          <Text style={styles.sentToText}>Deliver to</Text>
          <TouchableOpacity style={styles.locationButton}>
            <Text style={styles.locationText}>Asif Nagar, Hyderabad</Text>
            <ChevronDownIcon style={styles.chevronDownIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/cart")}>
          <CartIcon />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>12</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/")}>
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
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  sentToText: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.8,
  },
  locationText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  chevronDownIcon: {
    marginLeft: 6,
    marginTop: 2,
    color: "#fff",
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
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
