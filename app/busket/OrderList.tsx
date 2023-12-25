'use client';
import { ProductList } from '@/components/sheared/ProductList/ProductList';
import { useBusketsStore } from '@/stores/useBusketsStore';

export const OrderList = () => {
  const busket = useBusketsStore((state) => state.busket);

  return <ProductList products={busket} />;
};
