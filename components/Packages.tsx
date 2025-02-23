import { useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, Image } from "react-native";

import { Colors, PACKAGES_HEIGHT } from "@/constants";
import { getShadow } from "@/helpers/shadow";

const SPACING = 16;
const CARD_HEIGHT = PACKAGES_HEIGHT * 0.7;
const CARD_WIDTH = PACKAGES_HEIGHT + (SPACING * 2);

export const packages = [
  {
    id: 1,
    image: require('@/assets/products/c1.jpg'),
  },
  {
    id: 2,
    image: require('@/assets/products/c2.jpg'),
  },
  {
    id: 3,
    image: require('@/assets/products/c3.jpg'),
  },
  {
    id: 4,
    image: require('@/assets/products/c4.jpg'),
  },
  {
    id: 5,
    image: require('@/assets/products/c5.jpg'),
  },
];

export const Packages = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_WIDTH);
    setActiveIndex(index);
  };

  const getInputRange = (index: number) => [
    (index - 1) * (CARD_WIDTH - SPACING),
    index * (CARD_WIDTH - SPACING),
    (index + 1) * (CARD_WIDTH - SPACING),
  ];
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.header}>
        <Text style={styles.title}>Packages</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
            listener: handleScroll
          }
        )}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH}
        snapToAlignment="center"
      >
        {packages.map((pkg, index) => {
          const inputRange = getInputRange(index);

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={pkg.id}
              style={[
                styles.card,
                {
                  transform: [{ scale }],
                  opacity,
                },
              ]}
            >
              <Image source={pkg.image} style={styles.image} />
            </Animated.View>
          );
        })}
      </Animated.ScrollView>

      <View style={styles.pagination}>
        {packages.map((_, index) => {
          const inputRange = getInputRange(index);

          const scaleX = scrollX.interpolate({
            inputRange,
            outputRange: [1, 3, 1],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.paginationDot,
                {
                  opacity,
                  transform: [{ scaleX }],
                  ...(index === activeIndex && styles.paginationDotActive),
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: PACKAGES_HEIGHT,
    backgroundColor: Colors.background,
    paddingTop: SPACING,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  viewAll: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    marginRight: SPACING,
    backgroundColor: Colors.background,
    borderRadius: SPACING,
    overflow: 'hidden',
    ...getShadow(8)
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: Colors.lightGrey,
  },
  paginationDotActive: {
    width: 8,
    borderRadius: 2,
    marginHorizontal: 10,
    backgroundColor: Colors.primary,
  },
});
