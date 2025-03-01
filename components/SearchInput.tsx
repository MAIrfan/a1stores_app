import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CloseIcon, SearchIcon, BackIcon } from './Icons';
import { SafeAreaView } from './SafeAreaView';
import { Colors } from '@/constants';
type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClose: () => void;
};

export function SearchInput({ value, onChangeText, onClose }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity style={styles.backButton} onPress={onClose}>
        <BackIcon />
      </TouchableOpacity>
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
    padding: 8,
    backgroundColor: Colors.background,
  },
  backButton: {
    width: 44,
    height: 44,
    backgroundColor: Colors.primaryLight2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryLight2,
    borderRadius: 100,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginLeft: 16,
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
  },
}); 