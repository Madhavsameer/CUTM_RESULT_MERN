// server.js

const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const cors = require('cors');



const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb://localhost:27017/my_mern_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('MongoDB Atlas connection error:', error);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
