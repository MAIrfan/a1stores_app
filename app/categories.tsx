import React from 'react';
import { router } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { Colors } from '@/constants';
import { getShadow } from '@/helpers/shadow';
import { Header, SafeAreaView } from '@/components';
import { Category } from '@/types';

import data from "@/data.json";

export default function CategoriesPage() {
  const handleCategorySelect = (category: Category) => {
    router.push(`/category?id=${category.id}`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Categories" />
      <FlatList
        data={data.categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            onPress={() => handleCategorySelect(item)}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <Text style={styles.categoryTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.gridContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
    paddingTop: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: "46%",
    margin: '2%',
    backgroundColor: Colors.background,
    borderRadius: 8,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 130,
    padding: 16,
    marginBottom: 10,
    backgroundColor: Colors.lightBg,
    borderRadius: 10,
    overflow: 'hidden',
    ...getShadow(16),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  categoryTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.dark,
    fontWeight: '600',
  },
}); 