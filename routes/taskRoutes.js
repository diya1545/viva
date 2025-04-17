const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Task routes
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);

module.exports = router; 