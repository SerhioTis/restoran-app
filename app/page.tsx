import { getProductsByType } from "actions/products";
import { PRODUCTS } from "types/products";

export default async function Home() {
  // const products = await getProducts()
  const breakfasts = await getProductsByType(PRODUCTS.ALCOHOL)
  

  return <pre>{JSON.stringify(breakfasts, null, 2)}</pre>;
}
