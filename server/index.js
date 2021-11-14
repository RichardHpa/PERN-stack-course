const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();
const timeout = require('connect-timeout');

// middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(timeout('2000'));

// ROUTES //

// Welcome
app.get('/', async (req, res) => {
  return res.json('Welcome to my todo API');
});

// create a todo
app.post('/api/todos', async (req, res) => {
  try {
    const { description } = req.body;
    if (!description || description.length === 0) {
      return res.status(400).json('Your request is missing a description');
    }
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [
      description,
    ]);
    res.json(newTodo.rows[0]);
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

// get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

//get a todo
app.get('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
    if (todo.rowCount === 0) {
      res.status(404).json('Cannot find todo with that id number');
    } else {
      res.json(todo.rows[0]);
    }
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

// update a todo
app.put('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    if (!description || description.length === 0) {
      return res.status(400).json('Your request is missing a description');
    }
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [
      description,
      id,
    ]);
    if (updateTodo.rowCount === 0) {
      res.status(404).json('Cannot find todo with that id number');
    } else {
      res.json('Todo was updated!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a todo
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
    if (deleteTodo.rowCount === 0) {
      res.status(404).json('Cannot find todo with that id number');
    } else {
      res.json('Todo was deleted!');
    }
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
