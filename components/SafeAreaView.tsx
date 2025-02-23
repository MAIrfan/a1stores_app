import { View } from "react-native";

import { Colors, STATUS_BAR_HEIGHT } from "@/constants";

export const SafeAreaView = ({
  color = Colors.primary,
}: {
  color?: string;
}) => <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: color }} />;
