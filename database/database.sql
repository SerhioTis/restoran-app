CREATE TYPE USER_ROLE AS ENUM ('customer', 'courier', 'admin');

CREATE TABLE IF NOT EXISTS users  (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role USER_ROLE NOT NULL
);

CREATE TABLE IF NOT EXISTS products  (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  weight TEXT NOT NULL,
  image TEXT,
  type TEXT NOT NULL,
  sub_type TEXT NOT NULL,
  price INTEGER NOT NULL
);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updatedAt = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    comment TEXT,
    status VARCHAR(50),
    totalCost INT,
    totalProducts INT,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE order_products (
    orderId INT,
    productId INT,
    PRIMARY KEY (orderId, productId),
    FOREIGN KEY (orderId) REFERENCES orders(id),
    FOREIGN KEY (productId) REFERENCES products(id)
);