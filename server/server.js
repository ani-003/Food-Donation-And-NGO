import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // Import cookie-parser
import routes from './routes/routes.js'; // Import the main routes
import signinRoutes from './routes/signin.js'; // Import the signin route

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser

// Database connection
mongoose.connect('mongodb+srv://anirband2003:JWx4A761BjneF1pL@leflif01.ra2t2de.mongodb.net/?retryWrites=true&w=majority&appName=leflif01', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Use the routes
app.use('/', routes);
app.use('/', signinRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
