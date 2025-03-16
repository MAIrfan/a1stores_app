export type Variant = {
  id: number;
  variant: string;
  mrp: number;
  stock: number;
  discount: number;
  stock_quantity: number;
  product_id: number;
  name: string;
  description: string;
  category_id: number;
  images: string[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  category_id: number;
  images: string[];
  reviews: {
    rating: number;
    count: number;
  };
  variants: {
    id: number;
    name: string;
    mrp: number;
    stock: number;
    discount: number;
    stock_quantity: number;
  }[];
  attributes: {
    id: number;
    name: string;
    value: string;
  }[];
};

export type Category = {
  id: number;
  name: string;
  image: string;
  parent_id: number | null;
  sub_categories?: Category[];
};

export type Address = {
  id: string;
  type: string;
  address: string;
  isDefault?: boolean;
};

export type CartItem = {
  product_name: string;
  variant_name: string;
  variant_id: number;
  quantity: number;
  price: number;
  image: string;
  total_price: number;
}

export type Cart = {
  items: CartItem[];
  cart_total: number;
  shipping_charge: number;
  packaging_cost: number;
  saving: number;
  delivery_type: string;
  address: Address;
}

export type OrderType = "delivery" | "pickup";
export type OrderStatus =
  | "confirmed"
  | "preparing"
  | "delivering"
  | "delivered"
  | "failed"
  | "cancelled"
  | "pickup"
  | "completed";
export type OrderItem = {
  product_name: string;
  variant_name: string;
  variant_id: number;
  quantity: number;
  price: number;
  image: string;
  total_price: number;
};
export type Order = {
  id: string;
  status: OrderStatus;
  otp: number;
  store: string;
  type: OrderType;
  date: string;
  address?: string;
  time?: string;
  recipient_name?: string;
  recipient_number?: string;
  items: OrderItem[];
};
export type OrderCardProps = {
  type: OrderType;
  order: Order;
};
