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
        type="invert"
        title="Orders History"
        hideSearch
        backButtonStyles={{ backgroundColor: Colors.primaryLight2 }}
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
  orderCard: {
    backgroundColor: Colors.lightBg2,
    borderRadius: 12,
    padding: 16,
    ...getShadow(4)
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusBadge: {
    backgroundColor: getColorOpacity(Colors.orange, 10),
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  statusText: {
    color: Colors.orange,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  orderId: {
    fontSize: 16,
    color: Colors.dark,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  storeName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
  orderDate: {
    fontSize: 14,
    color: Colors.dark,
  },
  addressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  address: {
    flex: 1,
    fontSize: 16,
    color: Colors.dark,
  },
  itemsList: {
    gap: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
  itemUnit: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
});
