// userModel.js
import db from '../config.js';

// Function to create a new user
export const createUser = async (email, hashedPassword) => {
  const [result] = await db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
  return result.insertId;
};

// Function to get a user by email
export const getUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};