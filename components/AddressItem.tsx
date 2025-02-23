import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Radio } from "./Radio";
import { LocationIcon } from "./LocationIcon";
import { Colors } from "@/constants";
import { getShadow } from "@/helpers/shadow";

type Address = {
  type: string;
  address: string;
  isDefault?: boolean;
};

type AddressItemProps = {
  address: Address;
  onSelectAddress: (address: Address) => void;
};

export const AddressItem = ({ address, onSelectAddress }: AddressItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        onSelectAddress({ type: address.type, address: address.address })
      }
    >
      <View style={styles.wrapper}>
        <LocationIcon size={30} />
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
        value=""
        onPress={() =>
          onSelectAddress({ type: address.type, address: address.address })
        }
        option={{ value: address.address }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: Colors.background,
    ...getShadow(4),
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  background: {
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightBg,
    marginRight: 12,
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold',
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
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  address: {
    fontSize: 14,
    color: Colors.grey,
  },
});
