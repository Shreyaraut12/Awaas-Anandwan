import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes';
import guestRoutes from './routes/guestRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/guests', guestRoutes);

app.get('/', (_req, res) => {
  res.send('API is working 🚀');
});

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
