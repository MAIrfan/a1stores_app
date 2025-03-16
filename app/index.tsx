import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import {
  Categories,
  HomeHeader,
  Packages,
  ProductCard,
  SafeAreaView,
  Search,
  SubCategories,
} from "@/components";
import { Category } from "@/types";
import { Colors } from "@/constants";

import data from "@/data.json";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    data.categories[0]
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<Category>(
    data.categories[0].sub_categories[0]
  );

  return (
    <View style={styles.container}>
      <SafeAreaView color={Colors.primary} />
      <ScrollView
        stickyHeaderIndices={[1, 4]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <Search />
        <Packages />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SubCategories
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
        />
        <View style={styles.products}>
          {data.variants
            .filter((variant) => {
              if (selectedSubCategory.id === 0)
                if (
                  selectedCategory.sub_categories
                    ?.map((category) => category.id)
                    .includes(variant.category_id)
                )
                  return true;
              return variant.category_id === selectedSubCategory.id;
            })
            .map((product, index) => (
              <ProductCard key={product.id} index={index} item={product} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
});
