import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', dueDate: '', status: 'pending' });
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/tasks/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/tasks', form);
      }
      setForm({ title: '', description: '', dueDate: '', status: 'pending' });
      fetchTasks();
    } catch (error) {
      console.error('Submit failed:', error.message);
    }
  };

  const handleEdit = (task) => {
    setForm({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate?.slice(0, 10),
      status: task.status,
    });
    setEditId(task._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Delete failed:', error.message);
    }
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' || task.status === filter
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Task Manager</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="date"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">{editId ? 'Update' : 'Add'} Task</button>
      </form>

      <hr />

      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task._id}>
            <b>{task.title}</b> - {task.description} - {task.dueDate?.slice(0, 10)} - {task.status}
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
