import { ReactNode } from "react";
import { View, StyleSheet, Text, ViewStyle, StyleProp } from "react-native";

import { Colors } from "@/constants";
import { BackButton } from "./BackButton";
import { HeaderRightButton } from "./HeaderRightButton";

type HeaderProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
  transparent?: boolean;
  showSearch?: boolean;
  rightNode?: ReactNode;
};

export const Header = ({
  title,
  style,
  transparent = false,
  showSearch = false,
  rightNode = null,
}: HeaderProps) => {
  const isHidden = !rightNode && !showSearch;
  const backgroundColor = transparent ? Colors.transparent : Colors.background;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
        style,
      ]}
    >
      <BackButton primary={!transparent} />
      <Text style={styles.title}>{title || ""}</Text>
      <HeaderRightButton
        hidden={isHidden}
        transparent={transparent}
        node={rightNode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
