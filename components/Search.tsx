import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { Colors, SEARCH_HEIGHT, SCREEN_WIDTH } from "@/constants";
import { SearchIcon } from "./Icons";

const SPACING = 16;

export const Search = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push("/")}>
      <SearchIcon style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={'Search for fruits, vegetables, groceries...'}
        placeholderTextColor={Colors.grey2}
        editable={false}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SEARCH_HEIGHT,
    backgroundColor: Colors.primary,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 24,
    top: 20,
    zIndex: 1,
    color: Colors.grey2,
  },
  input: {
    height: SEARCH_HEIGHT - SPACING - 4,
    width: SCREEN_WIDTH - SPACING * 2,
    paddingLeft: 36,
    borderRadius: 8,
    backgroundColor: Colors.background,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
});
