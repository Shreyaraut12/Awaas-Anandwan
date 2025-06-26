import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

const router = Router();

// SECRET KEY (for demo use env variable in production!)
const JWT_SECRET = 'your_jwt_secret_key';

// ============================
// Register admin
// ============================
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      username,
      password: hashedPassword
    });

    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// ============================
// Login admin with JWT
// ============================
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// ============================
// Get all admins (testing)
// ============================
router.get('/all', async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
