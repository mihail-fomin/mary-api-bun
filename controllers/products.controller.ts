import db from "../db";

export const createProduct = async (req, res) => {
  const {
    title,
    price,
    weight,
    description,
    category,
    imageUrl,
  } = req.body

  try {
    const insertProductQuery = `
    INSERT INTO products (id, title, price, weight, description, category, imageUrl)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
    const newProduct = await db.query(insertProductQuery)
    // Сохраните новый продукт в базе данных (если используете базу данных)

    // Отправьте успешный ответ
    res.json({ message: 'Product created', product: newProduct });
  } catch (error) {
    // Обработка ошибок, если что-то пошло не так
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
export const getProducts = async (req, res) => {

}
export const getOneProduct = async (req, res) => {

}
export const updateProduct = async (req, res) => {

}
export const deleteProduct = async (req, res) => {

}