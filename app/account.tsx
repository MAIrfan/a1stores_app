import React from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { 
  ProfileIcon, 
  OrderIcon, 
  AddressIcon, 
  LogoutIcon 
} from '@/components/Icons';
import { Header } from '@/components/Header';
import { SafeAreaView } from '@/components';
import { Colors } from '@/constants';
type MenuItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  route?: string;
  onPress?: () => void;
  iconBg?: string;
};

export default function AccountScreen() {
  const menuItems: MenuItem[] = [
    {
      id: 'profile',
      title: 'Profile',
      icon: <ProfileIcon color={Colors.primary} />,
      route: 'profile',
      iconBg: Colors.primaryLight2,
    },
    {
      id: 'orders',
      title: 'My Orders',
      icon: <OrderIcon color={Colors.primary} />,
      route: 'orders',
      iconBg: Colors.primaryLight2,
    },
    {
      id: 'address',
      title: 'Address Book',
      icon: <AddressIcon color={Colors.primary} />,
      route: 'addresses',
      iconBg: Colors.primaryLight2,
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: <LogoutIcon color={Colors.primary} />,
      onPress: () => console.log('Logout pressed'),
      iconBg: Colors.danger,
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title='Account' />

      <View style={styles.menuList}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, { borderBottomWidth: item.id === 'logout' ? 0 : 1 }]}
            onPress={() => item.route ? router.push(item.route as any) : item.onPress?.()}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.iconBg }]}>
              {item.icon}
            </View>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: Colors.background,
  },
  menuList: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
  chevron: {
    fontSize: 24,
    color: Colors.primary,
  },
});
