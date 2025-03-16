import { ReactNode } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { Colors } from "@/constants";

type SectionProps = {
  title: string;
  titleRight?: ReactNode;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Section = ({ title, titleRight, children, style }: SectionProps) => (
  <View style={[styles.container, style]}>
    <View style={styles.sectionHeader}>
      <Text style={styles.title}>{title}</Text>
      {titleRight && titleRight}
    </View>
    <View style={styles.content}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: Colors.background,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.dark,
    marginLeft: 4,
  },
  content: {
    backgroundColor: Colors.lightBg2,
    borderRadius: 16,
  },
});
