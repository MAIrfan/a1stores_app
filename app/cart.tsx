import React, { useRef, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';

import { CartIcon } from '@/components/Icons';
import { AddressSheet } from '@/components/AddressSheet';
import { Header } from '@/components';
import { Colors } from '@/constants';
import { CartItem } from '@/components/CartItem';
import { CustomButton } from '@/components/CustomButton';
import { CartEmpty } from '@/components/CartEmpty';
import { Radios } from '@/components/Radios';
import { PayButton } from '@/components/PayButton';
import { SelectedAddressItem } from '@/components/SelectedAddressItem';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: any;
  weight: string;
};

type DeliveryType = 'home' | 'pickup';

type SelectedAddress = {
  type: string;
  address: string;
} | null;

export default function CartScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('home');
  const [selectedAddress, setSelectedAddress] = useState<SelectedAddress>(null);
  const cartItems: CartItem[] = [
    {
      id: '1',
      title: 'Bell Pepper Red',
      price: 500,
      quantity: 2,
      image: require('../assets/products/1.png'),
      weight: '1kg',
    },
    {
      id: '2',
      title: 'Butternut Squash',
      price: 128,
      quantity: 4,
      image: require('../assets/products/2.png'),
      weight: '1kg',
    },
    {
      id: '3',
      title: 'Arabic Ginger',
      price: 139,
      quantity: 6,
      image: require('../assets/products/3.png'),
      weight: '1kg',
    },
  ];

  const isEmpty = cartItems.length === 0;
  const bagTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCharges = 50;
  const packagingFee = 50;
  const total = bagTotal + shippingCharges;
  const savings = 166;

  const handleAddressPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleSheetClose = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderCheckoutButton = () => {
    if (isEmpty) return <CustomButton onPress={() => router.push("/")} text="Start Shopping" />;
    if (deliveryType === "home" && !selectedAddress) return <CustomButton onPress={handleAddressPress} text="Select Address to Checkout" icon={<CartIcon />} />;
    if (deliveryType === "home" && selectedAddress) return <PayButton amount={total} onPress={() => router.push("/")} />;
    return <PayButton amount={total} onPress={() => router.push("/")} />;
  };

  return (
    <View style={styles.container}>
      <Header title="Cart" />
      {isEmpty ? (
        <CartEmpty />
      ) : (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              setQuantity={() => {}}
            />
          ))}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Details</Text>

            <View style={styles.sectionInfo}>
              <View style={styles.sectionRow}>
                <Text style={styles.sectionRowLabel}>Bag Total</Text>
                <Text style={styles.sectionRowValue}>₹{bagTotal}</Text>
              </View>

              <View style={styles.sectionRow}>
                <Text style={styles.sectionRowLabel}>Packaging</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.strikethrough}>₹{packagingFee}</Text>
                  <Text style={styles.freeText}>Free</Text>
                </View>
              </View>

              <View style={styles.sectionRow}>
                <View>
                  <Text style={styles.sectionRowLabel}>Shipping Charges</Text>
                  <Text style={styles.shippingNote}>
                    Includes long distance fee of for 16km
                  </Text>
                </View>
                <Text style={styles.sectionRowValue}>₹{shippingCharges}</Text>
              </View>
            </View>
          </View>

          <View style={[styles.sectionRow, { marginTop: 16 }]}>
            <Text
              style={[
                styles.sectionRowLabel,
                { fontSize: 18, fontWeight: "bold" },
              ]}
            >
              Total
            </Text>
            <Text
              style={[
                styles.sectionRowValue,
                { fontSize: 18, fontWeight: "bold" },
              ]}
            >
              ₹{total.toFixed(2)}
            </Text>
          </View>
          <View style={[styles.sectionInfo, { padding: 10, marginTop: 16 }]}>
            <Text
              style={[
                styles.sectionRowLabel,
                { fontSize: 12, textAlign: "center", color: Colors.primary },
              ]}
            >
              You're saving ₹{savings} on this order!
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Delivery Type</Text>

            <Radios
              options={[
                { label: "Home Delivery", value: "home" },
                { label: "Pickup Delivery", value: "pickup" },
              ]}
              value={deliveryType}
              onChange={(value) => setDeliveryType(value as DeliveryType)}
            />
          </View>

          {selectedAddress && (
            <View style={styles.section}>
              <View style={styles.addressHeader}>
                <Text style={styles.sectionTitle}>Delivery Address</Text>
                <TouchableOpacity
                  style={styles.changeButton}
                  onPress={handleAddressPress}
                >
                  <Text style={styles.changeButtonText}>Change</Text>
                </TouchableOpacity>
              </View>
              <SelectedAddressItem selectedAddress={selectedAddress} />
            </View>
          )}
        </ScrollView>
      )}

      {renderCheckoutButton()}

      <AddressSheet 
        bottomSheetRef={bottomSheetRef}
        onClose={handleSheetClose}
        onChange={handleSheetChanges}
        onSelectAddress={(address) => {
          setSelectedAddress(address);
          handleSheetClose();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
    marginBottom: 16,
  },
  sectionInfo: {
    backgroundColor: Colors.lightBg2,
    padding: 16,
    borderRadius: 8
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  sectionRowLabel: {
    fontSize: 16,
    color: Colors.dark,
  },
  sectionRowValue: {
    fontSize: 16,
    color: Colors.dark,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  strikethrough: {
    fontSize: 12,
    color: Colors.grey,
    textDecorationLine: 'line-through',
  },
  freeText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
  shippingNote: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: 4,
  },

  
  
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  changeButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  changeButtonText: {
    fontSize: 14,
    color: Colors.grey,
  },
});
