import { Router } from 'express';
import Guest from '../models/Guest';
import auth from '../middleware/auth'; // ✅ Import auth middleware

const router = Router();

// Register a guest
router.post('/register', async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json({ message: 'Guest registered successfully' });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all guests
router.get('/all', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 🔐 Protected route: Get guest stats (only for authenticated admin)
router.get('/stats', auth, async (req, res) => {
  try {
    const totalGuests = await Guest.countDocuments();
    res.json({ totalGuests });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

