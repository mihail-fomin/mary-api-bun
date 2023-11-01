CREATE TABLE products (
    id varchar(4) PRIMARY KEY,
    title varchar(255) NOT NULL,
    price numeric(10, 2) NOT NULL,
    weight numeric(10, 2),
    description text,
    category varchar(50),
    imageUrl varchar(255)
);