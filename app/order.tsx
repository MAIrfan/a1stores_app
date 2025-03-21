import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { LocationIcon, StoreIcon, TimeIcon } from "@/components/Icons";
import { Colors, ORDER_STATUS_IMAGE_HEIGHT } from "@/constants";
import {
  Header,
  SafeAreaView,
  Section,
  SectionItem,
  Divider,
  OrderStatusCard,
  MultiRowSectionItem,
  OrderProductItem,
  OrderStatusItem,
  OTP,
  CustomButton,
} from "@/components";

import { orders } from "@/data.json";

const HORIZONTAL_PADDING = 18;

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const order: any = orders.find((order: any) => order.id === id);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={`Order ${order.id}`} style={styles.sectionPadding} />
      <OrderStatusCard status={order.status} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.transparentSection} />
        <OrderStatusItem status={order.status} />

        <Section
          title="General info"
          titleRight={<OTP otp={order.otp} />}
          style={styles.sectionPadding}
        >
          <SectionItem label="Order Number" value={`#${order.id}`} />
          <Divider />
          <SectionItem label="Order Date" value={order.date} />
        </Section>

        {order.type === "delivery" ? (
          <Section title="Shipping details" style={styles.sectionPadding}>
            <MultiRowSectionItem
              icon={<StoreIcon color={Colors.blue} />}
              label="From store"
              text={order.store}
            />
            <Divider />
            <MultiRowSectionItem
              icon={<LocationIcon color={Colors.primary} />}
              label="To"
              text={order.address}
              subtext={`${order.recipient_name} • ${order.recipient_number}`}
            />
          </Section>
        ) : (
          <Section title="Pickup details" style={styles.sectionPadding}>
            <MultiRowSectionItem
              icon={<StoreIcon color={Colors.blue} />}
              label="From store"
              text={order.store}
            />
            <MultiRowSectionItem
              icon={<TimeIcon color={Colors.primary} />}
              label="Pickup time"
              text={order.time}
            />
          </Section>
        )}

        <Section title="Product info" style={styles.sectionPadding}>
          {order.items.map((item: any, index: number) => (
            <View key={index}>
              <OrderProductItem item={item} />
              {index + 1 < order.items.length && <Divider />}
            </View>
          ))}
        </Section>

        <Section title="Payment info" style={styles.sectionPadding}>
          <SectionItem label="Payment method" value="Phonepe" />
        </Section>

        <View style={styles.paymentSummary}>
          <SectionItem label="Price" value="Rs.319.000" style={{ margin: 0 }} />
          <SectionItem label="Shipping fee" value="Rs. 15.000" style={{ margin: 0 }} />
          <SectionItem
            label="Promotion"
            value="Rs. -50.000"
            valueColor={Colors.primary}
            style={{ margin: 0 }}
          />
          <SectionItem label="Total" value="Rs. 284.000" style={{ margin: 0 }} />
        </View>
      </ScrollView>
      {order.type === "delivery" && !["delivered", "failed", "cancelled"].includes(order.status) && (
        <View
          style={{ paddingHorizontal: HORIZONTAL_PADDING, paddingVertical: 16 }}
        >
          <CustomButton
            text="Track order"
            onPress={() => router.push(`/track?id=${order.id}`)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    marginHorizontal: HORIZONTAL_PADDING,
    overflow: "hidden",
  },
  transparentSection: {
    height: ORDER_STATUS_IMAGE_HEIGHT * 0.9,
    backgroundColor: "transparent",
  },
  sectionPadding: {
    paddingHorizontal: 8,
  },
  paymentSummary: {
    marginTop: 8,
    padding: 16,
    gap: 12,
  },
});
