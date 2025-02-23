import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from "react-native";
import { Colors, SUB_CATEGORIES_HEIGHT } from "@/constants";

const data = [
  { id: 1, name: "A-1 Raiwind" },
  { id: 2, name: "A Class" },
  { id: 3, name: "RRI" },
  { id: 4, name: "Gajraj" },
  { id: 5, name: "Nawab" },
  { id: 6, name: "Joker" },
  { id: 7, name: "Gajendra" },
  { id: 8, name: "Tomato" },
  { id: 9, name: "Raiwind" },
  { id: 10, name: "Basmati" },
];

const _spacing = 10;

type SubCategoriesProps = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  listRefs: React.MutableRefObject<FlatList<any>[]>;
  listIndex: number;
  syncScroll: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    sourceIndex: number
  ) => void;
};

export const SubCategories: React.FC<SubCategoriesProps> = ({
  selectedIndex,
  setSelectedIndex,
  listRefs,
  listIndex,
  syncScroll,
}) => (
  <FlatList
    ref={(el) => (listRefs.current[listIndex] = el!)}
    key={listIndex}
    data={data}
    horizontal
    initialScrollIndex={0}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.id.toString()}
    onScroll={(e) => syncScroll(e, listIndex)}
    scrollEventThrottle={16}
    renderItem={({ item, index: itemIndex }) => (
      <TouchableOpacity
        onPress={() => {
          setSelectedIndex(itemIndex);
          listRefs.current.forEach((ref) =>
            ref?.scrollToIndex({
              index: itemIndex,
              animated: true,
              viewPosition: 0.5,
            })
          );
        }}
      >
        <View
          style={{
            padding: itemIndex === selectedIndex ? 10 : 11,
            borderBottomWidth: itemIndex === selectedIndex ? 3 : 1,
            borderColor:
              itemIndex === selectedIndex ? Colors.primary : Colors.lightGrey,
          }}
        >
          <Text
            style={{
              color:
                itemIndex === selectedIndex ? Colors.primary : Colors.lightGrey,
              fontWeight: "700",
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    height: SUB_CATEGORIES_HEIGHT,
    paddingLeft: _spacing,
    backgroundColor: Colors.background,
  },
}); 
