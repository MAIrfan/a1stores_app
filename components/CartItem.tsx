import { View, Text, StyleSheet, Image } from "react-native";

import { Counter } from "./Counter";
import { Colors } from "@/constants";
import { CartItem as CartItemType } from "@/types";

type CartItemProps = {
  item: CartItemType;
  setQuantity: (quantity: number) => void;
};

export const CartItem = ({ item, setQuantity }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={styles.price}>{item.variant_name}, Rs {item.price}</Text>
      </View>
      <Counter
        quantity={item.quantity}
        setQuantity={setQuantity}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
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
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: Colors.dark,
  },
  price: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
});
