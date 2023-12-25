'use client';
import { Link } from 'lucide-react';

import { useBusketsStore } from '@/stores/useBusketsStore';

import { OrderDetails } from './OrderDetails';
import { OrderList } from './OrderList';

export const OrderDashboard = () => {
  const countOfOrders = useBusketsStore((state) => state.busket.length);

  const isEmpty = !countOfOrders;

  if (isEmpty)
    return (
      <div className="text-center text-xl">
        <div>
          <p>Busket is empty</p>
          <p>
            Add products to busket&nbsp;
            <Link
              href="/menu?type=СНІДАНКИ"
              className="text-[#3399ff] underline"
            >
              here
            </Link>
          </p>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <OrderList />
      </div>

      <OrderDetails />
    </div>
  );
};
