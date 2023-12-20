'use server';
import { PRODUCTS_TYPE, Product } from '@/types/products';
import { pool } from 'database';

export const getProducts = async () => {
  const data = await pool.query('SELECT * FROM PRODUCTS');
  return data.rows;
};

export const getProductsByType = async (type: PRODUCTS_TYPE) => {
  const data = await pool.query<Product>(
    'SELECT * FROM products WHERE type = $1',
    [type],
  );

  return data.rows;
};

export const getAllProductsTypes = async () => {
  const data = await pool.query<{ type: PRODUCTS_TYPE; sub_type: string }>(
    'SELECT DISTINCT sub_type, type  FROM products',
  );

  return data.rows;
};
