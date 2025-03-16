import { View, ViewStyle, StyleProp } from "react-native";

import { Colors, STATUS_BAR_HEIGHT } from "@/constants";

type SafeAreaViewProps = {
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export const SafeAreaView = ({
  color = Colors.transparent,
  style,
}: SafeAreaViewProps) => (
  <View
    style={[style, { height: STATUS_BAR_HEIGHT, backgroundColor: color }]}
  />
);
