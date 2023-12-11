import { redirect } from 'next/navigation';

import { getAllProductsTypes, getProductsByType } from 'actions/products';
import { PRODUCTS_TYPE } from 'types/products';
import { menuTypesList } from 'utils/menu';

import { NavBar } from './NavBar';
import { ProductList } from './ProductList';
import { groupProductListBySuptype } from './helpers';

interface PageProps {
  searchParams: {
    type: PRODUCTS_TYPE;
  };
}

export default async function Page({ searchParams }: PageProps) {
  if (!menuTypesList.includes(decodeURI(searchParams.type) as PRODUCTS_TYPE))
    redirect(`/menu?type=${encodeURI(PRODUCTS_TYPE.BREAKFASTS)}`);

  const products = await getProductsByType(searchParams.type);

  const parsedProductList = groupProductListBySuptype(products);

  const productSubTypes = await getAllProductsTypes();

  const parsedProductSubTypes = menuTypesList.reduce<Record<string, string[]>>(
    (acc, value) => {
      return {
        ...acc,
        [value]: [
          ...new Set(
            productSubTypes
              .filter((item) => item.type === value)
              .map((item) => item.sub_type),
          ),
        ],
      };
    },
    {},
  );

  return (
    <main className="mx-auto flex max-w-3xl">
      <NavBar productSubTypes={parsedProductSubTypes} />

      <ProductList productList={parsedProductList} />
    </main>
  );
}
