import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { ProductCard, Header, SafeAreaView } from "@/components";
import { Colors, WINDOW_WIDTH } from "@/constants";
import { Category, Variant } from "@/types";

import data from "@/data.json";

const LEFT_SECTION_WIDTH = WINDOW_WIDTH * 0.16;
const RIGHT_SECTION_WIDTH = WINDOW_WIDTH * 0.84;

export default function CategoryPage() {
  const [selectedSubCategory, setSelectedSubCategory] = useState<Category>(data.categories[0].sub_categories[1]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Categories" style={{ paddingHorizontal: 16 }} />
      <View style={{ flexDirection: "row" }}>
        {/* Categories List with its own scroll */}
        <ScrollView
          style={styles.categoriesList}
          showsVerticalScrollIndicator={false}
        >
          {data.categories[0].sub_categories.filter((category: Category) => category.id !== 0).map((category: Category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryItem,
                selectedSubCategory.id === category.id && styles.categoryItemSelected,
              ]}
              onPress={() => setSelectedSubCategory(category)}
            >
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text
                style={[
                  styles.categoryName,
                  selectedSubCategory.id === category.id &&
                    styles.categoryNameSelected,
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
            {data.variants
              .filter((variant: Variant) => variant.category_id === selectedSubCategory.id)
              .map((product, index) => (
                <ProductCard
                  key={product.id}
                  item={product}
                  index={index}
                  style={{
                    width: RIGHT_SECTION_WIDTH * 0.46,
                    margin: RIGHT_SECTION_WIDTH * 0.015,
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
    backgroundColor: "#f5f5f5",
    width: LEFT_SECTION_WIDTH,
  },
  categoryItem: {
    alignItems: "center",
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  categoryItemSelected: {
    backgroundColor: "#fff",
    borderLeftWidth: 3,
    borderLeftColor: "#4caf50",
  },
  categoryImage: {
    width: LEFT_SECTION_WIDTH * 0.5,
    height: LEFT_SECTION_WIDTH * 0.5,
    marginBottom: 4,
    resizeMode: "contain",
  },
  categoryName: {
    fontSize: 11,
    textAlign: "center",
    color: "#333",
  },
  categoryNameSelected: {
    color: "#4caf50",
    fontWeight: "bold",
  },
  productsList: {
    backgroundColor: "#fff",
    width: RIGHT_SECTION_WIDTH,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
