'use client';
import { ProductList } from '@/components/sheared/ProductList/ProductList';
import { useBusketsStore } from '@/stores/useBusketsStore';

export const OrderList = () => {
  const busket = useBusketsStore((state) =>
    state.busket.filter(
      (value, index, array) =>
        array.findIndex((inner) => inner.id === value.id) === index,
    ),
  );

  return <ProductList products={busket} />;
};
