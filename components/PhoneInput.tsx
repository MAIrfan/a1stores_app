import { Colors } from '@/constants';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to format the phone number
  const formatPhoneNumber = (text: string) => {
    // Remove non-numeric characters
    let cleaned = text.replace(/\D/g, '');
    
    // Apply formatting (000 000 0000)
    let formatted = '';
    if (cleaned.length <= 3) {
      formatted = cleaned;
    } else if (cleaned.length <= 6) {
      formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    } else {
      formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
    }
    
    setPhoneNumber(formatted);
  };

  return (
    <View style={styles.field}>
      <Text style={styles.phoneCode}>+91</Text>
      <TextInput
        style={styles.phone}
        placeholder="000 000 0000"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={formatPhoneNumber}
        maxLength={12} // Includes spaces
        placeholderTextColor={Colors.grey2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 10,
  },
  phoneCode: {
    fontSize: 40,
    fontWeight: "500",
    color: Colors.dark,
  },
  phone: {
    flex: 1,
    fontSize: 40,
    fontWeight: "500",
    color: Colors.dark,
  }
});
