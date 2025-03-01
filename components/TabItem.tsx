import { Colors } from "@/constants";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type TabItemProps = {
  label: string;
  value: string;
  selected: string;
  onSelect: (value: string) => void;
};

export const TabItem = ({ label, value, selected, onSelect }: TabItemProps) => {
  const active = selected === value;
  return (
    <TouchableOpacity
      style={[styles.tab, active && styles.tabActive]}
      onPress={() => onSelect(value)}
    >
      <Text style={[styles.tabText, active && styles.tabTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: Colors.dark,
  },
  tabTextActive: {
    color: Colors.primary,
    fontWeight: "500",
  },
});
