'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { createOrderWithProducts } from '@/actions/orders';
import { AlertDialog } from '@/components/sheared/Alert';
import { toast } from '@/components/ui/use-toast';
import { useBusketsStore } from '@/stores/useBusketsStore';
import { usePageLoadingStore } from '@/stores/usePageLoadingStore';

export const OrderDetails = () => {
  const { data: session, status } = useSession();
  const isAuthorized = status === 'authenticated';

  const router = useRouter();

  const setIsLoading = usePageLoadingStore((state) => state.setLoading);
  const busket = useBusketsStore((state) => state.busket);
  const clearBusket = useBusketsStore((state) => state.clearBusket);
  const totalCost = useBusketsStore((state) =>
    state.busket.reduce((acc, current) => (acc += current.price), 0),
  );
  const countOfOrders = busket.length;

  const handleOrder = async () => {
    try {
      setIsLoading(true);
      if (!busket?.length || !session?.user?.id) return;

      const productIds = busket.map((item) => item.id);
      await createOrderWithProducts(
        {
          status: 'processing',
          totalCost,
          totalProducts: productIds.length,
          userId: session.user.id,
          comment: '',
        },
        productIds,
      );
      clearBusket();
      router.push('/orders');
    } catch (error) {
      console.log(error);

      toast({
        description: 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="divide-y">
      <h2 className="pb-2 text-3xl font-bold">Order Details</h2>

      <div className="py-2 text-xl">
        <div>Total cost: {totalCost} ₴</div>
        <div>Products count: {countOfOrders}</div>
        <div>
          Customer email:
          {isAuthorized ? session?.user?.email : 'You should sign in first'}
        </div>
      </div>

      <div className="pt-2">
        <AlertDialog
          descriptionText="Ми створимо замовлення на продукти, які зараз у корзині."
          titleText="Ви впевнені?"
          triggerText="Створити замовлення"
          onConfirm={handleOrder}
          triggerDisabled={!isAuthorized}
        />
      </div>
    </div>
  );
};
