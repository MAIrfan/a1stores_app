import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Colors } from '@/constants';

export const PasswordInput: React.FC<{ placeholder: string; value: string; onChange: (text: string) => void; }> = ({ placeholder, value, onChange }) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureText}
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={() => setSecureText(!secureText)}>
        <MaterialIcons name={secureText ? 'visibility' : 'visibility-off'} size={20} color={Colors.grey2} />
      </TouchableOpacity>
    </View>
  );
};

export const PasswordConfirm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    setError(text !== password ? 'Passwords do not match' : '');
  };

  return (
    <View style={styles.container}>
      <PasswordInput placeholder="Enter password" value={password} onChange={setPassword} />
      <PasswordInput placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPassword} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '84%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 2,
    paddingLeft: 4,
    paddingRight: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
