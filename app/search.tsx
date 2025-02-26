import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { SearchInput } from '@/components/SearchInput';

const recentSearches: any[] = [
  {
    id: '1',
    title: 'Beef Meat',
    mrp: 600,
    image: require('../assets/products/1.png'),
    stock: 10,
    sku: 'BM-1KG',
    discount: 0,
    unitQty: 1,
    unitType: 'kg',
  },
  {
    id: '2',
    title: 'Lamb Meat',
    mrp: 600,
    image: require('../assets/products/2.png'),
    stock: 10,
    sku: 'LM-1KG',
    discount: 0,
    unitQty: 1,
    unitType: 'kg',
  },
  {
    id: '3',
    title: 'Beef Meat',
    mrp: 600,
    image: require('../assets/products/3.png'),
    stock: 10,
    sku: 'BM-2KG',
    discount: 0,
    unitQty: 1,
    unitType: 'kg',
  },
  {
    id: '4',
    title: 'Lamb Meat',
    mrp: 600,
    image: require('../assets/products/4.png'),
    stock: 10,
    sku: 'LM-2KG',
    discount: 0,
    unitQty: 1,
    unitType: 'kg',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('Meat');

  return (
    <View style={styles.container}>
      <SearchInput 
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClose={() => router.back()}
      />

      <ScrollView style={styles.content}>
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Sort</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Promo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Self Pick-up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recent Searches</Text>

        <View style={styles.productsGrid}>
          {recentSearches.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.productCard}
              onPress={() => router.push('/product')}
            >
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>
                  1kg, Rs {item.mrp}
                </Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  filters: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#17A563',
  },
  filterButtonText: {
    color: '#17A563',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#17A563',
    fontWeight: '500',
  },
  addButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 32,
    height: 32,
    backgroundColor: '#17A563',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
  },
});
