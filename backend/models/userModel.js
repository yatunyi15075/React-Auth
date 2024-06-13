// userModel.js

import db from '../config.js';
import bcrypt from 'bcryptjs';

// Function to create a new user
export const createUser = async (fullName, email, hashedPassword) => { // Updated parameter to use hashedPassword
  const [result] = await db.execute('INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)', [fullName, email, hashedPassword]);
  return result.insertId;
};

// Function to get a user by email
export const getUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};
