'use client';
import { Fragment } from 'react';

import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { AlertDialog } from '@/components/sheared/Alert';
import { ProductCard } from '@/components/sheared/ProductCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useBusketsStore } from '@/stores/useBusketsStore';

export default function Busket() {
  const { data: session, status } = useSession();
  const busket = useBusketsStore((state) => state.busket);
  const countOfOrders = busket.length;
  const totalCost = useBusketsStore((state) =>
    state.busket.reduce((acc, current) => (acc += current.price), 0),
  );
  const isEmpty = !countOfOrders;
  const isAuthorized = status === 'authenticated';

  const handleOrder = () => {
    console.log('order', busket);
  };

  return (
    <div className="mx-24 flex flex-col justify-center gap-5 pt-10">
      {!isAuthorized && (
        <Alert className="w-[400px]">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Alert!</AlertTitle>
          <AlertDescription>
            To create an order, you slould
            <Link href="/sign-in" className="text-[#3399ff] underline">
              sign in
            </Link>
            first
          </AlertDescription>
        </Alert>
      )}

      <div className="text-center text-xl">
        {isEmpty && (
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
        )}
      </div>

      {!isEmpty && (
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col gap-4">
            {busket.map((product) => (
              <Fragment key={product.id}>
                <ProductCard product={product} />
                <Separator className="my-1" />
              </Fragment>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold">Order Details</h2>
            <Separator className="my-2" />
            <div className="text-xl">
              <div>Total cost: {totalCost} ₴</div>
              <div>Products count: {countOfOrders}</div>
              <div>
                Customer email:
                {isAuthorized
                  ? session?.user?.email
                  : 'You should sign in first'}
              </div>
            </div>
            <Separator className="my-4" />

            <AlertDialog
              descriptionText="We will create an order of products that currently in busket"
              titleText="Are you sure?"
              triggerText="Create an order"
              onConfirm={handleOrder}
              triggerDisabled={!isAuthorized}
            />
          </div>
        </div>
      )}
    </div>
  );
}
