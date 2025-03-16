import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { CustomButton, Header, SafeAreaView, TrackItem } from "@/components";
import { OrderStatusTimeline } from "@/components/OrderStatusTimeline";
import { Colors, PRODUCT_IMAGE_HEIGHT } from "@/constants";

import data from "@/data.json";

export default function TrackScreen() {
  const { id } = useLocalSearchParams();
  const order: any = data.orders.find((order: any) => order.id === id);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        title="Track Order"
        transparent
        style={{ marginHorizontal: 16 }}
      />
      {order.items.length === 1 ? (
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>A-1 Raiwind HMT Zeera Rice</Text>
              <Text style={styles.price}>1kg, Rs 300</Text>
            </View>
            <Text style={styles.quantity}>x 2</Text>
          </View>
          <Image
            source={require("../assets/products/1.png")}
            style={styles.image}
          />
        </View>
      ) : (
        <View style={{ paddingHorizontal: 16 }}>
          {order.items.map((item: any, index: number) =>
            index < 2 ? (
              <TrackItem key={index} item={item} />
            ) : (
              index === 2 && (
                <CustomButton
                  variant="ghost"
                  size="small"
                  text="+2 items"
                  onPress={() => router.back()}
                  style={{ paddingVertical: 0 }}
                />
              )
            )
          )}
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.sectionTitle}>Order Details</Text>
        <View style={styles.flexRow}>
          <Text>Tracking ID</Text>
          <Text>123456789</Text>
        </View>
        <View style={styles.flexRow}>
          <Text>Expected Delivery Time</Text>
          <View style={styles.flexRow}>
            <Text>Today</Text>
            <Text>10 Mins</Text>
          </View>
        </View>
        <View style={[styles.flexRow, { marginTop: 24 }]}>
          <Text style={styles.sectionTitle}>Order Status</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <OrderStatusTimeline timeline={order.timeline} />
        </ScrollView>
        {order.status !== "delivered" && (
          <CustomButton
            variant="secondary"
            text="Cancel Order"
            onPress={() => {}}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.primary,
    marginTop: 4,
  },
  quantity: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  image: {
    width: PRODUCT_IMAGE_HEIGHT * 0.65,
    height: PRODUCT_IMAGE_HEIGHT * 0.65,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 32,
  },
  info: {
    flex: 1,
    padding: 24,
    marginTop: 32,
    borderRadius: 40,
    backgroundColor: Colors.background,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark,
  }
});
