import { redirect } from 'next/navigation';

import { getAllProductsTypes, getProductsByType } from '@/actions/products';
import { PRODUCTS_TYPE } from '@/types/products';
import { menuTypesList } from '@/utils/menu';

import { GroupedProductsList } from './GroupedProductsList';
import { NavBar } from './NavBar';
import {
  groupProductListBySubtype,
  groupProductSubtypesListByType,
} from './helpers';

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
  const parsedProductSubTypes = groupProductSubtypesListByType(productSubTypes);

  return (
    <main className="mx-auto grid max-w-3xl grid-cols-3">
      <NavBar productSubTypes={parsedProductSubTypes} />

      <GroupedProductsList productList={parsedProductList} />
    </main>
  );
}
