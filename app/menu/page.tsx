import { redirect } from 'next/navigation';

import { getAllProductsTypes, getProductsByType } from '@/actions/products';
import { PRODUCTS_TYPE } from '@/types/products';
import { menuTypesList } from '@/utils/menu';

import { NavBar } from './NavBar';
import { ProductList } from './ProductList';
import { groupProductListBySubtype } from './helpers';

interface PageProps {
  searchParams: {
    type: PRODUCTS_TYPE;
  };
}

export default async function Page({ searchParams }: PageProps) {
  if (!menuTypesList.includes(decodeURI(searchParams.type) as PRODUCTS_TYPE))
    redirect(`/menu?type=${encodeURI(PRODUCTS_TYPE.BREAKFASTS)}`);

  const [products, productSubTypes] = await Promise.all([
    getProductsByType(searchParams.type),
    getAllProductsTypes(),
  ]);

  const parsedProductList = groupProductListBySubtype(products);

  const parsedProductSubTypes = menuTypesList.reduce<Record<string, string[]>>(
    (acc, value) => {
      acc[value] = productSubTypes
        .filter((item) => item.type === value)
        .map((item) => item.sub_type);

      return acc;
    },
    {},
  );

  return (
    <main className="mx-auto grid max-w-3xl grid-cols-3">
      <NavBar productSubTypes={parsedProductSubTypes} />

      <ProductList productList={parsedProductList} />
    </main>
  );
}
