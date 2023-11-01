import postgres from "pg";

const pool = new postgres.Pool({
  user: "postgres",
  password: "0000",
  host: "localhost",
  port: 5432,
  database: "mary_db",
});

export default pool