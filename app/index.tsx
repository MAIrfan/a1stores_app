import React, { useState, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import {
  SafeAreaView,
  ProductCard,
  Search,
  Packages,
  Categories,
  SubCategories,
  HomeHeader,
} from "../components";
import {
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
  SEARCH_HEIGHT,
  STICKY_SUB_CATEGORIES_HEIGHT,
  Colors,
} from "@/constants";

const products: any[] = [
  {
    id: '1',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 1360,
    stock: 100,
    sku: '1',
    image: require('../assets/products/1.png'),
    category_id: '1',
    discount: 0,
    unitQty: 10,
    unitType: 'kg'
  },
  {
    id: '2',
    title: 'A-1 Raiwind HMT Basmati Rice',
    mrp: 700,
    stock: 100,
    sku: '2',
    image: require('../assets/products/2.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '3',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '3',
    image: require('../assets/products/3.png'),
    category_id: '1',
    discount: 20,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '4',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '4',
    image: require('../assets/products/4.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '5',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '5',
    image: require('../assets/products/5.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '6',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '6',
    image: require('../assets/products/6.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '7',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '7',
    image: require('../assets/products/7.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '8',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '8',
    image: require('../assets/products/8.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '9',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '9',
    image: require('../assets/products/9.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '10',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '10',
    image: require('../assets/products/10.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '11',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '11',
    image: require('../assets/products/11.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '12',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '12',
    image: require('../assets/products/12.png'),
    category_id: '1',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '13',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 1360,
    stock: 100,
    sku: '13',
    image: require('../assets/products/13.png'),
    category_id: '2',
    discount: 0,
    unitQty: 10,
    unitType: 'kg'
  },
  {
    id: '14',
    title: 'A-1 Raiwind HMT Basmati Rice',
    mrp: 700,
    stock: 100,
    sku: '14',
    image: require('../assets/products/14.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '15',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '15',
    image: require('../assets/products/15.png'),
    category_id: '2',
    discount: 20,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '16',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '16',
    image: require('../assets/products/16.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '17',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '17',
    image: require('../assets/products/17.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '18',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '18',
    image: require('../assets/products/18.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '19',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '19',
    image: require('../assets/products/19.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '20',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '20',
    image: require('../assets/products/20.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '21',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '21',
    image: require('../assets/products/21.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '22',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '22',
    image: require('../assets/products/22.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '23',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '23',
    image: require('../assets/products/23.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
  {
    id: '24',
    title: 'A-1 Raiwind HMT Zeera Rice',
    mrp: 500,
    stock: 100,
    sku: '24',
    image: require('../assets/products/24.png'),
    category_id: '2',
    discount: 0,
    unitQty: 1,
    unitType: 'kg'
  },
];

export default function Home() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  
  const searchOpacity = scrollY.interpolate({
    inputRange: [HEADER_HEIGHT, SEARCH_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const searchTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [-SEARCH_HEIGHT, 0],
    extrapolate: "clamp",
  });

  const subCategoriesOpacity = scrollY.interpolate({
    inputRange: [STICKY_SUB_CATEGORIES_HEIGHT, STICKY_SUB_CATEGORIES_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const subCategoriesTranslateY = scrollY.interpolate({
    inputRange: [STICKY_SUB_CATEGORIES_HEIGHT, STICKY_SUB_CATEGORIES_HEIGHT],
    outputRange: [-STICKY_SUB_CATEGORIES_HEIGHT, 0],
    extrapolate: "clamp",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRefs = useRef<FlatList[]>([]);
  const isSyncing = useRef(false);

  const syncScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    sourceIndex: number
  ) => {
    if (isSyncing.current) return;
    isSyncing.current = true;

    const offset = event.nativeEvent.contentOffset.x;
    listRefs.current.forEach((ref, i) => {
      if (i !== sourceIndex && ref) {
        ref.scrollToOffset({ offset, animated: false });
      }
    });

    setTimeout(() => (isSyncing.current = false), 0);
  };

  const SECTIONS = [
    {
      id: 1,
      content: <HomeHeader />,
    },
    {
      id: 2,
      content: <Search />,
    },
    {
      id: 3,
      content: <Packages />,
    },
    {
      id: 4,
      content: <Categories />,
    },
    {
      id: 5,
      content: (
        <SubCategories
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          listRefs={listRefs}
          listIndex={1}
          syncScroll={syncScroll}
        />
      ),
    },
  ];

  return (
    <>
      <SafeAreaView color={Colors.primary} />

      <Animated.View
        style={[
          styles.stickyHeader,
          styles.stickySearch,
          {
            opacity: searchOpacity,
            transform: [
              { translateY: searchTranslateY }
            ],
          }
        ]}
      >
        <Search />
      </Animated.View>
      <Animated.View
        style={[
          styles.stickyHeader,
          styles.stickySubCategories,
          { opacity: subCategoriesOpacity, transform: [{ translateY: subCategoriesTranslateY }] },
        ]}
      >
        <SubCategories
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          listRefs={listRefs}
          listIndex={1}
          syncScroll={syncScroll}
        />
      </Animated.View>

      <Animated.FlatList
        data={SECTIONS}
        renderItem={({ item }) => item.content}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        ListFooterComponent={() => (
          <FlatList
            data={products}
            renderItem={({ item, index }) => (
              <ProductCard item={item} index={index} />
            )}
            contentContainerStyle={styles.productList}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            initialNumToRender={2}
            maxToRenderPerBatch={2}
            windowSize={2}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  stickyHeader: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
  },
  stickySearch: {
    top: STATUS_BAR_HEIGHT,
  },
  stickySubCategories: {
    top: STATUS_BAR_HEIGHT + SEARCH_HEIGHT,
  },
  productList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  item: {
    height: 200,
    width: "48%",
    margin: "1%",
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
