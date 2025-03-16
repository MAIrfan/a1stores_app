import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Colors, SUB_CATEGORIES_HEIGHT } from "@/constants";
import { Category } from "@/types";

const _spacing = 10;

type SubCategoriesProps = {
  selectedCategory: Category;
  selectedSubCategory: Category;
  setSelectedSubCategory: (subCategory: Category) => void;
};

export const SubCategories: React.FC<SubCategoriesProps> = ({
  selectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}) => (
  <FlatList
  horizontal
    data={selectedCategory.sub_categories ?? []}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.id.toString()}
    scrollEventThrottle={16}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => setSelectedSubCategory(item)}>
        <View
          style={{
            padding: item.id === selectedSubCategory.id ? 10 : 11,
            borderBottomWidth: item.id === selectedSubCategory.id ? 3 : 1,
            borderColor:
              item.id === selectedSubCategory.id
                ? Colors.primary
                : Colors.lightGrey,
          }}
        >
          <Text
            style={{
              color:
                item.id === selectedSubCategory.id
                  ? Colors.primary
                  : Colors.lightGrey,
              fontWeight: "700",
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    height: SUB_CATEGORIES_HEIGHT,
    paddingLeft: _spacing,
    backgroundColor: Colors.background,
  },
});
