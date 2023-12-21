'use server';

import { Order } from '@/types/order';
import { pool } from 'database';

export const getUserOrders = async (userId?: string) => {
  if (!userId) return [];
  const GET_USER_ORDERS_WITH_PRODUCTS = `
    SELECT
      orders.id,
      orders.comment,
      orders.status,
      orders.totalCost as "totalCost",
      orders.totalProducts as "totalProducts",
      orders.createdAt as "createdAt",
      orders.userId,
      array_agg(
          json_build_object(
            'id', products.id,
            'title', products.title,
            'description', products.description,
            'weight', products.weight,
            'image', products.image,
            'type', products.type,
            'price', products.price 
          )
      ) AS products
    FROM
      orders
    JOIN
      order_products op ON orders.id = op.orderId
    JOIN
      products ON op.productId = products.id
    WHERE
      orders.userId = $1
    GROUP BY
      orders.id;
  `;

  const ordersRes = await pool.query<Order>(GET_USER_ORDERS_WITH_PRODUCTS, [
    userId,
  ]);

  const ordersData = ordersRes.rows;
  return ordersData;
};

export async function createOrderWithProducts(
  order: Partial<Order>,
  productIds: number[],
) {
  const client = await pool.connect();
  const { status, totalCost, totalProducts, userId, comment } = order;

  try {
    await client.query('BEGIN');

    const CREATE_ORDER_QUERY =
      'INSERT INTO orders (userId, comment, status, totalCost, totalProducts) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    const CREATE_ORDER_PRODUCTS_RELATION_QUERY =
      'INSERT INTO order_products (orderId, productId) VALUES ($1, $2)';

    const orderRes = await client.query(CREATE_ORDER_QUERY, [
      userId,
      comment,
      status,
      totalCost,
      totalProducts,
    ]);
    const orderId = orderRes.rows[0].id;

    for (let productId of productIds) {
      await client.query(CREATE_ORDER_PRODUCTS_RELATION_QUERY, [
        orderId,
        productId,
      ]);
    }

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export const declineOrder = async (orderId: string) => {
  const CHANGE_ORDER_STATUS =
    "UPDATE orders SET status = 'declined' WHERE id = $1";
  await pool.query(CHANGE_ORDER_STATUS, [orderId]);
};
