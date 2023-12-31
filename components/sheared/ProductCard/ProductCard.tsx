import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Product } from '@/types/products';

const ProductActions = dynamic(() => import('./ProductActions'), {
  ssr: false,
});

interface ProductCardProps {
  product: Product;
  showActions?: boolean;
}

export const ProductCard = ({ product, showActions }: ProductCardProps) => {
  return (
    <article
      className="flex justify-between py-4 first:pt-0 last:pb-0"
      key={product.id}
    >
      <div>
        <h4>{product.title}</h4>
        <p>{product.price} ₴</p>
        <p>{product.weight}</p>
        <p>{product.description}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative h-full w-40">
          {product.image && (
            <Image
              width={160}
              height={128}
              className="rounded object-cover"
              src={product.image}
              alt={product.title}
            />
          )}
          {showActions && <ProductActions product={product} />}
        </div>
      </div>
    </article>
  );
};
