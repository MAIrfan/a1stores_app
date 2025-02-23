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

export const CloseIcon = () => (
  <Feather name="x" size={20} color="#fff" />
);

export const StoreIcon = () => (
  <MaterialCommunityIcons name="store" size={24} color="#fff" />
);

export const PhonepeIcon = () => (
  <MaterialCommunityIcons name="phone" size={24} color="#fff" />
);

export const ProfileIcon = () => (
  <MaterialCommunityIcons name="account" size={24} color="#fff" />
);

export const NotificationIcon = () => (
  <MaterialCommunityIcons name="bell" size={24} color="#fff" />
);

export const OrderIcon = () => (
  <MaterialCommunityIcons name="cart" size={24} color="#fff" />
);

export const AddressIcon = () => (
  <MaterialCommunityIcons name="map-marker" size={24} color="#fff" />
);

export const SecurityIcon = () => (
  <MaterialCommunityIcons name="lock" size={24} color="#fff" />
);

export const LogoutIcon = () => (
  <MaterialCommunityIcons name="logout" size={24} color="#fff" />
);

export const CameraIcon = () => (
  <MaterialCommunityIcons name="camera" size={24} color="#fff" />
);

export const EditIcon = () => (
  <MaterialCommunityIcons name="pencil" size={20} color="#17A563" />
);

export const CardIcon = () => (
  <MaterialCommunityIcons name="credit-card" size={24} color="#17A563" />
);

export const UPIIcon = () => (
  <MaterialCommunityIcons name="bank" size={24} color="#17A563" />
);

export const WalletIcon = () => (
  <MaterialCommunityIcons name="wallet" size={24} color="#17A563" />
);

export const PayLaterIcon = () => (
  <MaterialCommunityIcons name="clock" size={24} color="#17A563" />
);

export const BackIcon = () => (
  <MaterialCommunityIcons name="chevron-left" size={24} color="#06161C" />
);

export const EyeIcon = () => (
  <MaterialCommunityIcons name="eye" size={24} color="#17A563" />
);

export const LoginIcon = () => (
  <MaterialCommunityIcons name="login" size={24} color="#17A563" />
);
