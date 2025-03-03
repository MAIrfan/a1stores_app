import { TouchableOpacity, StyleSheet } from "react-native";

import { EditIcon } from "./Icons";
import { Colors } from "@/constants";

type EditButtonProps = {
  onPress: () => void;
};

export const EditButton = ({ onPress }: EditButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <EditIcon />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
});