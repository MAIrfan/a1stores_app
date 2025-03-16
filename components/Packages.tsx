import { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from "react-native";
import { router } from "expo-router";

import { Colors, PACKAGES_HEIGHT } from "@/constants";
import { PackageCard } from "./PackageCard";

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
];

const CARD_SIZE = 300;
const SPACING = 20;

type Props = {
  getPackagesHeight?: (event: LayoutChangeEvent) => void;
};

export const Packages = ({ getPackagesHeight }: Props) => {
  const ref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_SIZE);
    setIndex(index);
  };

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);

  return (
    <View style={styles.container} onLayout={getPackagesHeight}>
      <View style={styles.background} />
      <View style={styles.header}>
        <Text style={styles.title}>Packages</Text>
        <TouchableOpacity onPress={() => router.push("/packages")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={ref}
        data={packages}
        initialScrollIndex={0}
        style={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: itemIndex }) => (
          <PackageCard
            key={itemIndex}
            item={item}
            size={CARD_SIZE}
            onPress={() => router.push("/package")}
          />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      <View style={styles.dotContainer}>
        {packages.map((_, itemIndex) => (
          <View
            key={itemIndex}
            style={[styles.dot, itemIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: PACKAGES_HEIGHT,
    backgroundColor: Colors.background,
    paddingTop: SPACING,
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "60%",
    backgroundColor: Colors.primary,
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
    color: "#FFFFFF",
  },
  viewAll: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  flatList: {
    flexGrow: 0,
  },
  flatListContent: {
    gap: SPACING,
    paddingHorizontal: SPACING,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SPACING,
    gap: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  activeDot: {
    width: 16,
    backgroundColor: "green",
  },
});
