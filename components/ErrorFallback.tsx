import { Text, View } from "react-native";

import { CustomButton } from "./CustomButton";

type Props = {
  error: Error | null;
  resetErrorBoundary: () => void;
};

export const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ color: "red", fontSize: 18 }}>Something went wrong:</Text>
      <Text>{error?.message}</Text>
      <CustomButton text="Try Again" onPress={resetErrorBoundary} />
    </View>
  );
};
