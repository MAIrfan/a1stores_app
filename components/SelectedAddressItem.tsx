import { View, Text, StyleSheet } from "react-native";

import { LocationCircle } from "./LocationCircle";
import { Colors } from "@/constants";
import { Address } from "@/types";

type SelectedAddressItemProps = {
  selectedAddress: Address;
};

export const SelectedAddressItem = ({
  selectedAddress,
}: SelectedAddressItemProps) => (
  <View style={styles.container}>
    <LocationCircle size={24} />
    <View style={styles.wrapper}>
      <Text style={styles.type}>{selectedAddress.type}</Text>
      <Text style={styles.address}>{selectedAddress.address}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
  address: {
    fontSize: 14,
    color: Colors.grey,
    textAlign: "right",
  },
});
