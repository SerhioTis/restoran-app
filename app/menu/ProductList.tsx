import Image from 'next/image';

import { Product } from 'types/products';

interface ProductListProps {
  productList: Record<string, Product[]>;
}

export const ProductList = async ({ productList }: ProductListProps) => {
  const productSubtypesList = Object.keys(productList);

  return (
    <div>
      {!!productSubtypesList.length &&
        productSubtypesList.map((productSubtype) => {
          const products = productList[productSubtype];

          return (
            <div key={productSubtype}>
              {products.length && (
                <>
                  <h1 className="pb-10 pt-5 text-3xl font-bold">
                    {productSubtype}
                  </h1>

                  <div className="flex flex-col gap-6 divide-y-2">
                    {products.map((product) => (
                      <article
                        className="flex justify-between"
                        key={product.id}
                      >
                        <div>
                          <h4>{product.title}</h4>
                          <p>{product.price} ₴</p>
                          <p>{product.weight}</p>
                        </div>

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
                      </article>
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
