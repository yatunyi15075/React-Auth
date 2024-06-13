// index.js
import express from 'express';
import dotenv from 'dotenv';
import router from './routers/userRouter.js';
import config from './config.js';

dotenv.config();

const app = express();
app.use(express.json());  // This line is critical for parsing JSON bodies

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body);
  next();
});

app.use('/api/users', router);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
