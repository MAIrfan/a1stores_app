import { View } from "react-native";

import { Colors, STATUS_BAR_HEIGHT } from "@/constants";

export const SafeAreaView = ({
  color = Colors.transparent,
}: {
  color?: string;
}) => <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: color }} />;
