// Import the express Router
const router = require('express').Router();

// Importing the model
const studentModel = require('../models/student');

const studentController = require('../controllers/studentController');

// Students route
router.get('/', studentController.getAllStudents);

router.post('/add', studentController.create);
  
  // Finds the students matching the name query from the database and returns the array
  router.post('/search', studentController.search);
  
  // Updates a student to a set id number
  router.post('/:id/edit', studentController.updateId);
  
  module.exports = router;