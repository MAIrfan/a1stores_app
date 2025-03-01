import { Colors, ORDER_STATUS_IMAGE_HEIGHT } from "@/constants";
import { getColorOpacity } from "@/helpers/color";
import { View, Image, StyleSheet } from "react-native";

type OrderStatusCardProps = {
  status: string;
};

const statuses: any = {
  confirmed: {
    image: require("@/assets/images/confirmed.png"),
    bg: Colors.green,
  },
  preparing: {
    image: require("@/assets/images/preparing.png"),
    bg: getColorOpacity(Colors.orange, 10),
  },
  delivering: {
    image: require("@/assets/images/delivering.png"),
    bg: getColorOpacity(Colors.blue, 10),
  },
  delivered: {
    image: require("@/assets/images/delivered.png"),
    bg: Colors.green,
  },
  failed: {
    image: require("@/assets/images/failed.png"),
    bg: getColorOpacity(Colors.danger, 10),
  },
  cancelled: {
    image: require("@/assets/images/cancelled.png"),
    bg: getColorOpacity(Colors.danger, 10),
  },
  pickup: {
    image: require("@/assets/images/pickup.png"),
    bg: getColorOpacity(Colors.blue, 10),
  },
  completed: {
    image: require("@/assets/images/completed.png"),
    bg: Colors.green,
  },
};

export const OrderStatusCard = ({ status }: OrderStatusCardProps) => (
  <View style={{ position: "relative" }}>
    <View style={[styles.imageContainer, { backgroundColor: statuses[status].bg }]}>
      <Image
        source={statuses[status].image}
        style={styles.image}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: ORDER_STATUS_IMAGE_HEIGHT,
    backgroundColor: Colors.green,
    paddingTop: 24,
    position: "absolute",
    zIndex: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
