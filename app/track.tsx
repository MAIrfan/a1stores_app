import { View, Text, StyleSheet } from "react-native";

import { Header, SafeAreaView } from "@/components";

export default function TrackScreen() {
  return (
    <View>
      <SafeAreaView />
      <Header type="invert" hideSearch style={{ paddingBottom: 0 }} />
      <Text>Track</Text>
    </View>
  );
}

const styles = StyleSheet.create({});