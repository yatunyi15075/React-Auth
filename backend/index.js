import express from 'express';
import config from './config.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = config.serverPort;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
