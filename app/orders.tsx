import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Colors } from '@/constants';
import { Header } from '@/components/Header';
import { getShadow } from '@/helpers/shadow';
import { getColorOpacity } from '@/helpers/color';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Tabs } from '@/components/Tabs';
import { OrderCard } from '@/components/OrderCard';
import { Order, OrderType } from '@/types';
import data from "@/data.json";

const orders: Order[] = data.orders;

export default function OrdersScreen() {
  const [orderType, setOrderType] = useState<OrderType>('delivery');

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        title="Orders History"
      />

      <Tabs
        tabs={[
          { label: "Delivery", value: "delivery" },
          { label: "Store pickup", value: "pickup" },
        ]}
        selected={orderType}
        onSelect={(tab) => setOrderType(tab as OrderType)}
      />

      <FlatList
        data={orders.filter((order) => order.type === orderType)}
        renderItem={({ item }) => <OrderCard type={orderType} order={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: Colors.background,
  },
  content: {
    gap: 24,
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
});
