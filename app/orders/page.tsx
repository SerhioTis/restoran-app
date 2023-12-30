import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { getUserOrders } from '@/actions/orders';
import { OrdersTable } from '@/components/sheared/OrdersTable';

import { authOptions } from '../api/auth/[...nextauth]/options';

import { ProductModal } from './ProductsModal';

export default async function Orders() {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/');

  const orders = await getUserOrders(session?.user?.id);

  return (
    <div className="px-24 pt-4">
      <ProductModal />
      <OrdersTable orders={orders} />
    </div>
  );
}
