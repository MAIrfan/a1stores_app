import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { CustomButton, Header, PhoneInput, SafeAreaView } from "@/components";
import { Colors } from "@/constants";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header transparent style={{ width: '100%' }} />
      <Image style={styles.logo} source={require("@/assets/images/a1stores.png")} />
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.subTitle}>
        We will send you a verification code
      </Text>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.image}
          source={require("@/assets/images/mobile-login.png")}
        />
      </ScrollView>
      <PhoneInput />
      <CustomButton
        style={styles.button}
        text="Continue"
        onPress={() => router.push("/otp")}
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
