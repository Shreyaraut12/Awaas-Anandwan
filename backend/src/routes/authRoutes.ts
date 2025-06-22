import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

const router = express.Router();

// Register Admin (one-time)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = await Admin.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Admin already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const admin = new Admin({ email, password: hashed });
  await admin.save();
  res.status(201).json({ message: 'Admin registered' });
});

// Login Admin
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(404).json({ message: 'Admin not found' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secretKey');
  res.json({ token });
});

export default router;
