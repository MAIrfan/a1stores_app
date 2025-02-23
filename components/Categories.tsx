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

const categories = [
  {
    id: 1,
    title: "Rice",
    image: require("@/assets/categories/0.png"),
    subcategories: [
      {
        id: 101,
        title: "A-1 Raiwind HMT Zeera Rice",
      },
      {
        id: 102,
        title: "A Class",
      },
      {
        id: 103,
        title: "RRI",
      },
      {
        id: 104,
        title: "Gajraj",
      },
      {
        id: 105,
        title: "Nawab",
      },
      {
        id: 106,
        title: "Joker",
      },
      {
        id: 107,
        title: "Gajendra",
      },
      {
        id: 108,
        title: "Tomato",
      },
    ],
  },
  {
    id: 2,
    title: "Oil & Ghee",
    image: require("@/assets/categories/2.png"),
    subcategories: [
      {
        id: 201,
        title: "Gold Drop Oil",
      },
      {
        id: 202,
        title: "Dalda Ghee",
      },
    ],
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    image: require("@/assets/categories/3.png"),
    subcategories: [
      {
        id: 301,
        title: "Milk",
      },
      {
        id: 302,
        title: "Eggs",
      },
    ],
  },
  {
    id: 4,
    title: "Fruits",
    image: require("@/assets/categories/4.png"),
    subcategories: [
      {
        id: 401,
        title: "Apples",
      },
      {
        id: 402,
        title: "Bananas",
      },
    ],
  },
  {
    id: 5,
    title: "Vegetables",
    image: require("@/assets/categories/5.png"),
    subcategories: [
      {
        id: 501,
        title: "Carrots",
      },
      {
        id: 502,
        title: "Tomatoes",
      },
    ],
  },
];

export const Categories = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedId, setSelectedId] = useState(1);
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

  const handleCategoryPress = (id: number) => {
    setSelectedId(id);
    scrollToCategory(id);
  };

  return (
    <View style={styles.container}>
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
            onPress={() => handleCategoryPress(category.id)}
            onLayout={handleItemLayout(category.id)}
          >
            <View
              style={[
                styles.imageContainer,
                selectedId === category.id && styles.activeCategory,
              ]}
            >
              <Image
                source={category.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.categoryTitle,
                selectedId === category.id && styles.activeCategoryTitle,
              ]}
            >
              {category.title}
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
  },
  imageContainer: {
    width: 80,
    height: 80,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.lightBg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    ...getShadow(4),
  },
  activeCategory: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
    ...getShadow(4, Colors.primary),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  categoryTitle: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  activeCategoryTitle: {
    color: "#17A563",
    fontWeight: "500",
  },
});
