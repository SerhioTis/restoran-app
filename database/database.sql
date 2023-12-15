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

-- CREATE TABLE IF NOT EXISTS user_session  (
--   id SERIAL PRIMARY KEY,
--   access_token TEXT NOT NULL,
--   created_at TIMESTAMP DEFAULT NOW()::TIMESTAMP,
--   user_id INTEGER
-- );