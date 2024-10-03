const express = require('express');
const User = require('../models/User');
// const bcrypt = require('bcrypt');

const router = express.Router();

// Signup Route

// router.post('/signup', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password
//     console.log("Hashed Password: ", hashedPassword); // Check if password is hashed properly

//     const user = new User({ firstName, lastName, email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     res.status(400).json({ message: 'Error registering user', error });
//   }
// });

router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// Login Route


router.post('/login', async (req, res) => {
    const { firstName, lastName, password } = req.body;
  
    try {
      // Find user by firstName and lastName
      const user = await User.findOne({ firstName, lastName});
      console.log("User found: ", user); // Debugging log
  
      if (!user) {
        // If user is not found
        console.log(user);
        
        return res.status(401).json({ message: 'Invalidd credentials' });
      }
  
      // Compare the entered password with the hashed password
      const isMatch = password == user.password;
      console.log("Password match: ", isMatch); // Debugging log
  
      if (!isMatch) {
        // If password does not match
        return res.status(401).json({ message: 'Invalidd credentials' });
      }
  
      // If everything is correct
      return res.status(201).json({ message: 'Login successful' });
    } catch (error) {
      console.error("Error during login:", error); // For debugging
      res.status(500).json({ message: 'Error logging in', error });
    }
  });
  

module.exports = router;
