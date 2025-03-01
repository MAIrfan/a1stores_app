import { Colors } from "@/constants";
import { View, Text, Image, StyleSheet } from "react-native";

type OrderProductItemProps = {
  image: any;
  title: string;
  price: string;
  unitQty: number;
  unit: string;
};

export const OrderProductItem = ({ image, title, price, unitQty, unit }: OrderProductItemProps) => (
  <View style={styles.container}>
    <Image
      source={image}
      style={styles.image}
    />
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{`${unitQty} ${unit}, Rs ${price}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
