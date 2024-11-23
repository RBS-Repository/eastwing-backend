const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');

const app = express();

const corsOptions = {
  origin: [
    'https://eastwing-git-main-sobels-projects.vercel.app', 
    'https://eastwing-mtk0zk5wc-sobels-projects.vercel.app',
    'https://eastwing23-jwycxvipd-sobels-projects.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/product', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Eastwing Coffee Shop API is running');
});
// Start server1
// Start server2
// Start server3
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
