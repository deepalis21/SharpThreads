const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const MONGO_URI = 'mongodb+srv://singhdeepali650:ytP0krJdT42WZOEz@cluster0.mwxt1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI


const app = express();
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // Enable CORS for all routes
app.use('/api/users', userRoutes); 
// MongoDB connection URI (use your actual MongoDB URI here)

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5175;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
