import { Router } from 'express';
import Guest from '../models/Guest';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json({ message: 'Guest registered successfully' });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
