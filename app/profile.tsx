import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { CameraIcon } from '@/components/Icons';

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    address: 'Asif Nagar, Hyderabad',
    dob: '23/05/1995',
    gender: 'Male',
    newPassword: '',
    confirmPassword: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('../assets/images/react-logo.png')} 
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <CameraIcon />
          </TouchableOpacity>
        </View>

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
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              value={profile.address}
              onChangeText={(text) => setProfile({ ...profile, address: text })}
              placeholder="Enter your address"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity style={styles.input}>
              <Text style={styles.inputText}>{profile.dob}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Gender</Text>
            <TouchableOpacity style={styles.input}>
              <Text style={styles.inputText}>{profile.gender}</Text>
            </TouchableOpacity>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f9f4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    right: '35%',
    bottom: 0,
    backgroundColor: '#17A563',
    padding: 8,
    borderRadius: 16,
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
