import Image from 'next/image';

import { Product } from '@/types/products';

import { ProductActions } from './ProductActions/ProductActions';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="flex justify-between" key={product.id}>
      <div>
        <h4>{product.title}</h4>
        <p>{product.price} ₴</p>
        <p>{product.weight}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative h-full w-40">
          {product.image && (
            <Image
              width={160}
              height={128}
              className="rounded object-cover"
              src={product.image}
              alt="product img"
            />
          )}
          <ProductActions product={product} />
        </div>
      </div>
    </article>
  );
};
