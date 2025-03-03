import { Colors } from "@/constants";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type RadioProps = {
  value: string;
  onPress: () => void;
  option: {
    value: string;
    label?: string;
  };
};

export const Radio = ({ value, onPress, option }: RadioProps) => {
  const selected = value === option.value;
  return (
    <TouchableOpacity 
      style={[styles.option]}
      onPress={onPress}
    >
      <View style={[
        styles.radio,
        selected && styles.radioSelected
      ]}>
        {selected && (
          <View style={styles.radioInner} />
        )}
      </View>
      {option.label &&<Text style={styles.value}>{option.label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: Colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  value: {
    fontSize: 14,
    color: Colors.dark,
  },
});
