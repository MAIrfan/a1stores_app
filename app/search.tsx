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

import { Colors } from "@/constants";
import { getShadow } from "@/helpers/shadow";
import { ProductCard, SafeAreaView, SearchInput } from "@/components";

import data from "@/data.json";

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
        {searchQuery.length > 0 ? (
          <>
            <Text
              style={[styles.sectionTitle, styles.section]}
            >{`Showing results for "${searchQuery}"`}</Text>
            <FlatList
              data={data.variants}
              renderItem={({ item }) => (
                <ProductCard key={item.id} item={item} index={0} />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              initialNumToRender={2}
              maxToRenderPerBatch={2}
              windowSize={2}
              scrollEnabled={false}
            />
          </>
        ) : recentSearches.length > 0 && (
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
