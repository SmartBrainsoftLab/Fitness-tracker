import express from 'express';
import { appRouter } from './routes';
import cors from "cors";
import bodyParser from 'body-parser';
import { AppDataSource } from './db.setup';

const app = express();
AppDataSource.initialize();
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node!' });
});

app.use(cors());
app.use(bodyParser());
app.use(appRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});