import postgres from "pg";

export const pool = new postgres.Pool({
  user: "postgres",
  password: "110795",
  host: "localhost",
  port: 5432,
  database: "new_db",
});

