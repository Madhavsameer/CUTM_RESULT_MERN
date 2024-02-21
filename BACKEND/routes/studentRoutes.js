// studentRoutes.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

// Route to search for user details by registration number
router.get('/:regNo', async (req, res) => {
  try {
    const regNo = req.params.regNo;
    const students = await Student.find({ Reg_No: regNo });
    if (students && students.length > 0) {
      res.json(students); // Sending user details as JSON response
    } else {
      res.status(404).json({ message: 'Users not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
