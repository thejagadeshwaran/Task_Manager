const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/taskdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err.message));

// Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, default: 'pending' },
});

// Model
const Task = mongoose.model('Task', taskSchema);

// GET all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log('📦 Fetched tasks:', tasks);
    res.json(tasks);
  } catch (err) {
    console.error('❌ Error fetching tasks:', err.message);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// POST create a task
app.post('/tasks', async (req, res) => {
  try {
    console.log('📥 Received new task:', req.body);
    const task = new Task(req.body);
    await task.save();
    console.log('✅ Task saved:', task);
    res.json(task);
  } catch (err) {
    console.error('❌ Error saving task:', err.message);
    res.status(500).json({ error: 'Failed to save task' });
  }
});

// PUT update a task
app.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log('✏️ Task updated:', updatedTask);
    res.json(updatedTask);
  } catch (err) {
    console.error('❌ Error updating task:', err.message);
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    console.log('🗑 Task deleted:', req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error('❌ Error deleting task:', err.message);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('🚀 Server is running on http://localhost:5000');
});
