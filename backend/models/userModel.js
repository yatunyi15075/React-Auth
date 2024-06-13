// userModel.js
import config from '../config.js';

const db = config.db;

// Function to create a new user
export const createUser = async (fullName, email, password) => {
  const [result] = await db.execute('INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)', [fullName, email, password]);
  return result.insertId;
};

// Function to get a user by email
export const getUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};
