'use server'
import { pool } from "database";
import { PRODUCTS } from "types/products";

export const getProducts = async () => {
    const data = await pool.query("SELECT * FROM PRODUCTS")
    return data.rows
}

export const getProductsByType = async (type: PRODUCTS) => {   
    const data = await pool.query("SELECT * FROM PRODUCTS WHERE type = $1", [type])
    return data.rows
}
