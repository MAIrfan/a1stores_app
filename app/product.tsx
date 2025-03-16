import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList, Animated, Image, TouchableOpacity } from 'react-native';

import { Counter } from '@/components/Counter';
import { Header } from '@/components/Header';
import { Colors, PRODUCT_IMAGE_HEIGHT } from '@/constants';
import { Circle } from '@/components/Circle';
import { ProductCard, SafeAreaView } from '@/components';
import { UnitTag } from '@/components/UnitTag';
import { ProductInfoCard } from '@/components/ProductInfoCard';
import { Product, Variant } from '@/types';

import { products, variants } from "@/data.json";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const scrollY = new Animated.Value(0);
  const mainImageOpacity = new Animated.Value(1);
  const mainImageScale = new Animated.Value(1);
  const [quantity, setQuantity] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState('01');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const product: Product = products.find((p) => p.id === Number(id))!;

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
            source={{ uri: product.images[selectedImageIndex] }}
            style={[
              styles.image,
              {
                opacity: mainImageOpacity,
                transform: [{ scale: mainImageScale }],
              },
            ]}
          />
          <View style={styles.imageOverlay}>
            {product.images.map((image: string, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => animateImageChange(index)}
                style={[
                  styles.imageOverlayItem,
                  selectedImageIndex === index && styles.imageOverlayItemSelected,
                ]}
              >
                <Image source={{ uri: image }} style={styles.imageOverlayItemImage} />
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <View style={styles.header}>
          <Text style={styles.title}>{product.name}</Text>
          <Counter quantity={quantity} setQuantity={setQuantity} />
        </View>

        <View style={styles.priceContainer}>
          <Text
            style={styles.price}
          >{`${product.variants[0].name}, Rs ${product.variants[0].mrp}`}</Text>
          <Text
            style={styles.originalPrice}
          >{`${product.variants[0].name}, Rs ${product.variants[0].mrp}`}</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.infoGrid}>
          <ProductInfoCard
            value="100%"
            label="Organic"
            image={require("../assets/icons/lotus.png")}
          />
          <ProductInfoCard
            value={`${product.reviews.rating} (${product.reviews.count})`}
            label="Reviews"
            image={require("../assets/icons/favorite.png")}
            onPress={() => router.push('/reviews')}
          />
          <ProductInfoCard
            value="1 Year"
            label="Expiration"
            image={require("../assets/icons/calendar.png")}
          />
          <ProductInfoCard
            value="80 kcal"
            label="Calories"
            image={require("../assets/icons/fire.png")}
          />
        </View>

        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Unit</Text>
          <FlatList
            horizontal
            data={product.variants}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.gap}
            renderItem={({ item }) => (
              <UnitTag
                unit={item.value}
                type={item.type}
                selected={selectedUnit === item.id}
                onPress={() => setSelectedUnit(item.id)}
              />
            )}
          />
        </View> */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Similar Products</Text>
          <FlatList
            horizontal
            data={variants}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ProductCard item={item} index={index} style={{ marginLeft: 0 }}/>
            )}
          />
        </View>
      </Animated.ScrollView>

      {/* <View style={styles.footer}>
        <View style={styles.cartButton}>
          <Text style={styles.cartButtonText}>View cart</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>4 items | ₹2400</Text>
          </View>
        </View>
      </View> */}
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
    right: 8,
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
    marginBottom: 24,
  },

  section: {
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  gap: {
    gap: 10,
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
