import { View, Text, StyleSheet } from "react-native";

import { Radio } from "./Radio";
import { LocationCircle } from "./LocationCircle";
import { Colors } from "@/constants";
import { getShadow } from "@/helpers/shadow";
import { Address } from "@/types";

type AddressItemProps = {
  address: Address;
  selectedAddress: Address | null;
  onSelectAddress: (address: Address) => void;
};

export const AddressItem = ({
  address,
  selectedAddress,
  onSelectAddress,
}: AddressItemProps) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <LocationCircle size={30} />
      <View style={styles.flex}>
        <View style={styles.header}>
          <Text style={styles.type}>{address.type}</Text>
          {address.isDefault && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Default</Text>
            </View>
          )}
        </View>
        <Text style={styles.address}>{address.address}</Text>
      </View>
    </View>
    <Radio
      value={selectedAddress?.id ?? ""}
      option={{ value: address.id }}
      onPress={() => onSelectAddress(address)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: Colors.background,
    ...getShadow(40),
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  background: {
    padding: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightBg,
    marginRight: 12,
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginLeft: 8,
  },
  badgeText: {
    color: Colors.background,
    fontSize: 10,
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  address: {
    fontSize: 14,
    color: Colors.grey,
  },
});
