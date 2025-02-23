import { View, Text, StyleSheet, Image } from "react-native";

import { Colors } from "../constants";

export const CartEmpty = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/empty-cart.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Your cart is empty</Text>
      <Text style={styles.subtitle}>
        Why don't you try something from our shop?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    width: 200,
    fontSize: 14,
    color: Colors.grey,
    textAlign: 'center',
  },
});
