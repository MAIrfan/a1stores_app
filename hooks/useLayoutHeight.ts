import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

export function useLayoutHeight(initialHeight: number = 0) {
  const [height, setHeight] = useState(initialHeight);

  const getHeight = useCallback(
    (event: LayoutChangeEvent) => {
      const latestHeight = event.nativeEvent.layout.height;
      if (latestHeight !== height) {
        setHeight(latestHeight);
      }
    },
    [height, setHeight]
  );
  return [height, getHeight] as const;
}
