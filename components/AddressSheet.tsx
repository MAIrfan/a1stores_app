import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

import { CloseIcon } from './Icons';
import { AddressItem } from './AddressItem';

type Address = {
  id: string;
  type: string;
  address: string;
  isDefault?: boolean;
};

type AddressSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  onClose: () => void;
  onChange: (index: number) => void;
  onSelectAddress: (address: { type: string; address: string }) => void;
};

const addresses: Address[] = [
  {
    id: '1',
    type: 'Home',
    address: 'Asif Nagar, Hyderabad',
    isDefault: true,
  },
  {
    id: '2',
    type: 'My Office',
    address: '5259 Blue Bill Park, PC 4627',
  },
  {
    id: '3',
    type: 'My Apartment',
    address: '2821 New Street',
  },
];

export function AddressSheet({ bottomSheetRef, onClose, onChange, onSelectAddress }: AddressSheetProps) {
  // Initialize snapPoints
  const snapPoints = useMemo(() => ['60%'], []);

  // Callbacks
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

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={onChange}
      onDismiss={onClose}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.sheetBg}
      enablePanDownToClose
    >
      <BottomSheetView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Address</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
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
            <AddressItem key={address.id} address={address} onSelectAddress={onSelectAddress} />
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
    backgroundColor: '#DDD',
    alignSelf: 'center',
    marginTop: 8,
  },
  sheetBg: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 32,
    height: 32,
    backgroundColor: '#f0f9f4',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  content: {
    flex: 1,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  addButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#666',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    fontSize: 14,
    color: '#666',
  },
}); 