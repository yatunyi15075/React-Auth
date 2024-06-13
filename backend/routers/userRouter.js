import express from 'express';
import { registerUser, loginUser } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/test', (req, res) => {
    console.log('Test Route Received Data:', req.body);
    res.status(200).json({ receivedData: req.body });
  });
  

export default router;
