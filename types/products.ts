export enum PRODUCTS_TYPE {
  BREAKFASTS = 'СНІДАНКИ',
  MENUS = 'МЕНЮ',
  DRINKS = 'НАПОЇ',
  ALCOHOL = 'АЛКОГОЛЬ',
}

export type Product = {
  id: number;
  price: number;
  title: string;
  weight: string;
  image: string;
  description: string;
  type: PRODUCTS_TYPE;
  sub_type: string;
};
