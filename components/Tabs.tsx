import { View, StyleSheet } from "react-native";

import { TabItem } from "./TabItem";
import { Colors } from "@/constants";

type TabsProps = {
  tabs: { label: string; value: string }[];
  selected: string;
  onSelect: (tab: string) => void;
};

export const Tabs = ({ tabs, selected, onSelect }: TabsProps) => (
  <View style={styles.container}>
    {tabs.map((tab) => (
      <TabItem
        key={tab.value}
        label={tab.label}
        value={tab.value}
        selected={selected}
        onSelect={onSelect}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
});
