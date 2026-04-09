import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import musicRoutes from './routes/music.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Entry point
app.get('/', (req: Request, res: Response) => {
  res.send('Sony Music Backend Microservice - Status: Operational (API v1)');
});

// Routing
app.use('/api/v1/music', musicRoutes);

// Server instantiation
app.listen(port, () => {
  console.log(`[server]: Headless CMS Microservice is running at http://localhost:${port}`);
});
