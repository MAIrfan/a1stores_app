import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "@/constants";

interface UnitTagProps {
  unit: string;
  type: string;
  selected?: boolean;
  onPress?: () => void;
}

export const UnitTag = ({ unit, type, selected = false, onPress = () => {} }: UnitTagProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, selected && styles.selectedContainer]}>
      <Image source={require('@/assets/images/tag.png')} style={styles.image} />
      <Text style={styles.unit}>{unit}</Text>
      <Text style={[styles.type, selected && styles.selectedType]}>{type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    position: 'relative',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGrey,
  },
  selectedContainer: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight2,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  unit: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 14,
    left: 22,
    width: 26,
    textAlign: "center",
    backgroundColor: Colors.primary,
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.grey,
    marginTop: 4,
  },
  selectedType: {
    color: Colors.primary,
  },
});
