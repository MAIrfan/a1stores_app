import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants';

export const LocationIcon = ({ size = 24, color = Colors.background }: { size?: number, color?: string }) => (
  <MaterialCommunityIcons name="map-marker" size={size} color={color} />
);

export const CartIcon = () => (
  <MaterialCommunityIcons name="cart-outline" size={24} color="#fff" />
);

export const BellIcon = () => (
  <Feather name="bell" size={24} color="#fff" />
);

export const UserCircleIcon = () => (
  <MaterialCommunityIcons name="account-circle" size={24} color="#fff" />
);

export const SearchIcon = (props: any) => (
  <Feather name="search" size={20} color="#757575" {...props} />
);

export const ChevronDownIcon = ({ style }: { style?: any }) => (
  <Feather name="chevron-down" size={20} color="#757575" style={style}/>
);

export const PlusIcon = () => (
  <Feather name="plus" size={20} color="#fff" />
);

export const CloseIcon = ({ color = Colors.dark }: { color?: string }) => (
  <Feather name="x" size={20} color={color} />
);

export const StoreIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="store" size={24} color={color} />
);

export const PhonepeIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="phone" size={24} color={color} />
);

export const ProfileIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="account" size={24} color={color} />
);

export const NotificationIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="bell" size={24} color={color} />
);

export const OrderIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="cart" size={24} color={color} />
);

export const AddressIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="map-marker" size={24} color={color} />
);

export const SecurityIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="lock" size={24} color={color} />
);

export const LogoutIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="logout" size={24} color={color} />
);

export const CameraIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="camera" size={24} color={color} />
);

export const EditIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="pencil" size={20} color={color} />
);

export const CardIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="credit-card" size={24} color={color} />
);

export const UPIIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="bank" size={24} color={color} />
);

export const WalletIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="wallet" size={24} color={color} />
);

export const PayLaterIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="clock" size={24} color={color} />
);

export const BackIcon = ({ color = Colors.dark }: { color?: string }) => (
  <MaterialCommunityIcons name="chevron-left" size={24} color={color} />
);

export const EyeIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="eye" size={24} color={color} />
);

export const LoginIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="login" size={24} color={color} />
);

export const TimeIcon = ({ color = Colors.primary }: { color?: string }) => (
  <MaterialCommunityIcons name="clock" size={24} color={color} />
);

