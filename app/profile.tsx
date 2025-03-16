import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { CameraIcon } from '@/components/Icons';
import { Header, SafeAreaView } from '@/components';

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Profile" />

      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              placeholder="Enter your name"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              value={profile.newPassword}
              onChangeText={(text) => setProfile({ ...profile, newPassword: text })}
              placeholder="Enter your Password"
              secureTextEntry
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              value={profile.confirmPassword}
              onChangeText={(text) => setProfile({ ...profile, confirmPassword: text })}
              placeholder="Confirm your Password"
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  form: {
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
    color: '#666',
  },
  inputText: {
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
