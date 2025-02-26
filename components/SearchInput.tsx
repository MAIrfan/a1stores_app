import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CloseIcon, SearchIcon } from './Icons';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClose: () => void;
};

export function SearchInput({ value, onChangeText, onClose }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder="Search products"
          placeholderTextColor="#666"
          autoFocus
        />
        {value.length > 0 && (
          <TouchableOpacity 
            onPress={() => onChangeText('')}
            style={styles.clearButton}
          >
            <CloseIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9f4',
    borderRadius: 100,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },
  clearButton: {
    padding: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f9f4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 