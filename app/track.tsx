import { View, Text, StyleSheet } from "react-native";

import { Header, SafeAreaView } from "@/components";

export default function TrackScreen() {
  return (
    <View>
      <SafeAreaView />
      <Header />
      <Text>Track</Text>
    </View>
  );
}

const styles = StyleSheet.create({});