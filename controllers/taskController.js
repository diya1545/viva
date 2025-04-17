const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            description: req.body.description
        });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 