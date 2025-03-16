import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Colors, SPLASH_SCREEN_DURATION } from "@/constants";
import { AppIntro, ErrorFallback, Splash } from "@/components";

SplashScreen.hide();

export default function RootLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // useEffect(() => {
  //   if (loaded) {
  //     setTimeout(() => {
  //       setIsSplashVisible(false);
  //     }, SPLASH_SCREEN_DURATION);
  //   }
  // }, [loaded]);

  // if (!loaded) return <Splash />;

  return (
    // <>
    //   <StatusBar style="auto" />
    //   {isSplashVisible ? (
    //     <AppIntro />
    //   ) : (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <ThemeProvider value={DefaultTheme}>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="login" />
                <Stack.Screen name="otp" />
                <Stack.Screen name="new-password" />
                <Stack.Screen name="password" />
                <Stack.Screen name="packages" />
                <Stack.Screen name="package" />
                <Stack.Screen name="categories" />
                <Stack.Screen name="category" />
                <Stack.Screen name="cart" />
                <Stack.Screen name="product" />
                <Stack.Screen name="search" />
                <Stack.Screen name="reviews" />
                <Stack.Screen name="account" />
                <Stack.Screen name="orders" />
                <Stack.Screen name="order" />
                <Stack.Screen name="track" />
                <Stack.Screen name="profile" />
                <Stack.Screen name="addresses" />
                <Stack.Screen name="address" />
                <Stack.Screen name="+not-found" />
              </Stack>
              <StatusBar style="auto" />
            </ThemeProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ErrorBoundary>
    //   )}
    // </>
  );
}
