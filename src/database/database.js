import pg from "pg";

const { Pool } = pg;
const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "rDGmqYew^8Cyvya7",
  database: "travels"
});

export default connection;