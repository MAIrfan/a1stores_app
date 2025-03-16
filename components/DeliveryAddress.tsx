import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ChevronDownIcon, LocationIcon } from "./Icons";
import { AddressSheet } from "./AddressSheet";
import { Colors } from "@/constants";
import { Address } from "@/types";

export const DeliveryAddress = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  
  const handleAddressPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <>
      <Pressable style={styles.container} onPress={handleAddressPress}>
        <View style={styles.iconWrapper}>
          <LocationIcon />
        </View>
        <View style={styles.info}>
          <Text style={styles.sentToText}>Deliver to</Text>
          <View style={styles.locationButton}>
            <Text style={styles.locationText} numberOfLines={1}>{selectedAddress?.address ?? "Select Address"}</Text>
            <ChevronDownIcon style={styles.chevronDownIcon} />
          </View>
        </View>
      </Pressable>
      
      <AddressSheet 
        bottomSheetRef={bottomSheetRef}
        selectedAddress={selectedAddress}
        onSelectAddress={(address) => setSelectedAddress(address)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: 8,
  },
  info: {
    flex: 1,
    marginRight: 4,
  },
  sentToText: {
    color: Colors.background,
    fontSize: 12,
    opacity: 0.8,
  },
  locationText: {
    color: Colors.background,
    fontSize: 14,
    fontWeight: "500",
  },
  chevronDownIcon: {
    marginTop: 2,
    color: Colors.background,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});