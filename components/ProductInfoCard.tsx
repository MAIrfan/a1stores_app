import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import { Colors } from "@/constants";

type ProductInfoCardProps = {
  value: string;
  label: string;
  image: ImageSourcePropType;
  onPress?: () => void;
};

export const ProductInfoCard = ({
  value,
  label,
  image,
  onPress = () => {},
}: ProductInfoCardProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    width: "48%",
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    gap: 16,
  },
  image: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: 2,
  },
  label: {
    fontSize: 16,
    color: Colors.grey,
  },
});
