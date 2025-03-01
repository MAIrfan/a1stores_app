import { View, Text, StyleSheet } from "react-native";

import { CustomButton } from "./CustomButton";
import { Colors } from "@/constants";

type OrderStatusItemProps = {
  status: string;
};

export const OrderStatusItem = ({ status }: OrderStatusItemProps) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>{status}</Text>
      <CustomButton size="xsmall" text="Contact Store" onPress={() => {}} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.lightBg2,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark,
    textTransform: "capitalize",
  },
});
