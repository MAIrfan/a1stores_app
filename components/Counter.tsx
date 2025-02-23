import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Colors } from "@/constants";

type CounterProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export const Counter = ({ quantity, setQuantity }: CounterProps) => {

  const handleIncrement = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <Text style={styles.text}>−</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={handleIncrement}>
        <Text style={[styles.text, styles.buttonPrimaryText]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.lightBg,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
  },
  buttonPrimaryText: {
    color: Colors.background,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
});
