import { Product } from './products';

export type OrderStatus = 'processing' | 'delivering' | 'declined';

export type Order = {
  id: string;
  userId: string;
  products: Product[];
  status: OrderStatus;
  totalCost: number;
  totalProducts: number;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
};
