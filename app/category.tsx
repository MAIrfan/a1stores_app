import { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { ProductCard } from '@/components/ProductCard';
import { Colors, PRODUCT_CARD_SPACING, PRODUCT_CARD_WIDTH } from '@/constants';
import { Header } from '@/components/Header';
import { SafeAreaView } from '@/components';

type CategoryItem = {
  id: string;
  name: string;
  image: any;
};

const categories: CategoryItem[] = [
  {
    id: '1',
    name: 'Rice',
    image: require('../assets/categories/0.png'),
  },
  {
    id: '2',
    name: 'Fresh Fruits',
    image: require('../assets/categories/1.png'),
  },
  {
    id: '3',
    name: 'Meat & Eggs',
    image: require('../assets/categories/2.png'),
  },
  {
    id: '4',
    name: 'Drinks',
    image: require('../assets/categories/3.png'),
  },
  {
    id: '5',
    name: 'Bakery',
    image: require('../assets/categories/4.png'),
  },
  {
    id: '6',
    name: 'Sea Food',
    image: require('../assets/categories/5.png'),
  },
  {
    id: '7',
    name: 'Dairy',
    image: require('../assets/categories/6.png'),
  },
  {
    id: '8',
    name: 'Biscuits',
    image: require('../assets/categories/7.png'),
  },
  {
    id: '9',
    name: 'Sauces',
    image: require('../assets/categories/8.png'),
  },
];

const products: any[] = [
  {
    id: '1',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 1360,
    stock: 100,
    sku: '1',
    image: require('../assets/products/1.png'),
    category_id: '1',
    discount: 0,
    unitQty: 10,
    unitType: 'kg'
  },
  {
    id: '2',
    title: 'A-1 Raiwind HMT Basmati Rice',
    mrp: 700,
    stock: 100,
    sku: '2',
    image: require('../assets/products/2.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '3',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '3',
    image: require('../assets/products/3.png'),
    category_id: '1',
    discount: 20,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '4',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '4',
    image: require('../assets/products/4.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '5',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '5',
    image: require('../assets/products/5.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '6',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '6',
    image: require('../assets/products/6.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '7',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '7',
    image: require('../assets/products/7.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '8',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '8',
    image: require('../assets/products/8.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '9',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '9',
    image: require('../assets/products/9.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '10',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '10',
    image: require('../assets/products/10.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '11',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '11',
    image: require('../assets/products/11.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '12',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '12',
    image: require('../assets/products/12.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '13',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 1360,
    stock: 100,
    sku: '13',
    image: require('../assets/products/13.png'),
    category_id: '2',
    discount: 0,
    unitQty: 10,
    unitType: 'kg'
  },
  {
    id: '14',
    title: 'A-1 Raiwind HMT Basmati Rice',
    mrp: 700,
    stock: 100,
    sku: '14',
    image: require('../assets/products/14.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '15',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '15',
    image: require('../assets/products/15.png'),
    category_id: '2',
    discount: 20,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '16',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '16',
    image: require('../assets/products/16.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '17',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '17',
    image: require('../assets/products/17.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '18',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '18',
    image: require('../assets/products/18.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '19',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '19',
    image: require('../assets/products/19.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '20',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '20',
    image: require('../assets/products/20.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '21',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '21',
    image: require('../assets/products/21.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '22',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '22',
    image: require('../assets/products/22.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '23',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '23',
    image: require('../assets/products/23.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '24',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '24',
    image: require('../assets/products/24.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
];

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('1');

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Categories" style={{ paddingHorizontal: 16 }} />
      <View style={{ flexDirection: 'row' }}>
        {/* Categories List with its own scroll */}
        <ScrollView 
          style={styles.categoriesList}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryItem,
                selectedCategory === category.id && styles.categoryItemSelected
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Image source={category.image} style={styles.categoryImage} />
              <Text 
                style={[
                  styles.categoryName,
                  selectedCategory === category.id && styles.categoryNameSelected
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products Grid with its own scroll */}
        <ScrollView 
          style={styles.productsList}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.productsGrid}>
            {products
              .filter((product) => product.category_id === selectedCategory)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  item={{
                    ...product,
                    title: product.title,
                    mrp: product.mrp,
                    stock: product.stock,
                    sku: product.sku,
                    image: product.image,
                    discount: product.discount,
                    unitQty: product.unitQty,
                    unitType: product.unitType
                  }} 
                  index={Number(product.id)}
                  style={{
                    width: PRODUCT_CARD_WIDTH * 0.84,
                    margin: (PRODUCT_CARD_SPACING / 2) - 4
                  }}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  categoriesList: {
    backgroundColor: '#f5f5f5',
  },
  categoryItem: {
    alignItems: 'center',
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryItemSelected: {
    backgroundColor: '#fff',
    borderLeftWidth: 3,
    borderLeftColor: '#4caf50',
  },
  categoryImage: {
    width: 32,
    height: 32,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 11,
    textAlign: 'center',
    color: '#333',
  },
  categoryNameSelected: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  productsList: {
    backgroundColor: '#fff',
    width: '86%',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});