import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import * as UserModel from '../models/userModel.js';

const jwtSecret = config.jwtSecret;
const client = new OAuth2Client(process.env.CLIENT_ID);

// Verify Google token
const verifyGoogleToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  return ticket.getPayload();
};

// Register User
export const registerUser = async (req, res) => {
  const { fullName, email, password, googleToken } = req.body;

  try {
    if (googleToken) {
      const googleUser = await verifyGoogleToken(googleToken);
      if (googleUser) {
        const user = await UserModel.getUserByEmail(googleUser.email);
        if (user) {
          return res.status(400).json({ error: 'User already exists' });
        }
        const userId = await UserModel.createUser(googleUser.name, googleUser.email, null);
        const token = jwt.sign({ id: userId }, jwtSecret, { expiresIn: '1d' });
        return res.status(201).json({ token });
      } else {
        return res.status(401).json({ error: 'Invalid Google token' });
      }
    } else {
      const user = await UserModel.getUserByEmail(email);
      if (user) {
        return res.status(400).json({ error: 'User already exists' });
      }
      const userId = await UserModel.createUser(fullName, email, password);
      const token = jwt.sign({ id: userId }, jwtSecret, { expiresIn: '1d' });
      return res.status(201).json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password, googleToken } = req.body;

  try {
    if (googleToken) {
      const googleUser = await verifyGoogleToken(googleToken);
      if (googleUser) {
        let user = await UserModel.getUserByEmail(googleUser.email);
        if (!user) {
          const userId = await UserModel.createUser(googleUser.name, googleUser.email, null);
          user = { id: userId };
        }
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });
        return res.json({ token });
      } else {
        return res.status(401).json({ error: 'Invalid Google token' });
      }
    } else {
      const user = await UserModel.getUserByEmail(email);
      if (!user || !user.password || !(await UserModel.comparePassword(password, user.password))) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });
      return res.json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
