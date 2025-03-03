import React, { useCallback, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import { CloseIcon } from "./Icons";
import { Address } from "@/types";
import { AddressItem } from "./AddressItem";

import data from "@/data.json";

type AddressSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  selectedAddress: Address | null;
  onSelectAddress: (address: Address) => void;
};

const addresses: Address[] = data.addresses;

export function AddressSheet({
  bottomSheetRef,
  selectedAddress,
  onSelectAddress,
}: AddressSheetProps) {
  // Initialize snapPoints
  const snapPoints = useMemo(() => ["60%"], []);

  // Callbacks
  const handleSheetClose = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  const handleSelect = useCallback((address: Address) => {
    onSelectAddress(address);
    handleSheetClose();
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onDismiss={handleSheetClose}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.sheetBg}
      enablePanDownToClose
    >
      <BottomSheetView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Address</Text>
          <TouchableOpacity
            onPress={handleSheetClose}
            style={styles.closeButton}
          >
            <CloseIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.addressHeader}>
            <Text style={styles.addressTitle}>Select Delivery Address</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          {addresses.map((address) => (
            <AddressItem
              key={address.id}
              address={address}
              selectedAddress={selectedAddress}
              onSelectAddress={handleSelect}
            />
          ))}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: 36,
    height: 4,
    backgroundColor: "#DDD",
    alignSelf: "center",
    marginTop: 8,
  },
  sheetBg: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 32,
    height: 32,
    backgroundColor: "#f0f9f4",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  content: {
    flex: 1,
  },
  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  addButton: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#666",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    fontSize: 14,
    color: "#666",
  },
});
