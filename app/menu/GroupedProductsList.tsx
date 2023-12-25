import { ProductList } from '@/components/sheared/ProductList/ProductList';
import { Product } from '@/types/products';

interface ProductListProps {
  productList: Record<string, Product[]>;
}

export const GroupedProductsList = async ({
  productList,
}: ProductListProps) => {
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

                  <ProductList products={products} />
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};
