import { View, StyleSheet } from "react-native";

import { Radio } from "./Radio";

type Option = {
  label?: string;
  value: string;
};

type RadiosProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const Radios = ({ options, value, onChange }: RadiosProps) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={value}
          onPress={() => onChange(option.value)}
          option={option}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
