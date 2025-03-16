import { View, Text, Image, StyleSheet } from "react-native";

import { Colors } from "@/constants";
import { OrderItem } from "@/types";

type OrderProductItemProps = {
  item: OrderItem;
};

export const OrderProductItem = ({ item }: OrderProductItemProps) => (
  <View style={styles.container}>
    <Image
      source={{ uri: item.image }}
      style={styles.image}
    />
    <View style={styles.wrapper}>
      <Text style={styles.title}>{item.product_name}</Text>
      <Text style={styles.price}>{`${item.variant_name}, Rs ${item.price}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    margin: 16
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "contain",
  },
  wrapper: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.dark,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.danger,
  },
});
