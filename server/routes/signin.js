import express from 'express';
import jwt from 'jsonwebtoken';
import Signup from '../models/signup.js';

const router = express.Router();

router.post('/api/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Signup.findOne({ username });
        if (user && user.password === password) { 
            // Create a token
            const token = jwt.sign({ username: user.username, id: user._id }, 'your_secret_key', { expiresIn: '1h' });

            // Send the token as a cookie
            res.cookie('token', token, {
                httpOnly: true, // Ensures the cookie is sent only via HTTP and not accessible via JavaScript
                secure: process.env.NODE_ENV === 'production', // Only send the cookie over HTTPS in production
                maxAge: 3600000 // 1 hour
            });

            console.log(`Login successful for ${username} at ${new Date().toLocaleString()}`);
            res.status(200).json({ message: 'Signin successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Signin error' });
    }
});

export default router;
