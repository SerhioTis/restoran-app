import { Product } from '@/types/products';

import { ProductCard } from '../ProductCard';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="divide-y">
      {products.map((product) => (
        <ProductCard key={product.id} showActions product={product} />
      ))}
    </div>
  );
};
