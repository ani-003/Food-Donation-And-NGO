import express from 'express';
import Signup from '../models/signup.js'; // Import the Signup model
import bcrypt from 'bcrypt'; // For password hashing
import jwt from 'jsonwebtoken'; // For generating JWTs

const router = express.Router();

// Secret key for JWT
const JWT_SECRET = 'your_secret_key'; // Replace with an environment variable in a real application

// Route to handle form submissions
router.post('/api/signup', async (req, res) => {
  const { name, email, addresso, pincode, phoneNumber, username, password } = req.body;

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new signup entry with the hashed password
    const newSignup = new Signup({
      name,
      email,
      addresso,
      pincode,
      phoneNumber,
      username,
      password: hashedPassword // Store the hashed password
    });

    console.log('Received data:', { name, email, addresso, pincode, phoneNumber, username, password: hashedPassword });

    // Save to the database
    await newSignup.save();

    // Generate a JWT token
    const token = jwt.sign({ username: newSignup.username, id: newSignup._id }, JWT_SECRET, { expiresIn: '1h' });

    // Send the token in a cookie
    res.cookie('token', token, { httpOnly: true });

    res.status(201).json({ message: 'Signup data saved successfully' });
  } catch (error) {
    console.error('Error saving signup data:', error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

export default router;
