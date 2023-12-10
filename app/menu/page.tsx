import { redirect } from 'next/navigation';

import { getProductsByType } from 'actions/products';
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

  const productSubTypes = Object.entries(parsedProductList).reduce<
    Record<string, string[]>
  >((acc, value) => {
    const subTypes = [...new Set(value[1].map((value) => value.sub_type))];

    return { ...acc, [value[0]]: subTypes };
  }, {});

  return (
    <main className="mx-auto flex max-w-3xl">
      <NavBar productSubTypes={productSubTypes} />

      <ProductList productList={parsedProductList} />
    </main>
  );
}
