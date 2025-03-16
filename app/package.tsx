import React, { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';

import { Colors, PRODUCT_IMAGE_HEIGHT } from '@/constants';
import { CustomButton, ProductCard, SafeAreaView, Counter, Header, Circle } from '@/components';

import data from "@/data.json";

const similarProducts: any[] = [
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

export default function PackageScreen() {
  const scrollY = new Animated.Value(0);
  const mainImageOpacity = new Animated.Value(1);
  const mainImageScale = new Animated.Value(1);
  const [quantity, setQuantity] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState('01');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const opacity = scrollY.interpolate({
    inputRange: [0, PRODUCT_IMAGE_HEIGHT * 0.8],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const animateImageChange = (newIndex: number) => {
    // Fade out and scale down current image
    Animated.parallel([
      Animated.timing(mainImageOpacity, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(mainImageScale, {
        toValue: 0.95,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSelectedImageIndex(newIndex);
      // Fade in and scale up new image
      Animated.parallel([
        Animated.timing(mainImageOpacity, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(mainImageScale, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const product: any = {
    id: '1',
    title: 'Ramadan Special Package',
    mrp: 300,
    stock: 100,
    sku: 'LM-1KG',
    image: require('@/assets/products/1.png'),
    discount: 0,
    unitQty: 1,
    unitType: 'kg',
    description: 'Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.',
    organic: true,
    expiration: '1 Year',
    reviews: {
      rating: 4.8,
      count: 256,
    },
    calories: {
      amount: 80,
      per: '100 Gram',
    },
    images: [
      require('@/assets/products/1.png'),
      require('@/assets/products/2.png'),
      require('@/assets/products/3.png'),
      require('@/assets/products/4.png'),
    ],
    units: [
      { id: '01', value: '01', type: 'KG' },
      { id: '02', value: '02', type: 'KG' },
      { id: '03', value: '03', type: 'KG' },
    ],
  };

  return (
    <View style={styles.container}>
      <Circle animatedValue={scrollY} />
      <SafeAreaView />
      <Header transparent style={{ paddingHorizontal: 16 }} />
      <Animated.ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <Animated.View style={[styles.imageContainer, { opacity }]}>
          <Animated.Image
            source={product.images[selectedImageIndex]}
            style={[
              styles.image,
              {
                opacity: mainImageOpacity,
                transform: [{ scale: mainImageScale }],
              },
            ]}
          />
          <View style={styles.imageOverlay}>
            {product.images.map((image: number, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => animateImageChange(index)}
                style={[
                  styles.imageOverlayItem,
                  selectedImageIndex === index && styles.imageOverlayItemSelected,
                ]}
              >
                <Image source={image} style={styles.imageOverlayItemImage} />
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <View style={styles.header}>
          <Text style={styles.title}>{product.title}</Text>
          <Counter quantity={quantity} setQuantity={setQuantity} />
        </View>

        <View style={styles.priceContainer}>
          <Text
            style={styles.price}
          >{`${product.unitQty} ${product.unitType}, Rs ${product.mrp}`}</Text>
          <Text
            style={styles.originalPrice}
          >{`${product.unitQty} ${product.unitType}, Rs ${product.mrp}`}</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.sectionTitle}>Package Items</Text>
        <View
          style={styles.products}
        >
          {data.variants.map((product, index) => (
            <ProductCard key={product.id} index={index} item={product} />
          ))}
        </View>
      </Animated.ScrollView>

      <CustomButton text='Add to Cart' onPress={() => router.push("/cart")} style={{ marginTop: 16 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.background,
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: PRODUCT_IMAGE_HEIGHT,
    alignSelf: "center",
    marginTop: 32,
  },
  image: {
    width: PRODUCT_IMAGE_HEIGHT,
    height: PRODUCT_IMAGE_HEIGHT,
    resizeMode: "contain",
    marginRight: 24,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    right: 24,
    height: "100%",
    width: 60,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  imageOverlayItem: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: Colors.background,
  },
  imageOverlayItemSelected: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
    transform: [{ scale: 1.05 }],
  },
  imageOverlayItemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  header: {
    marginTop: PRODUCT_IMAGE_HEIGHT * 0.35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  priceContainer: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 18,
    color: "#17A563",
    fontWeight: "600",
  },
  originalPrice: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "line-through",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  gap: {
    gap: 10,
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cartButton: {
    backgroundColor: "#17A563",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cartBadge: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  cartBadgeText: {
    color: "#17A563",
    fontSize: 12,
    fontWeight: "600",
  },
});
