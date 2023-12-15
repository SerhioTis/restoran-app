import Image from 'next/image';

import { Product } from '@/types/products';

import ProductActions from './productActions';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="flex justify-between" key={product.id}>
      <div>
        <h4>{product.title}</h4>
        <p>{product.price} ₴</p>
        <p>{product.weight}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="w-40">
          {product.image && (
            <Image
              width={160}
              height={128}
              className="rounded object-cover"
              src={product.image}
              alt="product img"
            />
          )}
        </div>

        <div>
          <ProductActions product={product} />
        </div>
      </div>
    </article>
  );
}
