const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes'); // User-related routes

// Initialize app
const app = express();
dotenv.config();

// Middleware
const corsOption = {
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption)); // Handle CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  // To parse JSON bodies

// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://singhdeepali650:ytP0krJdT42WZOEz@cluster0.mwxt1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes); // Product-related routes
app.use('/api/cart', cartRoutes); // Cart-related routes
app.use('/api/contact', contactRoutes); // Contact form routes
app.use('/api/users', userRoutes); // User-related routes

// Basic route for testing the server
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Define the port and start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;