import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { CustomButton, Header, PasswordInput, SafeAreaView } from "@/components";
import { Colors } from "@/constants";

export default function PasswordScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header transparent style={{ width: '100%' }} />
      <Image style={styles.logo} source={require("@/assets/images/a1stores.png")} />
      <Text style={styles.title}>Enter Password</Text>
      <Text style={styles.subTitle}>
        Enter your Password
      </Text>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.image}
          source={require("@/assets/images/mobile-password.png")}
        />
      </ScrollView>
      <PasswordInput placeholder="Enter password" value="" onChange={() => {}} />
      <CustomButton
        style={styles.button}
        text="Continue"
        onPress={() => router.push("/")}
      />
      <Text style={styles.text}>
        By clicking on “Continue” you are agreeing to our terms of use
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  logo: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 8,
  },
  subTitle: {
    width: "84%",
    fontSize: 16,
    color: Colors.dark,
    marginBottom: 32,
    textAlign: "center",
  },
  image: {
    marginBottom: 24,
  },
  button: {
    width: "84%",
    marginBottom: 16,
  },
  text: {
    width: "84%",
    fontSize: 16,
    color: Colors.dark,
    textAlign: "center",
    marginBottom: 16,
  },
});
