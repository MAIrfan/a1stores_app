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
import { Colors } from "@/constants";
import { router } from "expo-router";

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
  const handleAddressPress = useCallback(() => {
    handleSheetClose();
    router.push("/address");
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onDismiss={handleSheetClose}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.sheetBg}
      enablePanDownToClose
      handleComponent={() => (
        <TouchableOpacity onPress={handleSheetClose} style={styles.closeButton}>
          <CloseIcon />
        </TouchableOpacity>
      )}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Select Address</Text>

        <View>
          <View style={styles.addressHeader}>
            <Text style={styles.addressTitle}>Select Delivery Address</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddressPress}
            >
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
  sheetBg: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.background,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  closeButton: {
    position: "absolute",
    top: -20,
    left: "47%",
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#f0f9f4",
    alignItems: "center",
    justifyContent: "center",
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
