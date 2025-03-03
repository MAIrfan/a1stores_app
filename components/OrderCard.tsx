import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

import { LocationIcon, StoreIcon, TimeIcon } from "./Icons";
import { Colors } from "@/constants";
import { getColorOpacity } from "@/helpers/color";
import { getShadow } from "@/helpers/shadow";
import { OrderCardProps } from "@/types";

const statusColors = {
  confirmed: {
    text: Colors.danger,
    bg: getColorOpacity(Colors.danger, 10),
  },
  preparing: {
    text: Colors.orange,
    bg: getColorOpacity(Colors.orange, 10),
  },
  delivering: {
    text: Colors.blue,
    bg: getColorOpacity(Colors.blue, 10),
  },
  delivered: {
    text: Colors.primary,
    bg: getColorOpacity(Colors.primary, 10),
  },
  cancelled: {
    text: Colors.danger,
    bg: getColorOpacity(Colors.danger, 10),
  },
  failed: {
    text: Colors.danger,
    bg: getColorOpacity(Colors.danger, 10),
  },
  pickup: {
    text: Colors.blue,
    bg: getColorOpacity(Colors.blue, 10),
  },
  completed: {
    text: Colors.primary,
    bg: getColorOpacity(Colors.primary, 10),
  },
};

export const OrderCard = ({ type, order }: OrderCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/order?id=${order.id}`)}
    >
      <View style={styles.orderHeader}>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusColors[order.status].bg },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: statusColors[order.status].text },
            ]}
          >
            {order.status}
          </Text>
        </View>
        <Text style={styles.orderId}>#{order.id}</Text>
      </View>

      <View style={styles.storeInfo}>
        <View style={styles.iconContainer}>
          <StoreIcon color={Colors.blue} />
        </View>
        <Text style={styles.storeName}>{order.store}</Text>
        <Text style={styles.orderDate}>{order.date}</Text>
      </View>

      <View style={styles.addressInfo}>
        <View style={styles.iconContainer}>
          {type === 'delivery' ? <LocationIcon color={Colors.primary} /> : <TimeIcon color={Colors.primary} />}
        </View>
        <Text style={styles.address}>{type === 'delivery' ? order.address : order.time}</Text>
      </View>

      <View style={styles.itemsList}>
        {order.items.map((item, index) => (
          <View key={index} style={styles.orderItem}>
            <Text style={styles.itemName}>
              {item.name} x {item.quantity}
            </Text>
            <Text style={styles.itemUnit}>{item.unit}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBg2,
    borderRadius: 12,
    padding: 16,
    ...getShadow(16)
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

