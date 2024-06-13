// index.js
import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import config from './config.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
