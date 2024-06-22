// userControllers.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import * as UserModel from '../models/userModel.js';

const jwtSecret = config.jwtSecret;

// Register User
export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  // Log the incoming request body for debugging
  console.log('Received Data:', req.body);

  // Check for missing fields
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword); // Debugging: Log hashed password

    const userId = await UserModel.createUser(fullName, email, hashedPassword);
    console.log('User ID:', userId); // Debugging: Log user ID returned from createUser

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Registration Error:', error); // Debugging: Log registration error
    res.status(500).json({ error: 'User registration failed', details: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Log the incoming request body for debugging
  console.log('Login Data:', req.body);

  // Check for missing fields
  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await UserModel.getUserByEmail(email);
    console.log('User Found:', user); // Debugging: Log user data

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password Valid:', isPasswordValid); // Debugging: Log password validation result

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Check if the JWT secret is properly loaded
    if (!jwtSecret) {
      console.error('JWT secret not found');
      return res.status(500).json({ error: 'Internal server error' });
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    console.log('JWT Token:', token); // Debugging: Log JWT token

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error); // Debugging: Log login error
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
};