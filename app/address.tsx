import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { Checkbox } from "expo-checkbox";
import { Address } from "@/types";

import data from "@/data.json";
import { Colors, STATUS_BAR_HEIGHT, WINDOW_HEIGHT } from "@/constants";
import { CustomButton, Header, SafeAreaView } from "@/components";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

type Coordinates = {
  latitude: number;
  longitude: number;
};

const MAX_HEIGHT = WINDOW_HEIGHT - STATUS_BAR_HEIGHT - 80;

export default function NewAddressScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [100, 400, MAX_HEIGHT], []);
  const { id } = useLocalSearchParams();
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: 17.385, // Hyderabad coordinates
    longitude: 78.4867,
  });

  const [form, setForm] = useState({
    address: "",
    city: "",
    name: "",
    recipientName: "",
    phone: "",
    isDefault: false,
  });

  useEffect(() => {
    if (id) {
      const selectedAddress = data.addresses.find(
        (address: Address) => address.id === id
      );
      setForm({
        address: selectedAddress?.address ?? "",
        city: selectedAddress?.address ?? "",
        name: selectedAddress?.address ?? "",
        recipientName: selectedAddress?.address ?? "",
        phone: selectedAddress?.address ?? "",
        isDefault: selectedAddress?.isDefault ?? false,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView />
        <Header transparent />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={coordinates}
          // image={{ uri: 'custom_pin' }}
          onDragEnd={(e) => setCoordinates({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })}
        />
      </MapView>
      <BottomSheet
        index={1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false} // Prevent swipe down to close
        handleIndicatorStyle={{ backgroundColor: Colors.grey2 }}
        backgroundStyle={{ backgroundColor: Colors.background }} // Ensure visibility
      >
        <BottomSheetView style={{ flex: 1, padding: 16 }}>
          <View style={styles.field}>
            <Text style={styles.label}>Door No.</Text>
            <TextInput
              style={styles.input}
              value={form.address}
              onChangeText={(text) => setForm({ ...form, address: text })}
              placeholder="Enter your Address"
              placeholderTextColor={Colors.grey2}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              value={form.city}
              onChangeText={(text) => setForm({ ...form, city: text })}
              placeholder="Enter your City"
              placeholderTextColor={Colors.grey2}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Save as Name</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
              placeholder="Save Address Name"
              placeholderTextColor={Colors.grey2}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Recipient's Name</Text>
            <TextInput
              style={styles.input}
              value={form.recipientName}
              onChangeText={(text) => setForm({ ...form, recipientName: text })}
              placeholder="Enter your Name"
              placeholderTextColor={Colors.grey2}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Recipient's Phone Number</Text>
            <TextInput
              style={styles.input}
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              placeholder="Enter your 10-digit Phone number"
              placeholderTextColor={Colors.grey2}
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

          <CustomButton
            text="Save Address"
            onPress={() =>
              console.log("Save address", {
                ...form,
                coordinates,
              })
            }
            style={styles.saveButton}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 16,
  },
  map: {
    width: "100%",
    height: "90%",
  },
  form: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  field: {
    gap: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.dark,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: Colors.dark,
  },
  saveButton: {
    marginTop: 24
  },
});
