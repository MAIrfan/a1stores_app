import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";

import {
  AddressItem,
  CustomButton,
  EditButton,
  Header,
  SafeAreaView,
} from "@/components";
import { Colors } from "@/constants";
import { Address } from "@/types";

import data from "@/data.json";

const addresses: Address[] = data.addresses;

export default function AddressesScreen() {
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const onSelectAddress = (address: any) => {
    setSelectedAddress(address);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        title="Addresses"
        rightNode={
          <EditButton
            onPress={() =>
              selectedAddress &&
              router.push(`/address?id=${selectedAddress.id}`)
            }
          />
        }
      />

      <FlatList
        data={addresses}
        renderItem={({ item }) => (
          <AddressItem
            address={item}
            selectedAddress={selectedAddress}
            onSelectAddress={onSelectAddress}
          />
        )}
        contentContainerStyle={styles.content}
        keyExtractor={(item) => item.id.toString()}
      />

      <CustomButton
        variant="secondary"
        text="Add New Address"
        size="large"
        onPress={() => router.push(`/address`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
