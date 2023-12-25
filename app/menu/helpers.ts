import { PRODUCTS_TYPE, Product } from '@/types/products';
import { groupBy } from '@/utils/groupBy';
import { menuTypesList } from '@/utils/menu';

export const groupProductListBySubtype = (products: Product[]) => {
  return groupBy(products, (product) => product.sub_type);
};

export const groupProductSubtypesListByType = (
  productSubTypes: {
    type: PRODUCTS_TYPE;
    sub_type: string;
  }[],
) => {
  return menuTypesList.reduce<Record<string, string[]>>((acc, value) => {
    acc[value] = productSubTypes
      .filter((item) => item.type === value)
      .map((item) => item.sub_type);

    return acc;
  }, {});
};
