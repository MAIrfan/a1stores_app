import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Checkbox } from 'expo-checkbox';
// import { Platform } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
import { Address } from '@/types';

import data from "@/data.json";
import { Colors } from '@/constants';
import { Header } from '@/components';

type Coordinates = {
  latitude: number;
  longitude: number;
};

export default function NewAddressScreen() {
  const { id } = useLocalSearchParams();
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: 17.3850,  // Hyderabad coordinates
    longitude: 78.4867,
  });

  const [form, setForm] = useState({
    address: '',
    city: '',
    name: '',
    recipientName: '',
    phone: '',
    isDefault: false,
  });

  useEffect(() => {
    if (id) {
      const selectedAddress = data.addresses.find((address: Address) => address.id === id);
      setForm({
        address: selectedAddress?.address ?? '',
        city: selectedAddress?.address ?? '',
        name: selectedAddress?.address ?? '',
        recipientName: selectedAddress?.address ?? '',
        phone: selectedAddress?.address ?? '',
        isDefault: selectedAddress?.isDefault ?? false,
      });
    }
  }, []);

//   const MapComponent = Platform.select({
//     ios: () => (
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: coordinates.latitude,
//           longitude: coordinates.longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         }}
//         onRegionChangeComplete={(region) => {
//           setCoordinates({
//             latitude: region.latitude,
//             longitude: region.longitude,
//           });
//         }}
//       >
//         <Marker
//           coordinate={coordinates}
//           draggable
//           onDragEnd={(e) => setCoordinates(e.nativeEvent.coordinate)}
//         />
//       </MapView>
//     ),
//     android: () => (
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: coordinates.latitude,
//           longitude: coordinates.longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         }}
//         onRegionChangeComplete={(region) => {
//           setCoordinates({
//             latitude: region.latitude,
//             longitude: region.longitude,
//           });
//         }}
//       >
//         <Marker
//           coordinate={coordinates}
//           draggable
//           onDragEnd={(e) => setCoordinates(e.nativeEvent.coordinate)}
//         />
//       </MapView>
//     ),
//     default: () => <Text>Maps are not supported on this platform</Text>,
//   });

  return (
    <View style={styles.container}>
      <Header
        transparent
        title={`${id ? 'Edit' : 'New'} Address`}
      />

      <View style={styles.mapContainer}>
        {/* <MapComponent /> */}
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={form.address}
            onChangeText={(text) => setForm({ ...form, address: text })}
            placeholder="Enter your Address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            value={form.city}
            onChangeText={(text) => setForm({ ...form, city: text })}
            placeholder="Enter your City"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Save as Name</Text>
          <TextInput
            style={styles.input}
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
            placeholder="Save Address Name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Recipient's Name</Text>
          <TextInput
            style={styles.input}
            value={form.recipientName}
            onChangeText={(text) => setForm({ ...form, recipientName: text })}
            placeholder="Enter your Name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Recipient's Phone Number</Text>
          <TextInput
            style={styles.input}
            value={form.phone}
            onChangeText={(text) => setForm({ ...form, phone: text })}
            placeholder="Enter your 10-digit Phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={form.isDefault}
            onValueChange={(value) => setForm({ ...form, isDefault: value })}
            color={form.isDefault ? Colors.primary : undefined}
          />
          <Text style={styles.checkboxLabel}>Save as Default Address</Text>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.saveButton}
        onPress={() => {
          console.log('Save address', {
            ...form,
            coordinates,
          });
        }}
      >
        <Text style={styles.saveButtonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  form: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  field: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#17A563',
    margin: 16,
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
