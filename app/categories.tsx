import React from 'react';
import { router } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageSourcePropType, FlatList } from 'react-native';

import { Colors } from '@/constants';
import { getShadow } from '@/helpers/shadow';
import { Header } from '@/components/Header';
import { SafeAreaView } from '@/components';

interface Category {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Vegetables & Fruits',
    image: require('@/assets/categories/0.png'),
  },
  {
    id: 2,
    title: 'Dairy & Breakfast',
    image: require('@/assets/categories/1.png'),
  },
  {
    id: 3,
    title: 'Munchies',
    image: require('@/assets/categories/2.png'),
  },
  {
    id: 4,
    title: 'Cold Drinks & Juices',
    image: require('@/assets/categories/3.png'),
  },
  {
    id: 5,
    title: 'Instant & Frozen Food',
    image: require('@/assets/categories/5.png'),
  },
  {
    id: 6,
    title: 'Tea, Coffee & Health Drinks',
    image: require('@/assets/categories/6.png'),
  },
  {
    id: 7,
    title: 'Bakery & Biscuits',
    image: require('@/assets/categories/7.png'),
  },
  {
    id: 8,
    title: 'Sweet Tooth',
    image: require('@/assets/categories/8.png'),
  },
  {
    id: 9,
    title: 'Atta, Rice & Dal',
    image: require('@/assets/categories/2.png'),
  },
  {
    id: 10,
    title: 'Dry Fruits, Masala & Oil',
    image: require('@/assets/categories/3.png'),
  },
  {
    id: 11,
    title: 'Sauces & Spreads',
    image: require('@/assets/categories/4.png'),
  },
  {
    id: 12,
    title: 'Chicken, Meat & Fish',
    image: require('@/assets/categories/5.png'),
  },
  {
    id: 13,
    title: 'Paan Corner',
    image: require('@/assets/categories/6.png'),
  },
];

export default function CategoriesPage() {
  const handleCategorySelect = (category: Category) => {
    router.push(`/category?id=${category.id}`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView color="transparent" />
      <Header title="Categories" />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            onPress={() => handleCategorySelect(item)}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.categoryTitle}>{item.title}</Text>
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
    marginBottom: 8,
    backgroundColor: Colors.lightBg,
    borderRadius: 6,
    overflow: 'hidden',
    ...getShadow(4),
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