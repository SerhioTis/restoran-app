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
