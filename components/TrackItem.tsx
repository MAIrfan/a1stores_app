import { View, Text, StyleSheet, Image } from "react-native";

import { Colors } from "@/constants";
import { CartItem } from "@/types";

type CartItemProps = {
  item: CartItem;
};

export const TrackItem = ({ item }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={styles.price}>{item.variant_name}, Rs {item.price}</Text>
      </View>
      <Text style={styles.quantity}>x {item.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: Colors.dark,
  },
  price: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  quantity: {
    fontSize: 14,
    color: Colors.dark,
  },
});
