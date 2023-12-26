'use client';
import { useLayoutEffect, useRef } from 'react';

import { ProductList } from '@/components/sheared/ProductList/ProductList';
import { Product } from '@/types/products';

import { useSubtypeIntersection } from './store';

interface ProductListProps {
  productList: Record<string, Product[]>;
}

export const GroupedProductsList = ({ productList }: ProductListProps) => {
  const productSubtypesList = Object.keys(productList);

  const setSubtype = useSubtypeIntersection((state) => state.setSubtype);
  const intersectionObserver = useRef<IntersectionObserver>();

  useLayoutEffect(() => {
    setSubtype(productSubtypesList.at(0) ?? '');

    intersectionObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSubtype((entry.target as HTMLDivElement).dataset.subtype ?? '');
        }
      });
    });
  }, []);

  return (
    <div className="col-span-2 space-y-5">
      {!!productSubtypesList.length &&
        productSubtypesList.map((productSubtype) => {
          const products = productList[productSubtype];

          return (
            <div
              key={productSubtype}
              id={productSubtype}
              data-subtype={productSubtype}
              ref={(el) => {
                el && intersectionObserver.current?.observe(el);
              }}
            >
              <h1 className="pb-10 pt-5 text-3xl font-bold">
                {productSubtype}
              </h1>

              <ProductList products={products} />
            </div>
          );
        })}
    </div>
  );
};
