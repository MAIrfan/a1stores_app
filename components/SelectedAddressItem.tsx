import { View, Text, StyleSheet } from "react-native";

import { LocationIcon } from "./LocationCircle";
import { Colors } from "@/constants";

type SelectedAddressItemProps = {
  selectedAddress: {
    type: string;
    address: string;
  };
};

export const SelectedAddressItem = ({
  selectedAddress,
}: SelectedAddressItemProps) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <LocationIcon size={24} />
      <View style={styles.addressContainer}>
        <Text style={styles.addressType}>{selectedAddress.type}</Text>
        <Text style={styles.addressText}>{selectedAddress.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressType: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
  addressText: {
    fontSize: 14,
    color: Colors.grey,
    textAlign: "right",
  },
});
