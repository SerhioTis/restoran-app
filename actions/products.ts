'use server';
import { pool } from 'database';
import { PRODUCTS_TYPE } from 'types/products';

export const getProducts = async () => {
  const data = await pool.query('SELECT * FROM PRODUCTS');
  return data.rows;
};

export const getProductsByType = async (type: PRODUCTS_TYPE) => {
  const data = await pool.query<any, [PRODUCTS_TYPE]>(
    'SELECT * FROM PRODUCTS WHERE type = $1',
    [type],
  );

  return data.rows;
};

export const getAllProductsTypes = async () => {
  const data = await pool.query('SELECT DISTINCT type FROM PRODUCTS');

  return data.rows.map((item) => item?.type);
};
