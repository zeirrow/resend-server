import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/email.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import config from './config/env.config.js';

const app = express();

// Middlewares
app.use(
  cors({
    origin: [`http://localhost:${config.PORT}`, 'https://your-frontend-domain.com'],
    methods: ['POST'],
  })
);
app.use(express.json());

// Routes
app.use('/api/email', emailRoutes);

// Error handling
app.use(errorHandler);

export default app;
