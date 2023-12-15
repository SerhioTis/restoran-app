import { ProductCard } from '@/components/sheared/ProductCard';
import { Product } from 'types/products';

interface ProductListProps {
  productList: Record<string, Product[]>;
}

export const ProductList = async ({ productList }: ProductListProps) => {
  const productSubtypesList = Object.keys(productList);

  return (
    <div className="col-span-2">
      {!!productSubtypesList.length &&
        productSubtypesList.map((productSubtype) => {
          const products = productList[productSubtype];

          return (
            <div key={productSubtype}>
              {products.length > 0 && (
                <>
                  <h1 className="pb-10 pt-5 text-3xl font-bold">
                    {productSubtype}
                  </h1>

                  <div className="flex flex-col gap-6 divide-y-2">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};
