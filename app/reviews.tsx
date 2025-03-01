import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from '@/components';
import { Header } from '@/components/Header';
import { Colors } from '@/constants';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: ImageSourcePropType;
  };
  rating: number;
  comment: string;
  timestamp: string;
}

const reviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'Courtney Henry',
      avatar: require('@/assets/images/avatar.png'),
    },
    rating: 5,
    comment: 'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
    timestamp: '2 mins ago'
  },
  {
    id: '2',
    user: {
      name: 'Cameron Williamson',
      avatar: require('@/assets/images/avatar.png'),
    },
    rating: 4,
    comment: 'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco.',
    timestamp: '2 mins ago'
  },
  {
    id: '3',
    user: {
      name: 'Jane Cooper',
      avatar: require('@/assets/images/avatar.png'),
    },
    rating: 3,
    comment: 'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco.',
    timestamp: '2 mins ago'
  },
];

const ReviewItem = ({ review }: { review: Review }) => (
  <View style={styles.reviewItem}>
    <View style={styles.reviewHeader}>
      <View style={styles.userInfo}>
        <Image source={review.user.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{review.user.name}</Text>
      </View>
      <Text style={styles.timestamp}>{review.timestamp}</Text>
    </View>
    <View style={styles.ratingContainer}>
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          source={require('@/assets/icons/favorite.png')}
          style={[
            styles.star,
            { tintColor: index < review.rating ? Colors.primary : '#E0E0E0' }
          ]}
        />
      ))}
    </View>
    <Text style={styles.comment}>{review.comment}</Text>
  </View>
);

export default function ReviewsScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Reviews" />
      
      <View style={styles.ratingOverview}>
        <Text style={styles.ratingScore}>4.0</Text>
        <View style={styles.ratingStars}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={require('@/assets/icons/favorite.png')}
              style={[
                styles.star,
                { tintColor: index < 4 ? Colors.primary : '#E0E0E0' }
              ]}
            />
          ))}
        </View>
        <Text style={styles.reviewCount}>52 Reviews</Text>
      </View>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReviewItem review={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  ratingOverview: {
    alignItems: 'center',
    marginVertical: 24,
  },
  ratingScore: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: 8,
  },
  ratingStars: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  star: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  reviewCount: {
    fontSize: 16,
    color: Colors.dark,
  },
  reviewItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark,
  },
  timestamp: {
    fontSize: 14,
    color: Colors.dark,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  comment: {
    fontSize: 14,
    color: Colors.dark,
    lineHeight: 20,
  },
}); 