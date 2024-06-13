// userControllers.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import * as UserModel from '../models/userModel.js';

const jwtSecret = config.jwtSecret;

// Register User
export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Ensure hashing password correctly
    console.log('Hashed Password:', hashedPassword); // Debugging: Log hashed password

    const userId = await UserModel.createUser(fullName, email, hashedPassword); // Use hashedPassword here
    console.log('User ID:', userId); // Debugging: Log user ID returned from createUser

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Registration Error:', error); // Debugging: Log registration error
    res.status(500).json({ error: 'User registration failed', details: error.message });
  }
};

// Login User (remains unchanged)
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error); // Debugging: Log login error
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
};  
