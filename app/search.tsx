import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { SearchInput } from "@/components/SearchInput";
import { Colors } from "@/constants";
import { ProductCard } from "@/components";
import { SafeAreaView } from "@/components/SafeAreaView";
import { getShadow } from "@/helpers/shadow";

const products: any[] = [
  {
    id: "1",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 1360,
    stock: 100,
    sku: "1",
    image: require("../assets/products/1.png"),
    category_id: "1",
    discount: 0,
    unitQty: 10,
    unitType: "kg",
  },
  {
    id: "2",
    title: "A-1 Raiwind HMT Basmati Rice",
    mrp: 700,
    stock: 100,
    sku: "2",
    image: require("../assets/products/2.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "3",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "3",
    image: require("../assets/products/3.png"),
    category_id: "1",
    discount: 20,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "4",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "4",
    image: require("../assets/products/4.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "5",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "5",
    image: require("../assets/products/5.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "6",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "6",
    image: require("../assets/products/6.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "7",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "7",
    image: require("../assets/products/7.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "8",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "8",
    image: require("../assets/products/8.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "9",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "9",
    image: require("../assets/products/9.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "10",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "10",
    image: require("../assets/products/10.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "11",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "11",
    image: require("../assets/products/11.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "12",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "12",
    image: require("../assets/products/12.png"),
    category_id: "1",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "13",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 1360,
    stock: 100,
    sku: "13",
    image: require("../assets/products/13.png"),
    category_id: "2",
    discount: 0,
    unitQty: 10,
    unitType: "kg",
  },
  {
    id: "14",
    title: "A-1 Raiwind HMT Basmati Rice",
    mrp: 700,
    stock: 100,
    sku: "14",
    image: require("../assets/products/14.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "15",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "15",
    image: require("../assets/products/15.png"),
    category_id: "2",
    discount: 20,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "16",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "16",
    image: require("../assets/products/16.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "17",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "17",
    image: require("../assets/products/17.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "18",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "18",
    image: require("../assets/products/18.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "19",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "19",
    image: require("../assets/products/19.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "20",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "20",
    image: require("../assets/products/20.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "21",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "21",
    image: require("../assets/products/21.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "22",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "22",
    image: require("../assets/products/22.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "23",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "23",
    image: require("../assets/products/23.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
  {
    id: "24",
    title: "A-1 Raiwind HMT Zeera Rice",
    mrp: 500,
    stock: 100,
    sku: "24",
    image: require("../assets/products/24.png"),
    category_id: "2",
    discount: 0,
    unitQty: 1,
    unitType: "kg",
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "rice",
    "milk",
  ]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SearchInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClose={() => router.back()}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {recentSearches.length > 0 && searchQuery.length === 0 ? (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Searches</Text>
              <TouchableOpacity onPress={() => setRecentSearches([])}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recentSearches}>
              {recentSearches.map((search) => (
                <TouchableOpacity
                  key={search}
                  style={styles.recentSearchItem}
                  onPress={() => setSearchQuery(search)}
                >
                  <Text>{search}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <>
            <Text
              style={[styles.sectionTitle, styles.section]}
            >{`Showing results for "${searchQuery}"`}</Text>
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <ProductCard key={item.id} item={item} index={0} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
              initialNumToRender={2}
              maxToRenderPerBatch={2}
              windowSize={2}
              scrollEnabled={false}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 16,
  },
  clearText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  recentSearches: {
    flexDirection: "row",
    gap: 16,
  },
  recentSearchItem: {
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    ...getShadow(16),
  },
});
