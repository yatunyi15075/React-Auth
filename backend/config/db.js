import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

pool.getConnection()
    .then(conn => {
        console.log('Connected to MySQL');
        conn.release();
    })
    .catch(err => {
        console.error('Unable to connect to MySQL:', err.message);
    });

export default pool;
