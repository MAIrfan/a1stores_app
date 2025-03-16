import { View, FlatList, StyleSheet } from "react-native";
import { router } from "expo-router";

import { Header, SafeAreaView, PackageCard } from "@/components";
import { Colors, WINDOW_WIDTH } from "@/constants";

export const packages = [
  {
    id: 1,
    image: require("@/assets/products/c1.jpg"),
  },
  {
    id: 2,
    image: require("@/assets/products/c2.jpg"),
  },
  {
    id: 3,
    image: require("@/assets/products/c3.jpg"),
  },
  {
    id: 4,
    image: require("@/assets/products/c4.jpg"),
  },
  {
    id: 5,
    image: require("@/assets/products/c5.jpg"),
  },
  {
    id: 6,
    image: require("@/assets/products/c1.jpg"),
  },
  {
    id: 7,
    image: require("@/assets/products/c2.jpg"),
  },
  {
    id: 8,
    image: require("@/assets/products/c3.jpg"),
  },
  {
    id: 9,
    image: require("@/assets/products/c4.jpg"),
  },
  {
    id: 10,
    image: require("@/assets/products/c5.jpg"),
  },
];
const SPACING = 16;

export default function PackageScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Packages" />
      <FlatList
        data={packages}
        initialScrollIndex={0}
        style={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index: itemIndex }) => (
          <PackageCard
            key={itemIndex}
            item={item}
            size={WINDOW_WIDTH - SPACING * 2}
            onPress={() => router.push("/package")}
          />
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING,
    paddingBottom: SPACING,
    backgroundColor: Colors.background,
  },
  flatList: {
    flexGrow: 0,
  },
  flatListContent: {
    gap: SPACING,
  },
});
