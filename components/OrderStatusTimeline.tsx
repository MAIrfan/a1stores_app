import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const statuses = [
  { label: "Order Confirmed", value: "confirmed" },
  { label: "Preparing", value: "preparing" },
  { label: "Out for delivery", value: "delivering" },
  { label: "Delivered", value: "delivered" },
];

type OrderStatusTimelineProps = {
  timeline: {
    status: string;
    date: string;
  }[];
};

export const OrderStatusTimeline = ({ timeline }: OrderStatusTimelineProps) => {
  return (
    <View style={styles.container}>
      {statuses.map((status, index) => {
        const timelineEntry = timeline.find((t) => t.status === status.value);
        const isCompleted = !!timelineEntry;

        return (
          <View key={status.value} style={styles.statusContainer}>
            <MaterialIcons
              name="check-circle"
              size={24}
              color={isCompleted ? "green" : "gray"}
            />
            {index < statuses.length - 1 && (
              <View
                style={[
                  styles.bar,
                  { backgroundColor: isCompleted ? "green" : "gray" },
                ]}
              />
            )}
            <View style={styles.textContainer}>
              <Text style={[styles.statusText, isCompleted && styles.completedText]}>
                {status.label}
              </Text>
              <Text style={styles.timelineText}>{timelineEntry?.date || "N/A"}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    marginLeft: 16,
  },
  statusText: {
    fontSize: 16,
    color: "gray",
  },
  completedText: {
    color: "green",
    fontWeight: "bold",
  },
  timelineText: {
    fontSize: 14,
    color: "gray",
  },
  bar: {
    position: "absolute",
    top: 50,
    left: 30,
    right: 0,
    height: 70,
    width: 4,
  },
});
