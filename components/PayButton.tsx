import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../constants";
import { CustomButton } from "./CustomButton";

export const PayButton = ({ amount, onPress }: { amount: number, onPress: () => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.amount}>₹{amount}</Text>
        <Text style={styles.label}>TO PAY</Text>
      </View>
      <CustomButton style={styles.button} onPress={onPress} text="Proceed to Pay" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: Colors.lightBg,
    borderRadius: 24,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.grey,
  },
  button: {
    flex: 1,
  },
});

