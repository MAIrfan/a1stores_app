import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "@/constants";

type MultiRowSectionItemProps = {
  label: string;
  text: string;
  subtext?: string;
  icon?: ReactNode;
};

export const MultiRowSectionItem = ({ label, text, subtext, icon }: MultiRowSectionItemProps) => (
  <View style={styles.container}>
    {icon}
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
      {subtext && <Text style={styles.subtext}>{subtext}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    margin: 16
  },
  wrapper: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: Colors.grey,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
  subtext: {
    fontSize: 14,
    color: Colors.grey,
    marginTop: 4,
  },
});
