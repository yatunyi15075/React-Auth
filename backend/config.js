import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = await mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

export default {
  db,
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key',
  serverPort: process.env.PORT || 5000,
};
