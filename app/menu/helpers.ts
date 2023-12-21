import { Product } from '@/types/products';

export const groupProductListBySubtype = (products: Product[]) => {
  return products.reduce<Record<string, Product[]>>((acc, product) => {
    if (!acc[product.sub_type]) {
      acc[product.sub_type] = [];
    }

    acc[product.sub_type].push(product);

    return acc;
  }, {});
};
