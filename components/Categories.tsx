import { useState, useRef } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
  LayoutRectangle,
  LayoutChangeEvent,
} from "react-native";

import { Colors, CATEGORIES_HEIGHT } from "@/constants";
import { getShadow } from "@/helpers/shadow";
import { Category } from "@/types";
import data from "@/data.json";

const categories: Category[] = data.categories;

type CategoryProps = {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  getCategoriesHeight?: (event: LayoutChangeEvent) => void;
};

export const Categories = ({ selectedCategory, setSelectedCategory, getCategoriesHeight }: CategoryProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [itemLayouts, setItemLayouts] = useState<{
    [key: number]: LayoutRectangle;
  }>({});
  const [scrollViewLayout, setScrollViewLayout] =
    useState<LayoutRectangle | null>(null);

  const handleItemLayout = (id: number) => (event: LayoutChangeEvent) => {
    const layout = event.nativeEvent.layout;
    setItemLayouts((prev) => ({
      ...prev,
      [id]: layout,
    }));
  };

  const handleScrollViewLayout = (event: LayoutChangeEvent) => {
    setScrollViewLayout(event.nativeEvent.layout);
  };

  const scrollToCategory = (id: number) => {
    if (!scrollViewRef.current || !scrollViewLayout || !itemLayouts[id]) return;

    const itemLayout = itemLayouts[id];
    const scrollViewCenter = scrollViewLayout.width / 2;
    const itemCenter = itemLayout.x + itemLayout.width / 2;

    // Calculate the scroll position that will center the selected item
    const scrollToX = itemCenter - scrollViewCenter;

    // Ensure we don't scroll beyond bounds
    const maxScroll = Math.max(0, itemLayout.x);
    const finalScrollPosition = Math.max(0, Math.min(scrollToX, maxScroll));

    scrollViewRef.current.scrollTo({
      x: finalScrollPosition,
      animated: true,
    });
  };

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
    scrollToCategory(category.id);
  };

  return (
    <View style={styles.container} onLayout={getCategoriesHeight}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={() => router.navigate("/categories")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onLayout={handleScrollViewLayout}
        decelerationRate="fast"
        snapToAlignment="center"
      >
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={styles.categoryItem}
            onPress={() => handleCategoryPress(category)}
            onLayout={handleItemLayout(category.id)}
          >
            <View
              style={[
                styles.imageContainer,
                selectedCategory.id === category.id && styles.activeCategory,
              ]}
            >
              <Image
                source={{ uri: category.image }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.categoryTitle,
                selectedCategory.id === category.id && styles.activeCategoryTitle,
              ]}
            >
              {category.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: CATEGORIES_HEIGHT,
    backgroundColor: Colors.background,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  viewAll: {
    fontSize: 14,
    color: "#17A563",
    fontWeight: "500",
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
    width: 84,
  },
  imageContainer: {
    width: 80,
    height: 80,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.lightBg,
    borderWidth: 1,
    borderColor: Colors.lightBg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    ...getShadow(20),
  },
  activeCategory: {
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primary,
    ...getShadow(10, Colors.primary),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  categoryTitle: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
    textAlign: 'center',
  },
  activeCategoryTitle: {
    color: "#17A563",
    fontWeight: "500",
  },
});
