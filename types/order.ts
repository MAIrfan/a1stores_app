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
  image: string;
  name: string;
  quantity: number;
  unitQty: number;
  unit: string;
  price: number;
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
  recipient_name: string;
  recipient_number: string;
  items: OrderItem[];
};
export type OrderCardProps = {
  type: OrderType;
  order: Order;
};
