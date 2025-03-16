import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";

type PackageCardProps = {
  item: {
    image: ImageSourcePropType;
  };
  size: number;
  onPress: () => void;
};

export const PackageCard = ({ item, size, onPress }: PackageCardProps) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={item.image}
      style={{
        width: size,
        height: size / 1.8,
        borderRadius: 12,
        overflow: "hidden",
      }}
      resizeMethod="scale"
    />
  </TouchableOpacity>
);
