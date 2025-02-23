import { Text, StyleSheet, Animated, View, Image, ImageSourcePropType, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import { useFadeIn } from "@/hooks/useFadeIn";
import { PlusIcon } from "./Icons";
import { Colors, PRODUCT_CARD_WIDTH, PRODUCT_CARD_SPACING } from "@/constants";
import { router } from "expo-router";
import { getShadow } from "@/helpers/shadow";

interface Product {
  id: string;
  title: string;
  image: ImageSourcePropType;
  mrp: number;
  discount: number;
  stock: number;
  sku: string;
  unitQty: number;
  unitType: string;
}

interface ProductCardProps {
  item: Product;
  index: number;
  style?: StyleProp<ViewStyle>;
}

export const ProductCard = ({ item, index, style }: ProductCardProps) => {
  const { opacity, translateY, scale } = useFadeIn(index);

  return (
    <Animated.View style={[styles.container, { opacity, transform: [{ translateY }, { scale }] }, style]}>
      <TouchableOpacity onPress={() => router.push(`/product`)}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}% OFF</Text>
        </View>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
          <Text style={styles.productPrice}>
            {item.unitQty} {item.unitType}, Rs.{item.mrp}
          </Text>
          <Text style={styles.productMrp}>
            {item.unitQty} {item.unitType}, Rs.{item.mrp}
          </Text>
        </View>
        <View style={styles.addToCart}>
          <PlusIcon />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: PRODUCT_CARD_WIDTH,
    margin: (PRODUCT_CARD_SPACING / 2),
    borderRadius: 8,
    padding: 8,
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.lightBg,
    ...getShadow(6),
  },
  discountBadge: {
    position: "absolute",
    top: -8,
    left: -8,
    zIndex: 1,
    backgroundColor: "#DCF2E5",
    alignItems: "center",
  },
  discountText: {
    color: "#17A563",
    fontSize: 10,
    fontWeight: "600",
    padding: 8,
    width: 40,
  },
  productImage: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    margin: 16,
    alignSelf: "center",
  },
  productInfo: {
    gap: 4,
    marginVertical: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#17A563",
  },
  productMrp: {
    fontSize: 12,
    fontWeight: "400",
    color: "#667085",
    textDecorationLine: "line-through",
  },
  addToCart: {
    position: "absolute",
    bottom: 8,
    right: 8,
    zIndex: 1,
    backgroundColor: "#17A563",
    borderRadius: 100,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#17A563",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});